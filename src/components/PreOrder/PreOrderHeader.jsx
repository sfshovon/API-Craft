import { AiOutlineArrowRight } from 'react-icons/ai';

const PreOrderHeader = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex justify-center flex-1">
          <h2 className="px-4 font-sans w-full md:w-[320px] md:text-2xl text-3xl text-center font-bold">Featured Product For Pre-Order</h2>
        </div>
        <div className="mt-4 md:mt-0 flex justify-end items-center gap-2">
          <h3 className="text-base font-bold">Discover Our Products</h3>
          <AiOutlineArrowRight size={20} />
        </div>
      </div>
    </>
  );
};

export default PreOrderHeader;