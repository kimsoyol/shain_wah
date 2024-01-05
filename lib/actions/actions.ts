"use server";
import { z } from "zod";
import { writeFile } from "fs/promises";
import path from "path";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { createWriteStream } from "fs";

// ...
export type State = {
  errors?: {
    img?: string[];
  };
  message?: string | null;
};

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

export async function createImg(prevState: string | undefined, formData: FormData) {
  const schema = z.object({
    img: z.any(),
  });

  const data = schema.parse({
    img: formData.get("img"),
  });
  const img = data.img
  const buffer = Buffer.from(await img.arrayBuffer())
  const filename = Date.now() + img.name.replaceAll(" ", "_");
  try {
      await writeFile(
        path.join(process.cwd(), "uploads/" + filename),
        buffer
      );
      console.log("success  --" + filename);
  } catch (error) {
    console.log(error);
    return {
      message: 'error'
    }
  }
}
