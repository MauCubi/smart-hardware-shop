import { products } from '@/data/products';
import { ProductsGridCard } from './ProductsGridCard';


export const ProductsGrid = () => {


  return (
    <div className='grid grid-cols-5 px-20 gap-10 mt-14 content-center'>
      {products.map((product) => (
        <div className='flex justify-center rounded-md' key={product.id}>
          <ProductsGridCard product={product} />
        </div>
      ))}
    </div>
  );
};
