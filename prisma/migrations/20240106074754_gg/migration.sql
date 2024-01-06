/*
  Warnings:

  - Added the required column `imgURL` to the `Painting` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Painting" ADD COLUMN     "imgURL" TEXT NOT NULL;
