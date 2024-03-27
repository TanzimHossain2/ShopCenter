"use client"

import { useState } from "react";

const ProductImages = ({product}) => {
    const [selectedImage, setSelectedImage] = useState(product.thumbnail);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

  return (
    <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
    <img
       src={selectedImage}
      className="w-[400px] h-[500px] mx-auto object-cover"
      alt=""
    />

    <div className="flex gap-4 mt-4">
      {product.images.map((image, index) => (
        <img
          src={image}
          className="w-[100px] h-[100px] mx-auto border object-cover"
          alt=""
          key={index}
          onClick={() => handleImageClick(image)}
        />
      ))}
    </div>
  </div>
  )
}

export default ProductImages