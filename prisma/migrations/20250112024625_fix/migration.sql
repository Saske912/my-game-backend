/*
  Warnings:

  - Added the required column `resourceId` to the `Planet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Planet" ADD COLUMN     "resourceId" INTEGER NOT NULL;
