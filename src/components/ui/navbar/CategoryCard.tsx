import { useState } from 'react'
import { IconType } from 'react-icons'


interface Props {
  title: string;
  subCategories: string[];
  Icon: IconType;
}


export const CategoryCard = ({ title, subCategories, Icon }: Props) => {

  const [showMore, setShowMore] = useState<boolean>(false)  


  if (subCategories.length > 4) {
    console.log('largo')
  }

  return (
    <div className='flex flex-col bg-cyan-800 min-h-60 min-w-50 px-2'>
      <Icon size={60} color='#0A84FF'/>
      <h1 className='font-navbar font-bold text-lg text-[#0A84FF] my-3'>{ title }</h1>

      {
        subCategories.slice(0,4).map( subCategory => (
          <p key={subCategory} className='titles tracking-normal'>{subCategory}</p>
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
