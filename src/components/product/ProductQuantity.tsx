import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';


interface Props {
  quantity: number;
  max: number;
  setQuantity: (value: number) => void;
}


const ProductQuantity = ({ quantity, max, setQuantity }: Props) => {  
  
  const changeQuantity = (value: number) => {
  
    if (!(quantity + value < 1) && !( quantity + value > max )  ) {
      setQuantity( quantity + value )
    }
    
  }
  
  return (
    <div className='flex flex-row items-center titles p-3 mt-4'>
      <p className='font-bold mr-6'>Quantity:</p>

      <button className='cursor-pointer' onClick={() => changeQuantity(-1)} >
        <FaMinusCircle size={20} />
      </button>

      <div className='w-20 flex justify-center'>
        <p> { quantity } Units </p>
      </div>

      <button className='cursor-pointer' onClick={() => changeQuantity(1)}>
        <FaPlusCircle size={20} />
      </button>
    </div>
  );
};

export default ProductQuantity;
