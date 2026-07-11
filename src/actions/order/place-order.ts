'use server'


import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { Address } from '@/types/address'
import { User } from 'next-auth'

interface OrderProducts {
  id: string,
  quantity: number,
  price: number
}

export const placeOrder = async (orderItems: OrderProducts[], address: Address) => {


  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    return {
      ok: false,
      message: 'No logged in user',
    };
  }

  const products = await prisma.product.findMany( {
    where: {
      id: {
        in: orderItems.map( item => item.id )
      }
    }
  })


  const itemsQuantity = orderItems.reduce( (count, product) => count + product.quantity, 0)

  const { subTotal, tax, total } = orderItems.reduce( ( totals , item ) => {

    const product = products.find( p => p.id === item.id )

    if (!product) {
      throw new Error("Product doesn't exist")
    }  

    const subTotal = item.price * item.quantity

    totals.subTotal += subTotal
    totals.tax += subTotal * 0.15
    totals.total += subTotal * 1.15 
    return totals

  }, { subTotal: 0, tax: 0, total: 0} )

  console.log(subTotal, tax.toFixed(2), total.toFixed(2))


  try {

    const prismaTx = await prisma.$transaction( async (tx) => {

      const updateProductPromises = products.map((product) => {        
        const productQuantity = orderItems.find( p => product.id === p.id )?.quantity
        if (productQuantity === 0) {
          throw new Error('Not defined product quantity');
        }

        return tx.product.update({
          where: {
            id: product.id,
          },
          data: {
            stock: {
              decrement: productQuantity,
            },
          },
        });
      });

      const updatedProducts = await Promise.all(updateProductPromises);

      updatedProducts.forEach((product) => {
        if (product.stock < 0) {
          throw new Error('Product without enough stock');
        }
      });


      const order = await tx.order.create({
        data: {
          total: +total.toFixed(2),
          tax: +tax.toFixed(2),
          subTotal: +subTotal.toFixed(2),
          itemsInOrder: itemsQuantity,
          userId: userId,

          OrderItem: {
            createMany: {
              data: orderItems.map( item => ({
                quantity: item.quantity,
                productId: item.id,
                price: products.find( product => product.id === item.id )?.price ?? 0    
              }))
            }
          }
        }
      })

      const orderAddress = await tx.orderAddress.create({
        data: {
          street: address.street,
          streetNumber: address.streetNumber,
          apartment: address.apartment,
          city: address.city,
          state: address.state,
          zipCode: address.zipCode,
          observation: address.observation,
          name: address.name,
          phone: address.phone,
          idNumber: address.idNumber,

          countryId: address.country,
          orderId: order.id        
        }
      })



      return {
        order: order,
        orderAddress: orderAddress,
        updatedProducts: updatedProducts
      }     

    })


    return {
      ok: true,
      order: prismaTx.order,
      prismaTx: prismaTx
    }

  
    
  } catch (error) {

    console.error("PLACE ORDER ERROR:", error);

    return {
      ok: false,
      message: JSON.stringify(error)
    }
  }

}