'use client'
import { useAppSelector } from '@/store/hooks'
import { PlatformSelection } from './PlatformSelection'
import { ComponentSelection } from './ComponentSelection'

export const MainBuilder = () => {


  const { platform } = useAppSelector( state => state.builder )



  return (
    <>
      {
        platform === null 
        ? <PlatformSelection />
        : <ComponentSelection />
      }
    </>
  )
}
