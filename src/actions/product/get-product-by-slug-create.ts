import { prisma } from '@/lib/prisma'



interface Props {
  slug: string
}

export const getProductBySlugCreate = async ( { slug }: Props ) => {


  try {

    const product = await prisma.product.findUnique({
      where: {
        slug: slug
      },
      include: {
        productAttributes: {
          include: {            
            attribute: {
              select: {
                id: true,
                type: true,
                name: true,
                group: true,
                unit: true,
                required: true,
                options: true                
              }
            },            
            option: {
              select: {
                value: true
              }
            },                        
          },                    
        },
        subCategory: {
          select: {
            name: true,
            category: true,
            attributes: {
              select: {
                attribute: {
                  include: {
                    options: true
                  }
                },      
                        
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
    })     

    console.log(product)
    

    return {
      product: product,
      attributes: product?.subCategory.attributes
    }
    
  } catch (error) {
    throw new Error("Error getting product")
    console.log(error)
  }

}