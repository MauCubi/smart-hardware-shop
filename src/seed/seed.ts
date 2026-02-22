import 'dotenv/config'
import { Category, PrismaClient } from '../../generated/prisma';
import { seedData } from './seed-products';
import { PrismaPg } from '@prisma/adapter-pg'



// Creamos el adapter con la URL de conexión
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
})

const prisma = new PrismaClient({ adapter })

const { categories, subCategories } = seedData

async function main() {
  
  console.log('llego!!!')
  await prisma.subCategory.deleteMany()
  await prisma.category.deleteMany()

  

  const createdCategories: Record<string, Category> = {}

  for(const category of categories){
    const categoryDb = await prisma.category.create({
      data: category
    })
    createdCategories[categoryDb.name] = categoryDb
  }

  console.log(createdCategories)
  

  for( const { category, ...rest  } of subCategories ) {
    await prisma.subCategory.create({
      data: {
        ...rest,
        categoryId: createdCategories[category].id
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