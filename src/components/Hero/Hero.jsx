import CategoryTabs from "./CategoryTabs";
import DownArrow from "./DownArrow";
import HeroCenter from "./HeroCenter";
import HeroLeftSide from "./HeroLeftSide";
import HeroPrevNext from "./HeroPrevNext";
import HeroRightSide from "./HeroRightSide";

const Hero = ({ setCategoryProducts }) => {
  return (
    <div className="px-4 md:px-32 bg-cover bg-no-repeat bg-center bg-[url('../../public/Hero-bg.png')] min-h-[1400px] md:min-h-[800px]">
      <CategoryTabs setCategoryProducts={setCategoryProducts}/>
      <div className="mt-8 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-2">
        <HeroLeftSide/>
        <div className="md:col-span-4 mt-2 md:mt-0">
          <HeroCenter/>
        </div>
        <div className="flex md:flex-col md:col-span-3 mt-2 md:mt-0">
          <HeroRightSide/>
        </div>
        <div className="md:hidden mt-8 text-[#7fa7fe] flex justify-center items-center gap-4">
          <HeroPrevNext/>
        </div>
        <div className="md:hidden mt-6 flex justify-center items-center">
          <DownArrow/>
        </div>
      </div>
    </div>
  );
};

export default Hero;