"use server";


import path from "path";
import { PrismaClient } from "@prisma/client";
import { poemFormSchema } from "../valitators";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {z } from 'zod'
import { writeFile } from "fs/promises";

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
export type State = {
  errors?: {
    imgId?: string;
    titleId?: string;
    authorId?: string;
  };
  message?: string | null;
};

export async function createImg(prevState: State, formData: FormData) {
  const schema = z.object({
    img: z.any(),
    title: z.string(),
    author: z.string(),
  });

  const validatedData = schema.safeParse({
    title: formData.get("title"),
    author: formData.get("author"),
    img: formData.get("img"),
  });

  if (!validatedData.success) {
    return {
      errors: validatedData.error.flatten().fieldErrors,
      message: "Missing Fields",
    };
  }

  const { img, title, author } = validatedData.data;
  const time = new Date("12,1,2002");
  const buffer = Buffer.from(await img.arrayBuffer());
  const filename = (
    Date.now() +
    "-" +
    img.name.replaceAll(" ", "_")
  ).toString();

  // check author first
  const authorRecord = await prisma.author.findFirst({
    where: {
      name: author,
    },
  });

  if (!authorRecord) {
    throw new Error(`No author found with name ${validatedData.data.author}`);
  }

  try {
    await writeFile(path.join(process.cwd(), "uploads/" + filename), buffer);
    await prisma.painting.create({
      data: {
        title: title,
        author: {
          connect: {
            id: authorRecord.id,
          },
        },
        imgURL: `uploads/${filename}`,
        createdAt: new Date('12,1,2002'),
      },
    });
    console.log("!!!!!   new painting created   !!!!!");
    return { message: "success" };
  } catch (error) {
    console.log(error);
    return {
      message: "error",
    };
  }
}
