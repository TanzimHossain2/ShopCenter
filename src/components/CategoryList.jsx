"use client"

import { useRouter } from 'next/navigation';

const CategoryList = ({allCategories}) => {
    const router = useRouter()

    const handleCategory = (category) => {

        if (category === "all") {
          router.push("/category/all");
    
        } else {
          router.push(`/category/${category}`)
        }
    
      }
      
  return (
    <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
    <button className="hover:border-b border-black block h-6 box-border mt-4" onClick={() => handleCategory('all')} >All</button>
    {
      allCategories.map((category, ind) => (
        <button key={ind} className="hover:border-b border-black block h-6 box-border mt-5" onClick={() => handleCategory(category)} >{category}</button>
      ))
    }
  </div>
  )
}

export default CategoryList