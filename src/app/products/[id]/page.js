import ProductDetails from "@/components/ProductDetails";
import productsData from '@/db/productsDB.json';

const ProductDetailsPage = ({ params: { id } }) => {

  const data = productsData.products;
  const product = data.find((product) => product.id == id);
  return (
    <main className="h-screen">
      <ProductDetails product={product} />
    </main>
  )
}

export default ProductDetailsPage