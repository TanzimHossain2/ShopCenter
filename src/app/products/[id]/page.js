import ProductDetails from "@/components/ProductDetails";
import productsData from '@/db/productsDB.json';

const ProductDetailsPage = ({ params: { id } }) => {
  const data = productsData.products;
  const product = data.find((product) => product.id == id);

  if (!product) {
    return (
      <main className="h-screen flex justify-center items-center">
        <h1 className="text-4xl text-gray-800">Product not found</h1>
      </main>
    )
  }

  return (
    <main className="h-screen">
      <ProductDetails product={product} />
    </main>
  )
}

export default ProductDetailsPage