export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  // Destructure the awaited promise directly
  const { productId } = await params;

  return <h1>Details about product {productId}</h1>;
}
