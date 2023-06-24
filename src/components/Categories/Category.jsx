import { AiOutlinePlusCircle } from "react-icons/ai";

const Category = ({ product }) => {
  const { images, title, price, discountPercentage } = product;
  return (
    <>
      <div className="card shadow-xl col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
        <figure className="px-4 md:px-6 pt-6 md:pt-10 h-40 sm:h-48 md:h-56">
          <img src={images[0]} alt="Category" className="rounded-xl h-full object-cover" />
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
    </>
  );
};

export default Category;