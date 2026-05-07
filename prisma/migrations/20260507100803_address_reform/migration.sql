/*
  Warnings:

  - You are about to drop the column `additionalInfo` on the `OrderAddress` table. All the data in the column will be lost.
  - Added the required column `idNumber` to the `OrderAddress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `OrderAddress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `OrderAddress` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OrderAddress" DROP COLUMN "additionalInfo",
ADD COLUMN     "idNumber" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "observation" TEXT,
ADD COLUMN     "phone" TEXT NOT NULL;
