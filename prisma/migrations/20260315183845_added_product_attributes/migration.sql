/*
  Warnings:

  - The primary key for the `ProductAttribute` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[productId,attributeId]` on the table `ProductAttribute` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "brand" TEXT;

-- AlterTable
ALTER TABLE "ProductAttribute" DROP CONSTRAINT "ProductAttribute_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "optionId" TEXT,
ADD COLUMN     "valueBoolean" BOOLEAN,
ADD COLUMN     "valueNumber" DOUBLE PRECISION,
ADD COLUMN     "valueString" TEXT,
ADD CONSTRAINT "ProductAttribute_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "ProductAttribute_productId_attributeId_key" ON "ProductAttribute"("productId", "attributeId");

-- AddForeignKey
ALTER TABLE "ProductAttribute" ADD CONSTRAINT "ProductAttribute_optionId_fkey" FOREIGN KEY ("optionId") REFERENCES "AttributeOption"("id") ON DELETE SET NULL ON UPDATE CASCADE;
