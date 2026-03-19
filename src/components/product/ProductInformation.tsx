import { ProductAttribute } from '@/types/product';

interface Props {
  attributes: Record<string, ProductAttribute[]>
}


const ProductInformation = ({ attributes }: Props) => {

  // console.log(attributes)

  return (
    <div className='flex flex-col items-center align-middle'>
      <h1 className='titles text-2xl xl:text-3xl mb-4'>Product Information</h1>

      <div className='grid grid-cols-1 xl:grid-cols-2 w-full justify-center'>

        {
          Object.entries(attributes).map( group => (
            <div className='flex flex-col py-5 xl:p-8' key={group[0]}>

              <div className='border-b border-b-[#0A84FF] w-full p-1 mb-2'>
                <h1 className='titles text-xl'>{ group[0] }</h1>
              </div>

              
              {
                group[1].map( attribute => (
                  <div className='grid grid-cols-2 px-2 gap-1 w-full titles text-sm xl:text-md' key={attribute.name}>
                    <p className='font-bold'>{ attribute.name }</p>
                    <p className='place-self-end'>{ attribute.value === true ? 'Yes' : attribute.value === false ? 'No' : attribute.value } { attribute.unit ? attribute.unit : ''}</p>
                  </div>

                ))
              }     

              
            </div>
          )
          )
        }

       
      </div>
    </div>
  );
};

export default ProductInformation;
