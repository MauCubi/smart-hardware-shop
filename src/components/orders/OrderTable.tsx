import { Order } from '@/types/orders';
import Link from 'next/link';

interface Params {
  orders: Order[]
}

export const OrderTable = ({orders}: Params) => {
  return (
    <div className='relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-lg border border-default w-full xl:w-[50%] mt-2'>

      <table className='w-full text-sm text-left rtl:text-right text-body'>
        <thead className='bg-neutral-secondary-soft border-b border-default'>
          <tr className='titles bg-[#121212] font-roboto'>
            <th scope='col' className='px-6 py-3 font-medium'>
              Order ID
            </th>
            <th scope='col' className='px-6 py-3 font-medium'>
              Customer
            </th>
            <th scope='col' className='px-6 py-3 font-medium'>
              Paid
            </th>
            <th scope='col' className='px-6 py-3 font-medium'>
              Total
            </th>
            <th scope='col' className='px-6 py-3 font-medium'>
              Date
            </th>
            <th scope='col' className='px-6 py-3 font-medium'>
              Action
            </th>
          </tr>
        </thead>
        <tbody className='bg-gray-700 titles'>
          {
            orders.map( order => 
              <tr key={order.id} className='odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-black'>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-heading whitespace-nowrap'
                >
                  { order.id.slice(0, 8) }
                </th>
                <td className='px-6 py-4'>{ order.user.name } { order.user.lastName } </td>
                <td className='px-6 py-4'>{ order.isPaid ? <span className='text-green-500'>Paid</span> : <span className='text-red-500'>Unpaid</span> }</td>
                <td className='px-6 py-4'>${ order.total.toFixed(2) }</td>
                <td className='px-6 py-4'>{ order.createdAt.getDay()}/{ order.createdAt.getMonth() }/{ order.createdAt.getFullYear() }</td>
                <td className='px-6 py-4'>
                  <Link href={`/orders/${order.id}`} className='font-medium text-fg-brand hover:underline text-[#007efb]'>
                    View
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
