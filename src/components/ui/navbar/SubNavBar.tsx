import Link from 'next/link'

export const SubNavBar = () => {
  return (
    <div className='flex h-16 justify-center px-20 align-middle items-center gap-8 bg-[#1e1e1e]'>

      <Link href='/products'>
        <button className='subbar-button navbar-text flex flex-row align-middle items-center gap-2'>Products</button>      
      </Link>

      <Link href='/buildpc'>
        <button className='subbar-button navbar-text flex flex-row align-middle items-center gap-2'>Build your PC</button>
      </Link>
      
      <Link href='/contact'>
        <button className='subbar-button navbar-text flex flex-row align-middle items-center gap-2'>Contact us</button>
      </Link>
      
      <Link href='/help'>
        <button className='subbar-button navbar-text flex flex-row align-middle items-center gap-2'>Help</button>      
      </Link>
      
    </div>
  )
}
