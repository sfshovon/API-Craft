"use client"
import { useEffect, useState } from "react";
import CategoriesHeader from "./CategoriesHeader";
import Category from "./Category";

const Categories = ({ categoryProducts }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if(categoryProducts?.length > 0) {
      setProducts(categoryProducts)
    }
    else{
      fetch("https://dummyjson.com/products/category/smartphones")
      .then((res) => res.json())
      .then((data) => setProducts(data?.products));
    }
  }, [categoryProducts])

  return (
    <div id="category" className="px-4 md:px-20 py-4 md:py-6">
      <CategoriesHeader/>

      <div className="mt-8 grid grid-cols-12 gap-4">
      {
        products?.map(product => ( 
          <Category product={product} key={product?.id}/> 
       ))
      }
      </div>
    </div>
  );
};

export default Categories;
