import { AiFillLeftCircle, AiFillRightCircle, AiOutlineArrowRight } from "react-icons/ai";

const PreOrder = () => {
  return (
    <div className="my-8 md:px-32">
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex justify-center flex-1">
          <h2 className="px-4 font-sans w-full md:w-[320px] md:text-2xl text-3xl text-center font-bold">Featured Product For Pre-Order</h2>
        </div>
        <div className="mt-4 md:mt-0 flex justify-end items-center gap-2">
          <h3 className="text-base font-bold">Discover Our Products</h3>
          <AiOutlineArrowRight size={20} />
        </div>
      </div>
      <div className="my-8 md:my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex justify-center items-center gap-4 md:gap-8">
          <AiFillLeftCircle className="text-4xl" />
          <AiFillRightCircle className="text-4xl text-gray-300"/>
        </div>
        <div className="card">
          <figure>
            <img src="versace.png" className="w-full h-[252px] object-cover" alt="Versace" />
            <h3 className="bg-[#0E4B80] text-white p-1 absolute top-8 left-10  rounded-lg text-xs">PRE-ORDER</h3>
          </figure>
          <div className="flex flex-col items-center">
            <h2 className="text-2xl text-center font-bold">VERSACE</h2>
            <h4 className="mt-4 text-lg text-center font-bold">EROS - W - <span className="text-sm font-light text-[#8D8D8D]">Women</span></h4>
            <h4 className="mt-6 text-lg text-center font-bold">$285.00 USD</h4>
            <div className="mt-14 card-actions justify-center">
              <button className="px-12 py-3 btn-neutral text-white rounded-3xl">Order Now</button>
            </div>
          </div>
        </div>
        <div className="card">
          <figure>
            <img src="chanel.png" className="w-full h-[252px] object-cover" alt="Chanel" />
            <h3 className="bg-[#0E4B80] text-white p-1 absolute top-8 left-10  rounded-lg text-xs">PRE-ORDER</h3>
          </figure>
          <div className="flex flex-col items-center">
            <h2 className="text-2xl text-center font-bold">N.5 CHANEL</h2>
            <h4 className="mt-4 text-lg text-center font-bold">EAU DE PARFUM - M <span className="text-sm font-light text-[#8D8D8D]">- Man</span></h4>
            <h4 className="mt-6 text-lg text-center font-bold">$285.00 USD</h4>
            <div className="mt-14 card-actions justify-center">
              <button className="px-12 py-3 btn-neutral text-white rounded-3xl">Order Now</button>
            </div>
          </div>
        </div>
        <div className="card">
          <figure>
            <img src="gabrielle.png" className="w-full h-[252px] object-cover" alt="Gabrielle" />
            <h3 className="bg-[#0E4B80] text-white p-1 absolute top-8 left-10  rounded-lg text-xs">PRE-ORDER</h3>
          </figure>
          <div className="flex flex-col items-center">
            <h2 className="text-2xl text-center font-bold">GABRIELLE</h2>
            <h4 className="mt-4 text-lg text-center font-bold">CHANEL PARIS- M <span className="text-sm font-light text-[#8D8D8D]">- Man</span></h4>
            <h4 className="mt-6 text-lg text-center font-bold">$285.00 USD</h4>
            <div className="mt-14 card-actions justify-center">
              <button className="px-12 py-3 btn-neutral text-white rounded-3xl">Order Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreOrder;