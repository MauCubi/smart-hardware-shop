'use server'

import { prisma } from '@/lib/prisma'


interface Props {
  page: number,
  take: number
}

export const getPaginatedTableProducts = async ({page = 1, take = 5}: Props) => {



  try {
    const response = await prisma.product.findMany({
      take: take,
      skip: take * (page - 1),
      select: {
        id: true,
        name: true,
        price: true,
        stock: true,
        subCategory: {
          select: {
            name: true,
            category: {
              select: {
                name: true
              }
            }
          }
        },
        brands: {
          select: {
            name: true
          }
        }
        }
      },    
    )
    
    
    const maxPages = Math.ceil(await prisma.product.count() / take)
    
    const products = response.map( data => {
      return {
        id: data.id,
        name: data.name,
        brand: data.brands?.name,
        price: Number(data.price.toFixed(2)),
        stock: data.stock,
        category: data.subCategory.category.name + '/' + data.subCategory.name,
      }
    })
    
    console.log(products)
    console.log(maxPages)

    return {
      products,
      maxPages, 
    }
    
  } catch (error) {
    throw new Error('No se pudo cargar los productos' + error);
  }
    
        // return { 
        //   orders: orders,
        //   maxPages: maxPages,
          
        //  }
}