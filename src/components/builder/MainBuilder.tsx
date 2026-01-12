'use client'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { PlatformSelection } from './PlatformSelection'
import { onPlatformSelect } from '@/store/ui/builderSlice'

export const MainBuilder = () => {

  const dispatch = useAppDispatch()
  const { platform } = useAppSelector( state => state.builder )

  const resetPlatform = () => {
    dispatch(onPlatformSelect(null))
  }

  return (
    <>
      {
        platform === null 
        ? <PlatformSelection />
        : <button className='titles p-4 bg-amber-950' onClick={ () => resetPlatform() }>Volver! { platform } </button>
      }
    </>
  )
}
