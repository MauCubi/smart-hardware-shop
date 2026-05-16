import { getUserOrders } from '@/actions/order/get-user-orders';
import { OrderTable } from '@/components/orders/OrderTable';
import { GeneralPagination } from '@/components/ui/pagination/GeneralPagination';
import { auth } from '@/lib/auth';

interface Props {
  searchParams: Promise<{ page?: string; discount?: string }>;
}

export default async function OrdersPage({ searchParams }: Props) {
  const params = await searchParams;

  const page = params.page ? parseInt(params.page) : 1;

  const session = await auth();

  const { orders, maxPages } = await getUserOrders({
    id: session?.user.id as string,
    page: page,
    take: 5,
  });

  return (
    <div>
      <div className='flex flex-col justify-center align-middle items-center  my-10 xl:my-20'>
        <h1 className='titles text-3xl xl:w-[50%] p-2 font-roboto'>
          My Orders
        </h1>
        <OrderTable orders={orders} />
      </div>

      <GeneralPagination totalPages={maxPages} />
    </div>
  );
}
