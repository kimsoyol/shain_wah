import {transformData} from '@/lib/utils'
import { unstable_noStore as noStore } from "next/cache";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export async function fetchHomePomes() {
  try {
    const paintings = await prisma.poem.findMany({
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
    throw new Error("Failed to fetch poems for home page.");
  }
}
