'use client'
import { Category, Product, ProductAttributeSchema, SubCategoryAttributes } from '@/types/product';
import { SubCategory } from '../../types/product';
import { ChangeEvent, useState } from 'react';

interface Props {
  mode: string,
  product?: Product,
  attributes: SubCategoryAttributes[],
  categories?: Category[]
}

export const ProductForm = ({mode, product, attributes = [], categories}: Props) => {

  console.log(product?.subCategory?.attributes)

  const [selectedCategory, setSelectedCategory] = useState(categories?.[0]?.name ?? '')
  const [selectedSubCategory, setSelectedSubCategory] = useState(categories?.[0]?.subCategories?.[0]?.name ?? '')
  // const [attributesForm, setAttributesForm] = useState( product ? product?.subCategory?.attributes : categories?.[0].subCategories?.[0].attributes )

  const attributeForm = 
    product 
    ? product?.subCategory?.attributes 
    : categories?.find(category => category.name === selectedCategory )?.subCategories?.find( subcategory => subcategory.name === selectedSubCategory)?.attributes

  console.log('leatribute', attributeForm)

  const onSelectcategory = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.currentTarget.value
    setSelectedCategory(value)
    setSelectedSubCategory(categories?.find(category => category.name === value )?.subCategories?.[0]?.name  ?? '' )
  }

  const onSelectSubCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.currentTarget.value
    setSelectedSubCategory(value)
  }


  

  return (
        <form onSubmit={ () => {} } className='rounded-2xl px-4 w-full md:w-[50%] py-14 md:py-10'>

          <div className='flex md:mb-6 mb-3 justify-between align-middle items-center'>
            <h1 className='titles text-md md:text-3xl font-mono'>{  mode === 'new' ? 'New Product' : 'Edit Product' }</h1>
            <span className='text-xs text-gray-400 italic font-mono'>* Required field</span>        
            { selectedCategory } { selectedSubCategory} 
          </div>

          {
            mode === 'new'
            &&
            <div className='flex gap-4'>
              <select value={selectedCategory} className='bg-zinc-100 rounded-md text-heading text-sm md:text-base focus:outline-[#0A84FF] block w-full px-3 py-2 placeholder:text-body border-2 focus:border-blue-400 focus:ring-0 outline-none '
                onChange={
                  (e) => onSelectcategory(e)
                }
              >
                {
                  categories?.map( category => 
                    <option key={category.name} value={category.name}> { category.name }</option>
                  )
                }
              </select>
              <select 
              value={selectedSubCategory} 
              className='bg-zinc-100 rounded-md text-heading text-sm md:text-base focus:outline-[#0A84FF] block w-full px-3 py-2 placeholder:text-body border-2 focus:border-blue-400 focus:ring-0 outline-none '
              onChange={
                (e) => onSelectSubCategory(e)
              }
              >
                
                {
                  categories?.find( category => category.name === selectedCategory)?.subCategories?.map(
                    subCategory => 
                      <option key={subCategory.name} value={subCategory.name}>{ subCategory.name }</option>
                  )
                }
              </select>

            </div>
          }
          {
            product?.subCategory?.attributes?.map( attribute =>  
              <div className='flex flex-col mb-5' key={attribute.attribute.id}>
                {
                  !product &&
                  <></>
                }
                <label htmlFor={ attribute.attribute.name } className='titles block mb-1 text-sm '>{ attribute.attribute.name } { attribute.attribute.required ? '*' : '' } </label>
                {
                  attribute.attribute.type === 'BOOLEAN' ?
                  <select defaultValue={product.productAttributes.find( productAttribute => productAttribute.attribute.name === attribute.attribute.name )?.valueBoolean === true ? "1" : "0" } className='bg-zinc-100 rounded-md text-heading text-sm md:text-base focus:outline-[#0A84FF] block w-full px-3 py-2 placeholder:text-body border-2 focus:border-blue-400 focus:ring-0 outline-none '>
                    <option value="0">No</option>
                    <option value="1">Yes</option>
                  </select>
                  :
                  attribute.attribute.type === 'SELECT' 
                  ?
                  <select defaultValue={ product && product.productAttributes.find( productAttribute => productAttribute.attribute.name === attribute.attribute.name )?.option?.value} className='bg-zinc-100 rounded-md text-heading text-sm md:text-base focus:outline-[#0A84FF] block w-full px-3 py-2 placeholder:text-body border-2 focus:border-blue-400 focus:ring-0 outline-none '>
                    {
                      attribute.attribute.options?.map( option => 
                        <option key={option.id} value={option.value}>{ option.value }</option>
                      )
                    }
                  </select>
                  :
                  <input value={ attribute.attribute.type === 'NUMBER' 
                    ? !product ? 0 : product.productAttributes.find( productAttribute => productAttribute.attribute.name === attribute.attribute.name )?.valueNumber 
                    : !product.productAttributes.find( productAttribute => productAttribute.attribute.name === attribute.attribute.name )?.valueString ? '' : product.productAttributes.find( productAttribute => productAttribute.attribute.name === attribute.attribute.name )?.valueString} 
                    id={ attribute.attribute.name } type={attribute.attribute.type}
                    className='bg-zinc-100 rounded-md text-heading text-sm md:text-base focus:outline-[#0A84FF] block w-full px-3 py-2 placeholder:text-body'
                  />
                }
                {/* {errors.street && <span className='text-red-500'>{errors.street.message}</span>} */}
              </div>
            )
          }
    
    
     
    
          <div className='flex justify-between my-6 gap-6 md:gap-4 w-full'>
    
              <button className='titles py-2 px-4 bg-[#0A84FF] rounded-lg cursor-pointer hover:bg-[#016edb]'>
                Back
              </button>
    
              <button type='submit' className='titles py-2 px-4 bg-[#0A84FF] rounded-lg cursor-pointer hover:bg-[#016edb]'>
                Continue
              </button>
    
          </div>
    
    
        </form>
  )
}
