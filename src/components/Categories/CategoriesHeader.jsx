import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

const CategoriesHeader = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl md:text-3xl font-bold col-span-12">Shop by Category</h1>
          <h5 className="w-full md:w-[260px] mt-2 md:mt-4 font-light text-sm">
            Life is hard enough already. Let us make it a little easier.
          </h5>
        </div>
        <div className="flex justify-center items-center gap-2">
          <AiFillLeftCircle className="text-gray-300" size={20} />
          <AiFillRightCircle size={20} />
        </div>
      </div>
    </>
  );
};

export default CategoriesHeader;