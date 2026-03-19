import { getPaginatedProducts } from '@/actions/product/get-paginated-products'
import { ComponentListCard } from './ComponentListCard'

interface Props {
  component: string | null
}

export const ComponentListGrid = async ({ component }: Props) => {

  const page = 1

  const { products, maxPages }  = await getPaginatedProducts({page})


  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-2-2 mx-auto gap-10 my-6 content-center px-8'>
      {products.map((product) => (
        <div className='flex justify-center rounded-md' key={product.id}>
          <ComponentListCard product={product} />
        </div>
      ))}
    </div>
  )
}
