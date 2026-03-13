import 'dotenv/config'
import { Category, SubCategory, Product, PrismaClient, Attribute } from '../../generated/prisma';
import { seedData } from './seed-products';
import { PrismaPg } from '@prisma/adapter-pg'



// Creamos el adapter con la URL de conexión
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
})

const prisma = new PrismaClient({ adapter })

const { categories, subCategories, products, attributes } = seedData

async function main() {  

  await prisma.product.deleteMany()
  await prisma.subCategoryAttribute.deleteMany()
  await prisma.subCategory.deleteMany()
  await prisma.category.deleteMany()
  await prisma.attribute.deleteMany()

  

  const createdCategories: Record<string, Category> = {}
  const createdSubCategories: Record<string, SubCategory> = {}
  const createdProducts: Record<string, Product> = {}
  const createdAttributes: Record<string, Attribute> = {}

  for(const category of categories){
    const categoryDb = await prisma.category.create({
      data: category
    })
    createdCategories[categoryDb.name] = categoryDb
  }
  

  for( const { category, ...rest  } of subCategories ) {
    const subCategoryDb = await prisma.subCategory.create({
      data: {
        ...rest,
        categoryId: createdCategories[category].id
      },      
    })
    createdSubCategories[subCategoryDb.name] = subCategoryDb
  }


  for( const { subCategory, ...rest  } of products ) {
    const productDb = await prisma.product.create({
      data: {
        ...rest,
        subCategoryId: createdSubCategories[subCategory].id
      },        
    })
    createdProducts[productDb.name] = productDb
  }

  for (const attributeGroup of Object.values(attributes)) {
    for (const attribute of attributeGroup) {

      const attributeDb = await prisma.attribute.create({
        data: attribute
      })

      createdAttributes[attributeDb.name] = attributeDb
    }
  }


  const gpuSubCategories = ['AMD Radeon', 'NVIDIA Geforce']

  const gpuSubCategoryAttributes =
    seedData.attributes.gpu.flatMap(attr =>
      gpuSubCategories.map(sub => ({
        subCategory: sub,
        attribute: attr.name
      }))
    )  

  for( const { subCategory, attribute  } of gpuSubCategoryAttributes ) {
    await prisma.subCategoryAttribute.create({
      data: {
        attributeId: createdAttributes[attribute].id,
        subCategoryId: createdSubCategories[subCategory].id
      },        
    })
  }

  



}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });