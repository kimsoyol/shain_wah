'use server'

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import {z } from 'zod'
import path from "path";
import { writeFile } from "fs/promises";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export type State = {
  errors?: {
    img?: string[];
    title?: string[];
    author?: string[];
  };
  message?: string | null;
};


export async function createPainting(prevState: State, formData: FormData) {
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
      message: "Missing Fields.",
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
    revalidatePath('/dashboard/paintings');
    redirect('/dashboard/paintings');

  } catch (error) {
    console.log(error);
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }
}
