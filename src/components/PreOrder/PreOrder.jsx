import { PreOrderData } from "@/utils/PreOrderData";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import PreOrderHeader from "./PreOrderHeader";

const PreOrder = () => {
  return (
    <div className="my-8 md:px-32">
      <PreOrderHeader/>
      <div className="my-8 md:my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex justify-center items-center gap-4 md:gap-8">
          <AiFillLeftCircle className="text-4xl" />
          <AiFillRightCircle className="text-4xl text-gray-300"/>
        </div>
        {
          PreOrderData.map((item, index) => (
            <div key={index} className="card">
              <figure>
                <img src={item?.image} className="w-full h-[252px] object-cover" alt={item?.title} />
                <h3 className={`bg-${item.backgroundColor} text-white p-1 absolute top-8 left-10  rounded-lg text-xs`}>PRE-ORDER</h3>
              </figure>
              <div className="flex flex-col items-center">
                <h2 className="text-2xl text-center font-bold">{item?.title}</h2>
                <h4 className="mt-4 text-lg text-center font-bold">{item?.description} <span className="text-sm font-light text-[#8D8D8D]">{item?.category}</span></h4>
                <h4 className="mt-6 text-lg text-center font-bold">{item?.price}</h4>
                <div className="mt-14 card-actions justify-center">
                  <button className="px-12 py-3 btn-neutral text-white rounded-3xl">Order Now</button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default PreOrder;