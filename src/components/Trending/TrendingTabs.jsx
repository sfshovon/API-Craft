import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

const TrendingTabs = () => {
  return (
    <>
      <div className="mt-8 flex items-center md:px-20">
        <div className="flex justify-center flex-1">
          <ul className="text-sm menu menu-horizontal font-bold">
            <li className="border-b-2 border-zinc-900"><h6>Fashion</h6></li>
            <li><h6>Technology</h6></li>
            <li><h6>Interiors</h6></li>
            <li><h6>Food & Drink</h6></li>
          </ul>
        </div>
        <div className="flex justify-end items-center gap-2">
          <AiFillLeftCircle className="text-gray-300" size={20} />
          <AiFillRightCircle size={20} />
        </div>
      </div>
    </>
  );
};

export default TrendingTabs;