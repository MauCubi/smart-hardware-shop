import { prisma } from '@/lib/prisma'


export const getAllAttributes = async() => {


  try {
    const allAttributes = await prisma.category.findMany({          
      include: {
        subCategories: {
         include: {
          attributes: {
            include: {
              attribute: {
                include: {
                  options: true
                }
              }
            }
          }
         } 
        }
      }   
    })    
    

    return allAttributes

    
  } catch (error) {
    throw new Error("Error getting attributes" + error)
    console.log(error)
  }
}