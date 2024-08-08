/*
  Warnings:

  - Added the required column `updated` to the `pantry` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pantry" ADD COLUMN     "updated" TIMESTAMP(3) NOT NULL;
