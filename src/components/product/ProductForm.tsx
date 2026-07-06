'use client'
import { Category, ProductFormType, SubCategoryAttributes } from '@/types/product';
import { ChangeEvent, useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form"

interface Props {
  mode: string,
  product?: ProductFormType,
  attributes: SubCategoryAttributes[],
  categories?: Category[]
}


type AttributeValue = string | number | boolean

type ProductInput = {
  name: string,
  description: string,
  brand: string,
  price: number,
  stock: number,
  attributes: Record< string, AttributeValue>
}


export const ProductForm = ({mode, product, attributes = [], categories}: Props) => {
  
  
  
  // console.log(product?.subCategory?.attributes)
  
  const [selectedCategory, setSelectedCategory] = useState(categories?.[0]?.name ?? '')
  const [selectedSubCategory, setSelectedSubCategory] = useState(categories?.[0]?.subCategories?.[0]?.name ?? '')
  // const [attributesForm, setAttributesForm] = useState( product ? product?.subCategory?.attributes : categories?.[0].subCategories?.[0].attributes )
  
  const attributeForm = 
  product 
  ? product?.subCategory?.attributes 
  : categories?.find(category => category.name === selectedCategory )?.subCategories?.find( subcategory => subcategory.name === selectedSubCategory)?.attributes
  
  // console.log('attributeForm', attributeForm)
  
  const onSelectcategory = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.currentTarget.value
    setSelectedCategory(value)
    setSelectedSubCategory(categories?.find(category => category.name === value )?.subCategories?.[0]?.name  ?? '' )
  }
  
  const onSelectSubCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.currentTarget.value
    setSelectedSubCategory(value)
  } 
  
  const { register, handleSubmit, formState: { errors }, setError, setValue } = useForm<ProductInput>({
    defaultValues: {
      name: product ? product.name : '',
      description: product?.description ? product.description : '',
      price: product ? product.price : 0,
      stock: product ? product.stock : 0,
      brand: product ? product.brands.name : '',

      attributes: product?.productAttributes?.reduce(
        (acc, attribute) => {
          acc[attribute.attribute.id] =
            attribute.valueBoolean ? attribute.valueBoolean === true ? 1 : 0 :
            attribute.attribute.type === 'NUMBER' ? attribute.valueNumber !== undefined ? attribute.valueNumber : 0 :
            attribute.attribute.type === 'SELECT' ? attribute.option?.value as string : 
            attribute.valueString ? attribute.valueString : '';

          return acc;
        },
        {} as Record<string, AttributeValue>
      )
    }
  })
  
  

    const onSubmit: SubmitHandler<ProductInput> = async (data) => {      

      const { name, description, price, stock, attributes } = data

      console.log('submited attributes', attributes)
  
    }

  return (
        <form onSubmit={ handleSubmit(onSubmit) } className='rounded-2xl px-4 w-full md:w-[50%] py-14 md:py-10'>

          <div className='flex md:mb-6 mb-3 justify-between align-middle items-center'>
            <h1 className='titles text-md md:text-3xl font-mono'>{  mode === 'new' ? 'New Product' : 'Edit Product' }</h1>
            <span className='text-xs text-gray-400 italic font-mono'>* Required field</span> 
          </div>

          {
            mode === 'new'
            &&
            <div className='flex gap-4 mb-8'>             
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
           <h1 className='titles text-md md:text-3xl mb-2'>General information</h1>

           <div className='flex flex-col mb-5'>
            <label htmlFor='name' className='titles block mb-1 text-sm'>Product name</label>
            <input 
              id='name' 
              type='text'
              className='bg-zinc-100 rounded-md text-heading text-sm md:text-base focus:outline-[#0A84FF] block w-full px-3 py-2 placeholder:text-body'
              { ...register('name',  { required: 'Name required', minLength: { value: 6, message: 'Name minimum 6 characters' } }) }
            />
            { errors.name && <span className='text-red-800'>{errors.name.message}</span> }
           </div>

           <div className='flex flex-col mb-5'>
            <label htmlFor='description' className='titles block mb-1 text-sm '>Description</label>
            <input 
              id='description' 
              type='text'
              className='bg-zinc-100 rounded-md text-heading text-sm md:text-base focus:outline-[#0A84FF] block w-full px-3 py-2 placeholder:text-body'  
              { ...register('description') } 
            />
            { errors.description && <span className='text-red-800'>{errors.description.message}</span> }
           </div>

           <div className='flex flex-col mb-5'>
            <label htmlFor='brand' className='titles block mb-1 text-sm '>Brand</label>
            <input 
              id='brand' 
              type='text'
              className='bg-zinc-100 rounded-md text-heading text-sm md:text-base focus:outline-[#0A84FF] block w-full px-3 py-2 placeholder:text-body'  
              { ...register('brand',  { required: 'Brand required', minLength: { value: 3, message: 'Brand minimum 3 characters' } }) }
            />
           </div>

           <div className='flex flex-col mb-5'>
            <label htmlFor='price' className='titles block mb-1 text-sm'>Price</label>
            <div className='relative'>
            <span className='absolute left-3 top-1/2 -translate-y-1/2 text-body'>
              $
            </span>
            <input 
              id='price' 
              type='number' 
              step='0.01'
              pattern="^\d+(?:\.\d{1,2})?$"
              className='bg-zinc-100 rounded-md text-heading text-sm md:text-base focus:outline-[#0A84FF] block w-full py-2 pl-6 pr-3 placeholder:text-body' 
              min={0}  
              { ...register('price',  { required: 'Price required', min: { value: 0, message: 'Price needs to be at least 0' } }) }
            />
            </div>
           </div>

           <div className='flex flex-col mb-5'>
            <label htmlFor='stock' className='titles block mb-1 text-sm '>Initial stock</label>
            <input 
              id='stock' 
              type='number' 
              className='bg-zinc-100 rounded-md text-heading text-sm md:text-base focus:outline-[#0A84FF] block w-full px-3 py-2 placeholder:text-body' 
              min={0}  
              { ...register('stock',  { required: 'Initial stock required', min: { value: 0, message: 'Stock needs to be at least 0' } }) }
            />
           </div>

           <div className='flex flex-col mb-5'>
            <label htmlFor='stock' className='titles block mb-1 text-sm '>Images</label>
            <input 
              id='image' 
              type='file'
              multiple 
              className='bg-zinc-100 rounded-md text-heading text-sm md:text-base focus:outline-[#0A84FF] block w-full px-3 py-2 placeholder:text-body' 
              min={0}  
              value=''
              onChange={ () => {}}  
            />
           </div>

           <h1 className='titles text-md md:text-3xl mb-2'>Specifications</h1>
          {
            // product?.subCategory?.attributes?.map( attribute =>  
            attributeForm?.map( attribute =>  
              <div className='flex flex-col mb-5' key={attribute.attribute.id}>
                {
                  !product &&
                  <></>
                }
                <label htmlFor={ attribute.attribute.name } className='titles block mb-1 text-sm '>{ attribute.attribute.name } { attribute.attribute.unit ? `(${attribute.attribute.unit})` : '' } { attribute.attribute.required ? '*' : '' } </label>
                {
                  attribute.attribute.type === 'BOOLEAN' ?
                  <select 
                    // defaultValue={product ? product.productAttributes?.find( productAttribute => productAttribute.attribute.name === attribute.attribute.name )?.valueBoolean === true ? "1" : "0" : '0' } 
                    className='bg-zinc-100 rounded-md text-heading text-sm md:text-base focus:outline-[#0A84FF] block w-full px-3 py-2 placeholder:text-body border-2 focus:border-blue-400 focus:ring-0 outline-none '
                    { ...register(`attributes.${attribute.attribute.id}`,  { required: { value: attribute.attribute.required, message: 'This field is required' } }) }
                    >
                    <option value="0">No</option>
                    <option value="1">Yes</option>
                  </select>
                  :
                  attribute.attribute.type === 'SELECT' 
                  ?
                  <select 
                    // defaultValue={ product && product.productAttributes?.find( productAttribute => productAttribute.attribute.name === attribute.attribute.name )?.option?.value} 
                    className='bg-zinc-100 rounded-md text-heading text-sm md:text-base focus:outline-[#0A84FF] block w-full px-3 py-2 placeholder:text-body border-2 focus:border-blue-400 focus:ring-0 outline-none '
                    { ...register(`attributes.${attribute.attribute.id}`,  { required: { value: attribute.attribute.required, message: 'This field is required' } }) }
                    >
                    {
                      attribute.attribute.options?.map( option => 
                        <option key={option.id} value={option.value}>{ option.value }</option>
                      )
                    }
                  </select>
                  :
                  <input
                    id={ attribute.attribute.name } type={attribute.attribute.type === 'NUMBER' ? 'number' : 'text'}
                    className='bg-zinc-100 rounded-md text-heading text-sm md:text-base focus:outline-[#0A84FF] block w-full px-3 py-2 placeholder:text-body'
                    { ...register(`attributes.${attribute.attribute.id}`,  { required: { value: attribute.attribute.required, message: 'This field is required' } }) }
                    />
                }
                {errors.attributes?.[attribute.attribute.id]?.message && <span className='text-red-500'>{ errors.attributes?.[attribute.attribute.id]?.message }</span>}
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
