/*
  Warnings:

  - Changed the type of `publishedOn` on the `Book` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `createdAt` on the `Casting` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `createdAt` on the `Painting` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `createdAt` on the `Poem` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Book" DROP COLUMN "publishedOn",
ADD COLUMN     "publishedOn" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Casting" DROP COLUMN "createdAt",
ADD COLUMN     "createdAt" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Painting" DROP COLUMN "createdAt",
ADD COLUMN     "createdAt" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Poem" DROP COLUMN "createdAt",
ADD COLUMN     "createdAt" INTEGER NOT NULL;
