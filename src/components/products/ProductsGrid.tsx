import { Product } from '@/data/products';
import { ProductsGridCard } from './ProductsGridCard';


interface Props {
  products: Product[]
}

export const ProductsGrid = ({ products }: Props) => {
  

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 grid-rows-2-2 mx-auto gap-10 my-6 content-center px-8'>      
        {products.map((product) => (
          <div className='flex justify-center rounded-md' key={product.id}>
            <ProductsGridCard product={product} />
          </div>
        ))}
      </div>
      
      

    </div>
  );
};
