import { products } from '@/data/products';
import { ProductsGridCard } from './ProductsGridCard';


export const ProductsGrid = () => {


  return (
    <div className='grid grid-cols-4 grid-rows-2-2 mx-auto gap-10 my-6 content-center'>      
      {products.map((product) => (
        <div className='flex justify-center rounded-md' key={product.id}>
          <ProductsGridCard product={product} />
        </div>
      ))}
    </div>
  );
};
