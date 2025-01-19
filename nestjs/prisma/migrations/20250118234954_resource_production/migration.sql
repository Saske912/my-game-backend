/*
  Warnings:

  - You are about to drop the column `lastUpdated` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Planet" ADD COLUMN     "lastUpdated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "lastUpdated";
