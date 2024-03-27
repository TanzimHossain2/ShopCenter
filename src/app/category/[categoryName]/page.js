import CategoryList from "@/components/CategoryList";
import CategoryProducts from "@/components/CategoryProducts";
import SubscriptionForm from "@/components/SubscriptionForm";
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


  return (
    <main>

      <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">

        <CategoryList allCategories={allCategories} />

        <CategoryProducts products={products} />

      </section>

      <SubscriptionForm />
    </main>
  )
}

export default CategoryPage