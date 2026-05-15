import { getUserOrders } from '@/actions/order/get-user-orders';
import { OrderList } from '@/components/orders/OrderList';
import { GeneralPagination } from '@/components/ui/pagination/GeneralPagination';
import { auth } from '@/lib/auth';

interface Props {
  searchParams: Promise<{ page?: string, discount?: string }>  
}

export default async function OrdersPage({ searchParams }: Props) {

  const params = await searchParams

  const page = params.page ? parseInt(params.page) : 1

  const session = await auth()  

  const { orders, maxPages } = await getUserOrders({id: session?.user.id as string, page: page, take: 5})

  return (
    <div>
      <div className='flex flex-col justify-center align-middle items-center'>
        <h1 className='titles text-2xl xl:w-[50%] p-2 font-roboto'>My Orders</h1>      
        <OrderList orders={orders} />
      </div>

      <h1 className='titles'>{maxPages}</h1>
      
      <GeneralPagination totalPages={maxPages}/>
    </div>
  );
}