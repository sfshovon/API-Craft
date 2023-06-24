import { TrendingData } from "@/utils/TrendingData";
import TrendingHeader from "./TrendingHeader";
import TrendingTabs from "./TrendingTabs";

const Trending = () => {
  return (
    <div className="my-4 md:my-36 px-4">
      <TrendingHeader/>
      <TrendingTabs/>
      <div className="grid grid-cols-10 gap-10 lg:gap-4 mt-16 ml-0 lg:ml-24">
      {
        TrendingData.map((item, index) => (
          <div
            key={index}
            className={`lg:col-span-2 md:col-span-5 mx-6 lg:mx-0 col-span-10 py-4 px-4 flex ${item?.backgroundColor} h-40 rounded-xl relative`}
          >
            <div>
              <h3 className="text-lg font-bold">{item?.title}</h3>
              <p>{item?.description}</p>
              <p className="text-error mt-10">{item?.price}</p>
            </div>
            <div className="absolute -top-12 right-0">
              <img src={item?.image} alt={item?.title} className="h-[180px]" />
            </div>
          </div>
        ))
      }
      </div>
    </div>
  );
};

export default Trending;
