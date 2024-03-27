import { calculateTotalPrice } from "@/utils/priceUtils";
import Link from "next/link";
import ProductImages from "./ProductImages";
import Rating from "./Rating";

const ProductDetails = ({ product }) => {
  return (
    <div>
      <section className="bg-[#fafaf2] h-full py-20">
        <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
          <ProductImages product={product} />
          <div className="w-full lg:w-5/12">
            <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">
              {product.title}
            </h1>

            <Link href={`/category/${product.category}`}>
              <span className="text-[#919090] my-3">{product.category}</span>
            </Link>

            <div className="mt-3 flex items-center justify-start gap-1">
              <Rating rating={Math.floor(product.rating)} />
            </div>
            <hr className="my-5 bg-black" />

            <div>
              <p className="my-3">
                <span className="text-rose-600 opacity-60 line-through">
                  ${product.price.toFixed(2)}
                </span>{" "}
                <span className="font-bold text-2xl">
                  $
                  {calculateTotalPrice(
                    product.price,
                    product.discountPercentage
                  )}
                </span>
              </p>
            </div>
            <div>
              <p className="leading-7">{product.description}</p>

              <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                Add To Cart - $
                {calculateTotalPrice(product.price, product.discountPercentage)}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
