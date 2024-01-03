import { PrismaClient } from "@prisma/client";

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
        email: email
      }
    })
    return user;
  } catch (error) {
    console.error(error);
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
    console.log('!!!!!!!  User Created  !!!!!!!!');
    
  } catch (error) {
    console.error(error);
    
  }
}
