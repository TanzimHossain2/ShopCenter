import CategoryList from "@/components/CategoryList";
import CategoryProducts from "@/components/CategoryProducts";
import Footer from "@/components/Footer";
import Subscription from "@/components/Subscription";
import productsData from '@/db/productsDB.json';

const CategoryPage = ({ params: { categoryName } }) => {

  const allProducts = productsData.products;
  let products;

  if (categoryName === "all") {
    products = allProducts;
  } else {
    products = allProducts.filter((product) => product.category === categoryName);
  }

  // Use an object to track unique categories
  const categoryMap = {};
  allProducts.forEach((product) => {
    categoryMap[product.category] = true;
  });

  // Extract unique categories from the object keys
  const allCategories = Object.keys(categoryMap);

  if (products.length === 0) {
    return (
      <main className="h-screen flex justify-center items-center">
        <h1 className="text-4xl text-gray-800">No products found</h1>
      </main>
    )
  }


  return (
    <>
      <main>

        <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">

          <CategoryList allCategories={allCategories} categoryName={categoryName} />

          <CategoryProducts products={products} />

        </section>

        <Subscription />
      </main>
      <Footer />
    </>
  )
}

export default CategoryPage