import { HeroData } from '@/utils/HeroData';
import DownArrow from './DownArrow';

const HeroRightSide = () => {
  return (
    <>
      <div className="flex md:flex-col justify-center items-center gap-4">
        <img src="/tripod.png" className="w-[80px] md:w-[130px] h-auto" alt="Camera" />
        <h6 className="md:mt-2 text-xs md:text-sm">{HeroData.lens}</h6>
      </div>
      <div className="mt-0 md:mt-6 flex md:flex-col justify-center items-center gap-4">
        <img src="/lens.png" className="w-[80px] md:w-[130px] h-auto" alt="Camera" />
        <h6 className="md:mt-2 text-xs md:text-sm">{HeroData.cameraStand}</h6>
      </div>
      <div className="mt-8 hidden md:flex md:flex-col justify-center items-center">
        <DownArrow/>
      </div>
    </>
  );
};

export default HeroRightSide;