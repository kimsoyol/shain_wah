import { PrismaClient } from "@prisma/client";
import { unstable_noStore as noStore } from "next/cache";
const moment = require('moment');

import bcrypt from "bcryptjs";
const prisma = new PrismaClient();

// GET ALL
export async function getAll() {
  try {
    const data = await prisma.user.findMany();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchUser(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    return user;
  } catch (error) {
    console.error(error);
  }
}

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredPoems(query: string, currentPage: number) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const poems = await prisma.poem.findMany({
      skip: offset,
      take: ITEMS_PER_PAGE,
      include: {
        author: true,
      },
    });

    // Transform the author field from an object to a string
    const transformedPoems = poems.map((poem, index) => ({
      ...poem,
      id: index + 1,
      author: poem.author.name,
      createdAt: moment(poem.createdAt).format('ll'),
    }));

    console.log("----- fetched fetchFilteredPoems -----");

    
    return transformedPoems;
  } catch (error) {
    console.error("Database Error", error);
    throw new Error("Failed to fetch invoices.");
  }
}

export async function fetchPoemsPages(params: string) {
  noStore();
  try {
    const totalPages = await prisma.poem.count();
    console.log("----- fetched fetchPoemsPages -----");
    return totalPages;
  } catch (error) {
    console.error("Database Error", error);
    throw new Error("Failed to fetch total number of poems.");
  }
}

export async function getAllPoems() {
  try {
    const poems = await prisma.poem.findMany({
      include: {
        author: true,
      },
    });

    console.log("----- fetched getAllPoems -----");

    return {
      data: JSON.parse(JSON.stringify(poems)),
    };
  } catch (error) {
    console.log(error);
  }
}

export async function createUser() {
  try {
    await prisma.user.create({
      data: {
        name: "admin",
        email: "admin@gmail.com",
        password: await bcrypt.hash("123456", 10),
      },
    });
    console.log("!!!!!!!  User Created  !!!!!!!!");
  } catch (error) {
    console.error(error);
  }
}
