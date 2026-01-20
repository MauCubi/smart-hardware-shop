import { products } from '@/data/products';
import { ComponentListCard } from './ComponentListCard';
import { useAppSelector } from '@/store/hooks';



export const ComponentList = () => {

  const { componentSelect } = useAppSelector( state => state.builder)

  return (
    <div>
      <h1 className='titles text-2xl place-self-center'>{ componentSelect }</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 grid-rows-2-2 mx-auto gap-10 my-6 content-center px-8'>
        {products.map((product) => (
          <div className='flex justify-center rounded-md' key={product.id}>
            <ComponentListCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};
