"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

const CategoryTabs = ({ setCategoryProducts }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {   
    fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
    .then(data => setAllCategories(data));
  },[])

  const getCategoryName = (category) => {
    let modifiedName = category.replace(/-/g, " "); 
    modifiedName = modifiedName.replace(/(^|\s)\S/g, (match) =>match.toUpperCase()); 
    return modifiedName;
  };

  const handleCategoryClick = (category) => {
    // console.log(category)
    setSelectedCategory(category);
    fetch(`https://dummyjson.com/products/category/${category}`)
    .then(res => res.json())
    .then(data => setCategoryProducts(data?.products));
  };

  return (
    <div className="md:flex md:justify-center md:items-center">
      <ul className="menu menu-vertical lg:menu-horizontal grid grid-cols-2 md:grid-cols-1">
      {
        allCategories?.map((category, index) => (
          <li key={index}>
            <Link
              href="#category"
              className={`px-4 py-2 text-sm font-medium ${
                selectedCategory === category
                  ? "text-gray-800"
                  : "text-gray-800 hover:text-gray-600"
              } transition duration-300 ease-in-out`}
              onClick={() => handleCategoryClick(category?.name)}
            >
              {getCategoryName(category?.name)}
            </Link>
          </li>
        ))
      }
      </ul>
    </div>
  );
};

export default CategoryTabs;