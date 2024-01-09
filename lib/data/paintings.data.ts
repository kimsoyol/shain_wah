
import {transformData} from '@/lib/utils'
import { unstable_noStore as noStore } from "next/cache";
const moment = require("moment");

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();



export async function fetchHomePaintings() {
  try {
    const paintings = await prisma.painting.findMany({
      orderBy: { createdAt: 'desc' },
      take: 4,
      include: {
        author: true,
      },
    })

    const data = transformData(paintings)

    return data
    
  } catch (error) {
    console.error("Database Error", error);
    throw new Error("Failed to fetch paintings for home page.");
  }
}

const ITEMS_PER_PAGE = 6;
export async function fetchPaintingsPages(params: string) {
  noStore();
  try {
    const count = await prisma.painting.count();
    const totalPages = Math.ceil(Number(count) / ITEMS_PER_PAGE);

    console.log("----- fetched fetchPaintingPages -----");
    return totalPages;
  } catch (error) {
    console.error("Database Error", error);
    throw new Error("Failed to fetch total number of paintings.");
  }
}

export async function fetchFilteredPaintings(
  query: string,
  currentPage: number
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const paintings = await prisma.painting.findMany({
      skip: offset,
      take: ITEMS_PER_PAGE,
      include: {
        author: true,
      },
    });

    const transformedData = paintings.map((painting, index) => ({
      ...painting,
      id: index + 1,
      author: painting.author.name,
      createdAt: moment(painting.createdAt).format("ll"),
    }));

    console.log("----- fetched fetchFilteredPaintings -----");

    return transformedData;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch paintings.");
  }
}

export async function fetchPaintings() {
  try {
    const paintings = await prisma.painting.findMany({
      include: {
        author: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const data = await transformData(paintings);

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch paintings.");
  }
}

// for unlimited scroll
// export async function fetchPaintings(page: number) {
//   try {
//     const paintings = await prisma.painting.findMany({
//       skip: page,
//       take: ITEMS_PER_PAGE,
//       include: {
//         author: true,
//       },
//     });

//     const data = paintings.map((painting) => ({
//       ...painting,
//       author: painting.author.name,
//       createdAt: moment(painting.createdAt).format("ll"),
//     }));

//     console.log("---- fetched fetchPaintings -----");

//     return data.map((item: PaintingProp, index: number) => (
//       <PaintingCard key={item.id} painting={item} index={index} />
//     ));
//   } catch (error) {
//     console.error("Database Error", error);
//     throw new Error("Failed to fetch paintings.");
//   }
// }
