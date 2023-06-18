import Image from "next/image";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12 my-24">
      <div className="py-5 px-4 flex justify-end w-full md:w-[666px]" style={{ backgroundImage: "url('base.png')", backgroundSize: 'cover' }}>
        <Image className="border border-zinc-400 rounded-3xl" src="/image.png" alt="image" width={440} height={530} />
      </div>
      <div className="w-full md:w-[463px]">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Justin Pierre</h2>
            <h3 className="text-gray-400 text-start text-sm">Products Seller</h3>
            <p className="mt-4 text-justify italic font-semibold">"In 2 years, my business went from just me and my Shop site to 40 employees, my own fulfillment center and over 22 million dollars in revenue."</p>
            <div className="card-actions flex justify-start">
              <div className="mt-8 flex justify-center gap-2">
                <AiFillLeftCircle className="text-4xl"/>
                <AiFillRightCircle className="text-4xl text-gray-300 "/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;