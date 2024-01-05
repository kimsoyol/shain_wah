"use server";

import { PrismaClient } from "@prisma/client";
import { poemFormSchema } from "../valitators";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const CreatePoem = poemFormSchema;
const prisma = new PrismaClient();

async function testDatabaseConnection() {
  try {
    const authors = await prisma.author.findMany();
    console.log(`Fetched ${authors.length} authors from the database.`);
  } catch (error) {
    console.error(`Failed to fetch authors from the database:`);
  }
 }



export async function createPoem(poemData: any) {
  const authorRecord = await prisma.author.findFirst({
    where: {
      name: poemData.author,
    },
  });

  if (!authorRecord) {
    throw new Error(`No author found with name ${poemData.author}`);
  }

  try {
    testDatabaseConnection();
    await prisma.poem.create({
      data: {
        title: poemData.title,
        body: poemData.body,
        author: {
          connect: {
            id: authorRecord.id,
          },
        },
        createdAt: new Date('12,1,2002'),
      },
    });
    
    console.log("!!!!!   new poem created   !!!!!");
  } catch (error) {
    console.log(error);
    
  }
}
