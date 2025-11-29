
interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage( { params }: Props) {

  const { slug } = await params;

  console.log(slug)

  

  return (
    <div>
      <h1>slug</h1>
    </div>
  );
}