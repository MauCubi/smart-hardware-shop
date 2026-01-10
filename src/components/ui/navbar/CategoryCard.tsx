import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { onToggleProductsMenu, onToggleSideMenu } from '@/store/ui/uiSlice';
import Link from 'next/link';
import { useState } from 'react'
import { IconType } from 'react-icons'


interface Props {
  title: string;
  subCategories: string[];
  Icon: IconType;
}


export const CategoryCard = ({ title, subCategories, Icon }: Props) => {

  const [showMore, setShowMore] = useState<boolean>(false)

  const dispatch = useAppDispatch()

    const handleSideMenu = () => {
      dispatch(onToggleSideMenu(false))
      dispatch(onToggleProductsMenu(false))
    }


  return (
    <div className='flex flex-col h-60 xl:min-h-60 min-w-40 xl:min-w-50 px-2 md:px-5 lg:px-2'>
      <Icon className='text-[40px] xl:text-[60px]' color='#0A84FF'/>
      
      <Link href={`products/?category=${title}`} onClick={ handleSideMenu }>
        <h1 className='font-navbar font-bold text-md xl:text-lg text-[#0A84FF] my-3'>{ title }</h1>
      </Link>

      {
        subCategories.slice(0,4).map( subCategory => (
          <Link key={subCategory} href={`products/?subcategory=${subCategory}`} onClick={ handleSideMenu }>
            <p className='titles xl:text-md text-sm tracking-normal'>{subCategory}</p>
          </Link>
        ))        
      }

      {
        showMore
        ?        
        subCategories.slice(4, subCategories.length ).map( subCategory => 
          <p key={subCategory} className='titles tracking-normal'>{subCategory}</p>
        )
        :
        ''        
      }

      {
        subCategories.length > 4 && !showMore
        ?       
        <button 
          className='titles tracking-normal font-bold self-start cursor-pointer'
          onClick={ () => setShowMore(!showMore) }
        >
          See More ({ subCategories.length - 4 })
        </button>        
        :
        subCategories.length > 4 && showMore
        ?
        <button 
          className='titles tracking-normal font-bold self-start cursor-pointer'
          onClick={ () => setShowMore(!showMore) }
        >
          Hide
        </button>
        :
        ''
      }





    </div>
  )
}
