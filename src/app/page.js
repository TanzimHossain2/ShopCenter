import Footer from '@/components/Footer';
import Header from '@/components/Header';
import NavBar from '@/components/NavBar';
import ProductDisplay from '@/components/ProductDisplay';
import SubscriptionForm from '@/components/SubscriptionForm';
import productsData from '@/db/productsDB.json';

const Home = () => {
  const data = productsData.products;
  return (
    <>
      <Header>
        <div className="mb-5 w-10/12 max-w-7xl text-white mx-auto">
          <h1 className="text-2xl lg:text-3xl font-serif">Introducing LWS Shop Center</h1>
          <p>Your whole week at a glance</p>
          <button
            className="bg-[#ffd160] hover:bg-[#e4be60] border border-black w-60 mt-2 py-3 rounded-full text-center text-black">
            Get the Weekly Kit
          </button>
        </div>
      </Header>

      <main>
        <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">

            <ProductDisplay data={data} />
          </div>
        </section>
        <SubscriptionForm />
      </main>
      <Footer />
    </>
  )
}

export default Home