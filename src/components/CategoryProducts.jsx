import ProductDisplay from "./ProductDisplay"

const CategoryProducts = ({products}) => {
  return (
    <>
         <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
          <ProductDisplay data={products} />
        </div>
    </>
  )
}

export default CategoryProducts