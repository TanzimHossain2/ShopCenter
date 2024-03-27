import ProductCard from "./ProductCard";

const ProductDisplay = ({ data = [] }) => {  return (
    <>
      {data.length > 0 &&
        data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </>
  );
};

export default ProductDisplay;
