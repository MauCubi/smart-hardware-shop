
type SearchParams = Record<string, string | string[] | undefined>

interface Props {  
  searchParams: Promise<SearchParams>
}


export default async function  SearchPage( { searchParams }: Props ) {

  
  const filters  = await searchParams

  console.log(filters)

  return (
    <div className='h-200'>      
      <h1 className='text-5xl titles mt-50'>{ JSON.stringify(filters, null, 2) }</h1>
    </div>
  );
}