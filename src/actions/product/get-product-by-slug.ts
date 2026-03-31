import { prisma } from '@/lib/prisma'
import { groupBy } from '@/utils/orderAttributes'



interface Props {
  slug: string
}

export const getProductBySlug = async ( { slug }: Props ) => {


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
                name: true,
                group: true,
                unit: true                
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
            category: true
          }
        }   
        
      }      
    })
    

    // console.log(product?.productAttributes)
    

    const attributes = product?.productAttributes.map(pa => ({
      group: pa.attribute.group,
      name: pa.attribute.name,
      unit: pa.attribute.unit,
      value: pa.valueString ?? pa.valueNumber ?? pa.valueBoolean ?? pa.option?.value ?? ''
    }))

    
    const groupedAttributes = groupBy(attributes ? attributes : [], "group")      

    // console.log(groupedAttributes)

    

    return {
      product,
      groupedAttributes
    }
    
  } catch (error) {
    throw new Error("Error getting product")
    console.log(error)
  }

}