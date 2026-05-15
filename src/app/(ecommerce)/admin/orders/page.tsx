import { getAllOrders } from '@/actions/order/get-all-orders';
import { OrderList } from '@/components/orders/OrderList';
import { GeneralPagination } from '@/components/ui/pagination/GeneralPagination';

interface Props {
  searchParams: Promise<{ page?: string, discount?: string }>  
}

export default async function AdminOrdersPage({ searchParams }: Props) {

  const params = await searchParams

  const page = params.page ? parseInt(params.page) : 1

  const { orders, maxPages } = await getAllOrders({page: page, take: 5})

  return (
    <div>
      <div className='flex flex-col justify-center align-middle items-center'>
        <h1 className='titles text-2xl xl:w-[50%] p-2 font-roboto'>Orders List</h1>      
        <OrderList orders={orders} />
      </div>

      <h1 className='titles'>{maxPages}</h1>
      
      <GeneralPagination totalPages={maxPages}/>
    </div>
  );
}