"use client"
import { useEffect, useState } from "react";
import { AiFillLeftCircle, AiFillRightCircle, AiOutlinePlusCircle } from "react-icons/ai";

const Categories = () => {
  const [products, setProducts] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(0);

  const categories = ["smartphones", "laptops", "fragrances", "skincare", "groceries", "home-decoration", "furniture", "tops", "womens-dresses", "womens-shoes", "mens-shirts", "mens-shoes", "mens-watches", "womens-watches", "womens-bags", "womens-jewellery", "sunglasses", "automotive", "motorcycle", "lighting"];
  
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${categories[currentCategory]}`)
      .then((res) => res.json())
      .then((res) => setProducts(res?.products));
  }, [currentCategory]);

  const handlePrevious = () => {
    setCurrentCategory((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentCategory((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
  };

  return (
    <div id="category" className="px-4 md:px-20 py-4 md:py-6">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl md:text-3xl font-bold col-span-12">Shop by Category</h1>
          <h5 className="w-full md:w-[260px] mt-2 md:mt-4 font-light text-sm">
            Life is hard enough already. Let us make it a little easier.
          </h5>
        </div>
        <div className="flex justify-center items-center gap-2">
          <AiFillLeftCircle className="text-gray-300" size={20} onClick={handlePrevious}/>
          <AiFillRightCircle size={20} onClick={handleNext}/>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-12 gap-4">
        {products?.map(({ id, images, title, price, discountPercentage }) => (
          <div key={id} className="card shadow-xl col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
            <figure className="px-4 md:px-6 pt-6 md:pt-10 h-40 sm:h-48 md:h-56">
              <img src={images[0]} alt="Shoes" className="rounded-xl h-full object-cover" />
            </figure>
            <div className="card-body h-auto">
              <h2 className="card-title text-base md:text-lg">{title}</h2>
              <div className="card-actions grid grid-cols-2 items-center">
                <div className="flex gap-2 md:gap-4 justify-start">
                  <p className="text-gray-500 text-sm md:text-base">
                    ${(price - (price * discountPercentage) / 100).toFixed(2)}
                  </p>
                  <p className="text-red-400 line-through text-sm md:text-base">${price}</p>
                </div>
                <div className="justify-end flex">
                  <button className="p-2 md:p-3 bg-gray-200 rounded-full text-xl md:text-2xl">
                    <AiOutlinePlusCircle />
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
