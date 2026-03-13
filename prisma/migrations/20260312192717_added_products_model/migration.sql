/*
  Warnings:

  - You are about to drop the column `inStock` on the `Product` table. All the data in the column will be lost.
  - Added the required column `stock` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AttributeType" AS ENUM ('STRING', 'NUMBER', 'BOOLEAN', 'SELECT');

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "inStock",
ADD COLUMN     "discountPrice" DOUBLE PRECISION,
ADD COLUMN     "sku" TEXT,
ADD COLUMN     "stock" INTEGER NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;
