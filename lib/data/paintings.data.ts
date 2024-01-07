import { unstable_noStore as noStore } from "next/cache";
const moment = require("moment");
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
    throw new Error("Failed to fetch total number of poems.");
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
      }
    })

    const transformedPaintings = paintings.map((painting, index) => ({
      ...painting,
      id: index + 1,
      author: painting.author.name,
      createdAt: moment(painting.createdAt).format('ll'),
    }))

    console.log("---- fetched fetchFilteredPaintings -----");

    return transformedPaintings;
  } catch (error) {
    console.error("Database Error", error);
    throw new Error("Failed to fetch paintings.")
  
  }
}
