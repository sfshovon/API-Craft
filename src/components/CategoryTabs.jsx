"use client"
import Link from "next/link";
import { useState } from "react";

const CategoryTabs = () => {
  const categories = [
    "smartphones", "laptops", "fragrances", "skincare", "groceries", "home-decoration",
    "furniture", "tops", "womens-dresses", "womens-shoes", "mens-shirts", "mens-shoes",
    "mens-watches", "womens-watches", "womens-bags", "womens-jewellery", "sunglasses",
    "automotive", "motorcycle", "lighting"
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);

  const getCategoryName = (category) => {
    let modifiedName = category.replace(/-/g, " "); 
    modifiedName = modifiedName.replace(/(^|\s)\S/g, (match) =>
      match.toUpperCase()
    ); 

    return modifiedName;
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="md:flex md:justify-center md:items-center">
      <ul className="menu menu-vertical lg:menu-horizontal grid grid-cols-2 md:grid-cols-1">
        {
          categories.map((category, index) => (
            <li key={index}>
              <Link
                href="#category"
                className={`px-4 py-2 text-sm font-medium ${
                  selectedCategory === category
                    ? "text-gray-800 border-b-2 border-gray-800"
                    : "text-gray-800 hover:text-gray-600"
                } transition duration-300 ease-in-out`}
                onClick={() => handleCategoryClick(category)}
              >
                {getCategoryName(category)}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default CategoryTabs;