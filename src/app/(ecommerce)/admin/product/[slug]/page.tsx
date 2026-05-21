import { getAllAttributes } from '@/actions/product/get-all-atributes';
import { getProductBySlug } from '@/actions/product/get-product-by-slug';
import { getProductBySlugCreate } from '@/actions/product/get-product-by-slug-create';
import { ProductForm } from '@/components/product/ProductForm';
import { Product, ProductAttributeSchema, SubCategoryAttributes, Category } from '@/types/product';



interface Props {
  params: Promise<{ slug: string }> 
}

export default async function EditProductPage({ params }: Props) {

  const { slug } = await params
  const { product, attributes } = await getProductBySlugCreate({slug})
  const allCategories = await getAllAttributes()
  

  return (
    <div className='flex flex-col justify-center align-middle items-center'>
      {
        slug === 'new' ?
        <ProductForm mode='new' attributes={attributes as SubCategoryAttributes[]} categories={allCategories as Category[]} />
        :
        <ProductForm mode='Edit Product' product={product as Product} attributes={attributes as SubCategoryAttributes[]} />
      }
    </div>
  );
}