import { useAppDispatch } from '@/store/hooks';
import { onComponentSelectToggle } from '@/store/ui/builderSlice';
import { BsDeviceSsd, BsMotherboard } from 'react-icons/bs';
import { FaAngleRight } from 'react-icons/fa6';
import { ImPower } from 'react-icons/im';
import { MdOutlineSevereCold } from 'react-icons/md';
import {
  PiComputerTowerDuotone,
  PiCpuDuotone,
  PiMemoryDuotone,
} from 'react-icons/pi';

export const ComponentSections = () => {
  const dispatch = useAppDispatch();

  const onToggleComponent = ( component: string ) => {
    dispatch(onComponentSelectToggle(component));
  };

  return (
    <div className='xl:flex xl:flex-col xl:mt-6 xl:w-150'>

      <div className='flex p-4 flex-row bg-[#181818] w-full md:w-full gap-4 h-fit hover:cursor-pointer'  onClick={ () => onToggleComponent('Motherboard') }>
        <BsMotherboard className='text-[27px] text-gray-600 self-center' />
        <div className='flex flex-col'>
          <div className='flex gap-1'>
            <h1 className='titles text-md self-center'>Motherboard</h1>
          </div>
          <div className='flex'>
            <ul>
              <li className='titles text-sm'>
                ASUS Motherboard Gaming version2.0 
              </li>
            </ul>
          </div>
        </div>
        <FaAngleRight className='text-[20px] text-gray-600 self-center ml-auto' />
      </div>

      <div className='flex p-4 flex-row bg-[#181818] w-full md:w-full gap-4 h-fit hover:cursor-pointer' onClick={ () => onToggleComponent('Processor') }>
        <PiCpuDuotone className='text-[27px] text-gray-600 self-center' />
        <div className='flex flex-col'>
          <div className='flex gap-1'>
            <h1 className='titles text-md self-center'>Processor</h1>
          </div>
          <div className='flex'>
            <ul>
              <li className='titles text-sm'>
                AMD Processor gaming 3.5ghz 6 cores
              </li>
            </ul>
          </div>
        </div>
        <FaAngleRight className='text-[20px] text-gray-600 self-center ml-auto' />
      </div>

      <div className='flex p-4 flex-row bg-[#181818] w-full md:w-full gap-4 h-fit hover:cursor-pointer' onClick={ () => onToggleComponent('Memory') }>
        <PiMemoryDuotone className='text-[27px] text-gray-600 self-center' />
        <div className='flex flex-col'>
          <div className='flex gap-1'>
            <h1 className='titles text-md self-center'>Memory</h1>
          </div>
          <div className='flex'>
            <ul>
              <li className='titles text-sm'>Kingston ram ddr3 super fast</li>
              <li className='titles text-sm'>Kingston ram ddr3 super fast</li>
              <li className='titles text-sm'>Kingston ram ddr3 super fast</li>
              <li className='titles text-sm'>Kingston ram ddr3 super fast</li>
            </ul>
          </div>
        </div>
        <FaAngleRight className='text-[20px] text-gray-600 self-center ml-auto' />
      </div>

      <div className='flex p-4 flex-row bg-[#181818] w-full md:w-full gap-4 h-fit hover:cursor-pointer' onClick={ () => onToggleComponent('Storage') }>
        <BsDeviceSsd className='text-[27px] text-gray-600 self-center' />
        <div className='flex flex-col'>
          <div className='flex gap-1'>
            <h1 className='titles text-gray-400/80 text-md self-center'>
              Storage
            </h1>
          </div>
          <div className='flex'>
            <ul></ul>
          </div>
        </div>
        <FaAngleRight className='text-[20px] text-gray-600 self-center ml-auto' />
      </div>

      <div className='flex p-4 flex-row bg-[#181818] w-full md:w-full gap-4 h-fit hover:cursor-pointer' onClick={ () => onToggleComponent('Graphic Card') }>
        <BsDeviceSsd className='text-[27px] text-gray-600 self-center' />
        <div className='flex flex-col'>
          <div className='flex gap-1'>
            <h1 className='titles text-gray-400/80 text-md self-center'>
              Graphic Card
            </h1>
          </div>
          <div className='flex'>
            <ul></ul>
          </div>
        </div>
        <FaAngleRight className='text-[20px] text-gray-600 self-center ml-auto' />
      </div>

      <div className='flex p-4 flex-row bg-[#181818] w-full md:w-full gap-4 h-fit hover:cursor-pointer' onClick={ () => onToggleComponent('PCU') }>
        <ImPower className='text-[27px] text-gray-600 self-center' />
        <div className='flex flex-col'>
          <div className='flex gap-1'>
            <h1 className='titles text-gray-400/80 text-md self-center'>PCU</h1>
          </div>
          <div className='flex'>
            <ul></ul>
          </div>
        </div>
        <FaAngleRight className='text-[20px] text-gray-600 self-center ml-auto' />
      </div>

      <div className='flex p-4 flex-row bg-[#181818] w-full md:w-full gap-4 h-fit hover:cursor-pointer' onClick={ () => onToggleComponent('Case') }>
        <PiComputerTowerDuotone className='text-[27px] text-gray-600 self-center' />
        <div className='flex flex-col'>
          <div className='flex gap-1'>
            <h1 className='titles text-gray-400/80 text-md self-center'>
              Case
            </h1>
          </div>
          <div className='flex'>
            <ul></ul>
          </div>
        </div>
        <FaAngleRight className='text-[20px] text-gray-600 self-center ml-auto' />
      </div>

      <div className='flex p-4 flex-row bg-[#181818] w-full md:w-full gap-4 h-fit hover:cursor-pointer' onClick={ () => onToggleComponent('Refrigeration') }>
        <MdOutlineSevereCold className='text-[27px] text-gray-600 self-center' />
        <div className='flex flex-col'>
          <div className='flex gap-1'>
            <h1 className='titles text-gray-400/80 text-md self-center'>
              Refrigeration
            </h1>
          </div>
          <div className='flex'>
            <ul></ul>
          </div>
        </div>
        <FaAngleRight className='text-[20px] text-gray-600 self-center ml-auto' />
      </div>
    </div>
  );
};
