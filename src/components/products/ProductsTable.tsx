import { Order } from '@/types/orders';
import { TableProducts } from '@/types/product';
import Link from 'next/link';

interface Params {
  products: TableProducts[],
  title: string
}

export const ProductsTable = ({products}: Params) => {
  return (       

      <div className='relative overflow-x-auto xl:overflow-x-visible bg-neutral-primary-soft shadow-xs rounded-lg border border-default w-full mt-2'>

        <table className='w-full text-sm text-left rtl:text-right text-body'>
          <thead className='bg-neutral-secondary-soft border-b border-default'>
            <tr className='titles bg-[#121212] font-roboto'>
              <th scope='col' className='px-6 py-3 font-medium'>
                ID
              </th>
              <th scope='col' className='px-6 py-3 font-medium'>
                Name
              </th>
              <th scope='col' className='px-6 py-3 font-medium'>
                Brand
              </th>
              <th scope='col' className='px-6 py-3 font-medium'>
                Category
              </th>
              <th scope='col' className='px-6 py-3 font-medium'>
                Stock
              </th>
              <th scope='col' className='px-6 py-3 font-medium'>
                Price
              </th>
              <th scope='col' className='px-6 py-3 font-medium'>
                Status
              </th>
              <th scope='col' className='px-6 py-3 font-medium'>
                Action
              </th>
            </tr>
          </thead>
          <tbody className='bg-gray-700 titles'>
            {
              products.map( product => 
                <tr key={product.id} className='odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-black'>
                  <th
                    scope='row'
                    className='px-6 py-4 font-medium text-heading whitespace-nowrap'
                  >
                    { product.id.slice(0, 8) }
                  </th>
                  <td className='px-6 py-4' title={product.name}>{ product.name}</td>
                  <td className='px-6 py-4'>{ product.brand }</td>
                  <td className='px-6 py-4'>{ product.category }</td>
                  <td className='px-6 py-4'>{ product.stock }</td>
                  <td className='px-6 py-4'>${ product.price.toFixed(2) }</td>
                  <td className='px-6 py-4 text-green-400'>Active</td>
                  <td className='px-6 py-4'>
                    <Link href={`/admin/product/${product.slug}`} className='font-medium text-fg-brand hover:underline text-[#bacb21] mr-2'>
                      Edit
                    </Link>
                    <Link href={`/orders/${product.id}`} className='font-medium text-fg-brand hover:underline text-[#bc1515]'>
                      Disable
                    </Link>
                  </td>
                </tr>         

              )
            }
          </tbody>
        </table>
      </div>
    
  );
};
