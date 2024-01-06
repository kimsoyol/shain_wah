"use server";
import { z } from "zod";
import { writeFile } from "fs/promises";
import path from "path";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { revalidatePath } from "next/cache";
import moment from 'moment'

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// ...

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
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

