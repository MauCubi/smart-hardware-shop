'use server'
import { prisma } from '@/lib/prisma';
import { Prisma, SubCategory } from '../../../generated/prisma/index';
import { subscribe } from 'diagnostics_channel';



// export const getByCategory = async( category: string, search: 'category' | 'subCategory' ) => {

//   try {      
        
//     // const subCategory = await prisma.subCategory.findFirst({where: { name: category } })    



    
//     let products

//     if (search === 'subCategory') {
//       products = await prisma.product.findMany({
//         where: {
//           OR:[
//             { subCategory: { name: category }}
//           ]
//         },        
//       })          
//     } else {
//      products = await prisma.product.findMany({
//         where: {
//           subCategory: {
//             category: {
//               name: category
//             }
//           }
//         }      
//       })        
//     }
        
//       return products
      
//     } catch (error) {
//       throw new Error('No se pudo cargar los productos');
//       console.log(error)
//     }

// }

export const getByCategory = async( where: Prisma.ProductWhereInput, category: string) => {

  try {    

    const products = await prisma.product.findMany({
      where: where,      
    })


    const brandCounts = await prisma.product.groupBy({
      by: ['brandId'],
      where: {
        subCategory: {
          category: { name: category }
        }
      },
      _count: true
    });

    const brands = await prisma.brand.findMany({
      where: {
        id: {
          in: brandCounts.map(b => b.brandId)
        }
      }
    });

    const brandsWithCount = brands.map((brand) => {
    const found = brandCounts.find(b => b.brandId === brand.id);

    return {
      ...brand,
      count: found?._count || 0
    };
  });
      
    return {
      products: products,
      brandFilter: brandsWithCount
    }
      
  } catch (error) {
      throw new Error('No se pudo cargar los productos');
      console.log(error)
    }

}