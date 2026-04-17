import 'dotenv/config'
import { Category, SubCategory, Product, Attribute, AttributeOption, Brand } from '../../generated/prisma';
import { seedData } from './seed-products';
import { prisma } from '@/lib/prisma';
import { countries } from './seed-countries';



const { categories, subCategories, products, attributes, attributeOptions, productAttributes, brands } = seedData

async function main() {  

  await prisma.attributeOption.deleteMany()
  await prisma.productAttribute.deleteMany()
  await prisma.product.deleteMany()
  await prisma.brand.deleteMany()
  await prisma.subCategoryAttribute.deleteMany()
  await prisma.subCategory.deleteMany()
  await prisma.category.deleteMany()
  await prisma.attribute.deleteMany()
  await prisma.country.deleteMany()

  
  const createdBrands: Record<string, Brand> = {}
  const createdCategories: Record<string, Category> = {}
  const createdSubCategories: Record<string, SubCategory> = {}
  const createdProducts: Record<string, Product> = {}
  const createdAttributes: Record<string, Attribute> = {}
  const createdAttributeOptions: Record<string, AttributeOption> = {}
  // const createdProductAttributes: Record<string, ProductAttribute> = {}

  await prisma.country.createMany({
    data: countries
  })

  for(const category of categories){
    const categoryDb = await prisma.category.create({
      data: category
    })
    createdCategories[categoryDb.name] = categoryDb
  }

  for(const brand of brands){
    const brandDb = await prisma.brand.create({
      data: brand
    })
    createdBrands[brandDb.name] = brandDb
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


  for( const { subCategory, brand, ...rest  } of products ) {
    const productDb = await prisma.product.create({
      data: {
        ...rest,
        subCategoryId: createdSubCategories[subCategory].id,        
        brandId: createdBrands[brand].id
      },        
    })
    createdProducts[productDb.name] = productDb
  }

  for (const attributeGroup of Object.values(attributes)) {
    for (const attribute of attributeGroup) {

      const attName = await prisma.attribute.findUnique({
        where: {
          name: attribute.name
        }
      })

      if (!attName) {
        const attributeDb = await prisma.attribute.create({
          data: attribute
        })        
        createdAttributes[attributeDb.name] = attributeDb
      }
      // console.log(attName)

    }
  }


  const gpuSubCategories = ['AMD Radeon', 'NVIDIA Geforce']

  const gpuSubCategoryAttributes =
    seedData.attributes.gpu.flatMap( attr =>
      gpuSubCategories.map( sub => ({
        subCategory: sub,
        attribute: attr.name
      }))
    )  

  const ramSubCategories = ['DDR5', 'DDR4', 'DDR3']

  const ramSubCategoryAttributes =
    seedData.attributes.ram.flatMap( attr =>
      ramSubCategories.map( sub => ({
        subCategory: sub,
        attribute: attr.name
      }))
    )  

  const motherboardSubCategories = ['AMD Motherboards', 'Intel Motherboards']

  const motherboardSubCategoryAttributes =
    seedData.attributes.motherboard.flatMap( attr =>
      motherboardSubCategories.map( sub => ({
        subCategory: sub,
        attribute: attr.name
      }))
    )  

  const monitorsSubCategories = ['Up to 75 Hz', '100 - 144 Hz', '165 - 180 Hz', '200 - 240 Hz', '280 Hz']

  const monitorsSubCategoryAttributes =
    seedData.attributes.monitor.flatMap( attr =>
      monitorsSubCategories.map( sub => ({
        subCategory: sub,
        attribute: attr.name
      }))
    )  

  const keyboardSubCategoryAttributes =  
    seedData.attributes.keyboard.flatMap( attr => ({ 
        subCategory: 'Keyboards', 
        attribute: attr.name 
      })
    )

  const mouseSubCategoryAttributes =  
    seedData.attributes.mouse.flatMap( attr => ({ 
        subCategory: 'Mouse', 
        attribute: attr.name 
      })
    )

  const headphonesSubCategoryAttributes =  
    seedData.attributes.headphones.flatMap( attr => ({ 
        subCategory: 'Headphones', 
        attribute: attr.name 
      })
    )

  const ssdSubCategoryAttributes =  
    seedData.attributes.ssd.flatMap( attr => ({ 
        subCategory: 'SDD', 
        attribute: attr.name 
      })
    )

  const hddSubCategoryAttributes =  
    seedData.attributes.hdd.flatMap( attr => ({ 
        subCategory: 'HDD', 
        attribute: attr.name 
      })
    )

  const psuSubCategoryAttributes =  
    seedData.attributes.psu.flatMap( attr => ({ 
        subCategory: 'PSUs', 
        attribute: attr.name 
      })
    )

  const chairSubCategoryAttributes =  
    seedData.attributes.chair.flatMap( attr => ({ 
        subCategory: 'Gaming Chairs', 
        attribute: attr.name 
      })
    )
    
  const deskSubCategoryAttributes =  
    seedData.attributes.desk.flatMap( attr => ({ 
        subCategory: 'Desktops', 
        attribute: attr.name 
      })
    )

  const wifiAdapterCategoryAttributes =  
    seedData.attributes.wifi_adapter.flatMap( attr => ({ 
        subCategory: 'WiFi Adapters', 
        attribute: attr.name 
      })
    )

  const attributesArray = [
    gpuSubCategoryAttributes,
    ramSubCategoryAttributes,
    motherboardSubCategoryAttributes,
    keyboardSubCategoryAttributes,
    mouseSubCategoryAttributes,
    headphonesSubCategoryAttributes,
    ssdSubCategoryAttributes,
    psuSubCategoryAttributes,
    chairSubCategoryAttributes,
    deskSubCategoryAttributes,
    hddSubCategoryAttributes,
    wifiAdapterCategoryAttributes,
    monitorsSubCategoryAttributes
  ]  

  // console.log(createdSubCategories)


  for (const array of attributesArray) {
    for (const { subCategory, attribute } of array) {
      await prisma.subCategoryAttribute.create({
        data: {
          attributeId: createdAttributes[attribute].id,
          subCategoryId: createdSubCategories[subCategory].id
        },
      })
    }
  }

  for (const [key, values] of Object.entries(attributeOptions) ){
    for (const value of values) {
      const attributeOptionDb = await prisma.attributeOption.create({
        data: {
          value: value,
          attributeId: createdAttributes[key].id
        }
      })
      createdAttributeOptions[attributeOptionDb.value] = attributeOptionDb
    }
  }

  for (const [key, values ] of Object.entries(productAttributes)){

    for(const value of values) {

      if (value.valueString) {
        const attributeProductDb = await prisma.productAttribute.create({
          data: {
            valueString: value.valueString,
            attributeId: createdAttributes[value.attribute].id,
            productId: createdProducts[key].id,              
          }
        })
        // console.log(attributeProductDb)        
      }

      else if(value.valueNumber) {
        const attributeProductDb = await prisma.productAttribute.create({
          data: {
            valueNumber: value.valueNumber,
            attributeId: createdAttributes[value.attribute].id,
            productId: createdProducts[key].id,              
          }
        })
        // console.log(attributeProductDb)      
      }

      else if(value.valueBoolean){
        const attributeProductDb = await prisma.productAttribute.create({
          data: {
            valueBoolean: value.valueBoolean,
            attributeId: createdAttributes[value.attribute].id,
            productId: createdProducts[key].id,              
          }
        })
        // console.log(attributeProductDb)    
      }

      else if(value.option){
        const attributeProductDb = await prisma.productAttribute.create({
          data: {
            optionId: createdAttributeOptions[value.option].id,
            attributeId: createdAttributes[value.attribute].id,
            productId: createdProducts[key].id,              
          }
        })
        // console.log(attributeProductDb)    
      }
      }
    }
  
  
  
//   for( const { subCategory, attribute  } of gpuSubCategoryAttributes ) {
//     await prisma.subCategoryAttribute.create({
//       data: {
//         attributeId: createdAttributes[attribute].id,
//         subCategoryId: createdSubCategories[subCategory].id
//       },        
//     })
// }


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