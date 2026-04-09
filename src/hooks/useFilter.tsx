'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export const useFilter = () => {

  const pathname = usePathname()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams.toString())
  const router = useRouter()

  
  
  const changeFilter = (filter: string, value: string) => {
    
    params.set(filter, value)
    console.log(params.toString())
    router.push(pathname + '?' + params)
    
  }

  const removeFilter = (filter: string) => {

    params.delete(filter)
    router.push(pathname + '?' + params)
  }

  const changeSort = ( e: React.ChangeEvent<HTMLSelectElement> ) => {  

    const value = e.currentTarget.value

    if (value === 'new') {
      params.delete('sort')
    } else {
      params.set('sort', value)
    }

    router.push(pathname + '?' + params)
  }

  return {
    changeFilter,
    removeFilter,
    changeSort
  }



}