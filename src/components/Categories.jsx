"use client";

import React, { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Categories = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      // .then(console.log);
      .then((res) => setProducts(res?.products));
  }, []);
  return (
    <div className="px-8 py-4">
      <div className="grid grid-cols-12 gap-3">
        <h2 className="text-2xl font-bold col-span-12">Shop by Category</h2>
        <h6 className="text-sm col-span-12 lg:col-span-2">
          Life is hard enough already. Let us make it a little easier.
        </h6>
      </div>
      <div className="grid grid-cols-12 gap-4">
        {products?.map(({ id, images, title, price, discountPercentage }) => (
          <div key={id} className="card shadow-xl col-span-12 md:col-span-6 lg:col-span-4">
            <figure className="px-10 pt-10 h-48">
              <img
                src={images[0]}
                alt="Shoes"
                className="rounded-xl h-full"
              />
            </figure>
            <div className="card-body h-auto">
              <h2 className="card-title">{title}</h2>
              <div className="card-actions grid grid-cols-2 items-center">
                <div className="flex gap-4 justify-start">
                  <p className="text-gray-500">${price - ((price * discountPercentage) / 100).toFixed(2)}</p>
                  <p className="text-red-400 line-through">${price}</p>
                </div>
                <div className="justify-end flex">
                  <button className="p-3 bg-gray-200 rounded-full text-2xl">
                    <AiOutlinePlusCircle></AiOutlinePlusCircle>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
