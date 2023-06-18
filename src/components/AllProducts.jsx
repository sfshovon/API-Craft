"use client";

import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import Form from "./Form";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import DeleteProduct from "./DeleteProduct";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
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
          <AddProduct
            setProducts={setProducts}
            products={products}
          ></AddProduct>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        {products?.map((product) => {
          const { id, images, title, price, thumbnail } = product;
          return (
            <div
              key={id}
              className="card shadow-xl col-span-12 md:col-span-6 lg:col-span-4"
            >
              <figure className="px-10 pt-10 h-48">
                <img
                  src={thumbnail}
                  alt="Shoes"
                  className="rounded-xl h-full"
                />
              </figure>
              <div className="card-body h-auto">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions grid grid-cols-2 items-center">
                  <div className="flex gap-2 justify-start ">
                    <span className="text-gray-500 ">${price}</span>
                  </div>
                  <div className="justify-end flex gap-2">
                    <EditProduct
                      prevProduct={product}
                      setProducts={setProducts}
                      products={products}
                    ></EditProduct>
                    <DeleteProduct
                      product={product}
                      setProducts={setProducts}
                      products={products}
                    ></DeleteProduct>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllProducts;
