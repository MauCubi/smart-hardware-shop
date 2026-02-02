'use client'
import { generatePagination } from '@/utils/generatePagination';
import clsx from 'clsx';
import Link from 'next/link';
import { redirect, usePathname, useSearchParams } from 'next/navigation';


interface Props {
  totalPages: number
  prodList: 'normal' | 'discount'
}



export const Pagination = ({ totalPages, prodList }: Props) => {

  const pathname = usePathname()
  const searchParams  = useSearchParams()
  const page = searchParams.get('page') ?? 1
  const currentPage = isNaN(+page) ? 1 : +page
  
  const discount = searchParams.get('discount') ?? 1
  const currentDiscount= isNaN(+discount) ? 1 : +discount


  if ((currentPage < 1 || isNaN(+page) || (currentDiscount < 1 || isNaN(+discount)))) {
    redirect(pathname)
  }

  const paginationNumbers = generatePagination(currentPage, totalPages)
  const paginationDiscountNumbers = generatePagination(currentDiscount, totalPages)

  const generateRedirect = (pageParam: number | string) => {     
    
      if (prodList === 'normal') {
        const redirectPath = `${pathname}?page=${pageParam}&discount=${discount}`     
        return redirectPath                       
      } else {
        const redirectPath = `${pathname}?page=${page}&discount=${pageParam}`       
        return redirectPath   
      }
  }

  

  return (
    <div className='flex justify-center py-8'>
      <nav aria-label='Page navigation example'>
        <ul className='flex -space-x-px text-sm'>
          <li>
            <Link
              scroll={false}
              href='#'
              className='flex items-center justify-center text-body bg-neutral-secondary-medium box-border border-[#0A84FF] border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium rounded-s-base text-sm w-10 h-10 focus:outline-none'
            >
              <span className='sr-only'>Previous</span>
              <svg
                className='w-4 h-4 rtl:rotate-180'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='none'
                viewBox='0 0 24 24'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='m15 19-7-7 7-7'
                />
              </svg>
            </Link>
          </li>

          {
            prodList === 'normal' 
            ?
            paginationNumbers.map( (pag,i) => 
            <li key={pag === '...' ? `ellipsis-${i}` : pag}>
              <Link              
                className={clsx('flex items-center justify-center text-body bg-neutral-secondary-medium box-border border-[#0A84FF]', 
                                'border border-default-medium hover:text-heading text-[#F1F1F1] font-medium text-sm w-10 h-10 focus:outline-none',
                                pag === currentPage && 'bg-[#0A84FF]',
                                pag === '...' && 'cursor-default border-t-0 border-b-0'
                              )}
                href={ generateRedirect(pag === '...' ? '#' : pag)}
                onClick={ (e) => pag === '...' && e.preventDefault() }
                scroll={false}
              >
                { pag }
              </Link>
            </li>
            )
            :
            paginationDiscountNumbers.map( (pag,i) => 
            <li key={pag === '...' ? `ellipsis-${i}` : pag}>
              <Link              
                className={clsx('flex items-center justify-center text-body bg-neutral-secondary-medium box-border border-[#0A84FF]', 
                                'border border-default-medium hover:text-heading text-[#F1F1F1] font-medium text-sm w-10 h-10 focus:outline-none',
                                pag === currentDiscount && 'bg-[#0A84FF]',
                                pag === '...' && 'cursor-default border-t-0 border-b-0'
                              )}
                href={ generateRedirect(pag === '...' ? '#' : pag)}
                onClick={ (e) => pag === '...' && e.preventDefault() }
                scroll={false}
              >
                { pag }
              </Link>
            </li>
            )
          }

          <li>
            <Link href='#' scroll={false}
              className='border-[#0A84FF] cursor-pointer flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium rounded-e-base text-sm w-10 h-10 focus:outline-none'
            >
              <span className='sr-only'>Next</span>
              <svg
                className='w-4 h-4 rtl:rotate-180'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='none'
                viewBox='0 0 24 24'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='m9 5 7 7-7 7'
                />
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
