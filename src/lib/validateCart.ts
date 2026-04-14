import { CartProducts } from '@/types/product';
import { prisma } from './prisma';

export const validateCart = async (products: CartProducts[]) => {  

  const productsValidated = await prisma.product.findMany({
    where: {
      id: {
        in: products.map((product) => product.id),
      },
    },
  });

  return productsValidated
};
