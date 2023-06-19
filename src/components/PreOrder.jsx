import { AiFillLeftCircle, AiFillRightCircle, AiOutlineArrowRight } from "react-icons/ai";

const PreOrder = () => {
  return (
    <div className="my-8 md:px-32">
      <div className="flex items-center">
        <div className="flex justify-center flex-1">
          <h2 className="font-sans w-[320px] text-3xl text-center font-bold">Featured Product For Pre-Order</h2>
        </div>
        <div className="flex justify-end items-center gap-2">
          <h3 className="text-base font-bold">Discover Our Products</h3>
          <AiOutlineArrowRight size={20} />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4">
        <div className="flex justify-center items-end gap-4">
          <AiFillLeftCircle className="text-4xl" />
          <AiFillRightCircle className="text-4xl text-gray-300"/>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">VERSACE</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PreOrder;