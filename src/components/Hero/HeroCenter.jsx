import { HeroData } from '@/utils/HeroData';
import PrevNext from './HeroPrevNext';

const HeroCenter = () => {
  return (
    <>
      <div className="flex justify-center md:items-center items-start">
        <img src="/camera.png" className="w-[240px] md:w-[390px] h-auto" alt="Camera" />
      </div>
      <div className="mt-2">
        <h4 className="text-xs text-center md:text-start md:text-md">Start From</h4>
        <h3 className="text-lg md:text-2xl text-center md:text-start font-bold">{HeroData.startPrice}</h3>
      </div>
      <div className="hidden mt-8 text-[#7fa7fe] md:flex justify-center items-center gap-4"> 
        <PrevNext/>
      </div>
    </>
  );
};

export default HeroCenter;