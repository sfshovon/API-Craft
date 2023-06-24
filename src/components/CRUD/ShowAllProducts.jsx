"use client";
import { useEffect, useState } from "react";
import AddProduct from "./AddProduct";
import Product from "./Product";

const ShowAllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      // .then(console.log);
      .then((res) => setProducts(res?.products));
  }, []);

  return (
    <div className="px-8 py-4">
      <div className="grid grid-cols-12 gap-3 items-center">
        <div className="col-span-7 lg:col-span-11">
          <h2 className="text-2xl font-bold">All Products</h2>
          <h6 className="text-sm col-span-12 lg:col-span-2">
            Life is hard enough already. Let us make it a little easier.
          </h6>
        </div>
        <div className="col-span-5 lg:col-span-1">
          <AddProduct setProducts={setProducts} products={products}/>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4">
      {
        products?.map((product) => (
          <Product key={product.id} product={product} products={products} setProducts={setProducts}/>
        ))
      }
      </div>
    </div>
  );
};

export default ShowAllProducts;
