-- CreateTable
CREATE TABLE "Attribute" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "AttributeType" NOT NULL,
    "group" TEXT NOT NULL,
    "unit" TEXT,

    CONSTRAINT "Attribute_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubCategoryAttribute" (
    "subCategoryId" TEXT NOT NULL,
    "attributeId" TEXT NOT NULL,

    CONSTRAINT "SubCategoryAttribute_pkey" PRIMARY KEY ("subCategoryId","attributeId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Attribute_name_key" ON "Attribute"("name");

-- AddForeignKey
ALTER TABLE "SubCategoryAttribute" ADD CONSTRAINT "SubCategoryAttribute_subCategoryId_fkey" FOREIGN KEY ("subCategoryId") REFERENCES "SubCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubCategoryAttribute" ADD CONSTRAINT "SubCategoryAttribute_attributeId_fkey" FOREIGN KEY ("attributeId") REFERENCES "Attribute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
