"use client";

import { useRouter } from "next/navigation";

const CategoryList = ({ allCategories, categoryName }) => {
  const router = useRouter();

  const handleCategory = (category) => {
    if (category === "all") {
      router.push("/category/all");
    } else {
      router.push(`/category/${category}`);
    }
  };

  return (
    <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
      <button
        className={`hover:border-b border-black block h-6 box-border mt-4 ${
          categoryName === "all" ? "text-blue-600  font-semibold" : ""
        } `}
        onClick={() => handleCategory("all")}
      >
        All
      </button>
      {allCategories.map((category, ind) => (
        <button
          key={ind}
          className={`hover:border-b border-black block h-6 box-border mt-5 ${
            category === categoryName ? "text-blue-600 font-semibold" : ""
          }`}
          onClick={() => handleCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;
