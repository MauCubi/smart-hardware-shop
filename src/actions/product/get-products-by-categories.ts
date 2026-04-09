'use server'
import { prisma } from '@/lib/prisma';
import { Prisma } from '../../../generated/prisma/index';


export const getByCategory = async( where: Prisma.ProductWhereInput, category: string, sort: string = 'new') => {  

  let sortOrder: Prisma.ProductOrderByWithRelationInput  

  if (sort === 'new') {
    sortOrder = {
      createdAt: 'desc'
    }
  } else {
    sortOrder = {
      price: sort === 'highprice' ? 'desc' : 'asc'
    }
  }


  try {    

    const products = await prisma.product.findMany({
      where: where,
      orderBy: sortOrder
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

    const subCategoriesCounts = await prisma.product.groupBy({
      by: ['subCategoryId'],
      where: {
        subCategory: {
          category: { name: category }
        }
      },
      _count: true
    });

    const subCategories = await prisma.subCategory.findMany({
      where: {
        id: {
          in: subCategoriesCounts.map(b => b.subCategoryId)
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

    const subCategoriesWithCount = subCategories.map((subCategory) => {
    const found = subCategoriesCounts.find(b => b.subCategoryId === subCategory.id);

    return {
      ...subCategory,
      count: found?._count || 0
    };
  });
      
    return {
      products: products,
      brandFilter: brandsWithCount,
      subCategoryFilter: subCategoriesWithCount
    }
      
  } catch (error) {
      throw new Error('No se pudo cargar los productos');
      console.log(error)
    }

}