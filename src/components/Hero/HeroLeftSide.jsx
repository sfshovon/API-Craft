import { HeroData } from '@/utils/HeroData';

const HeroLeftSide = () => {
  return (
    <>
      <div className="md:col-span-5 text-center md:text-start">
        <h5 className="text-sm md:text-md font-semibold font-sans mb-3 md:mb-6">{HeroData.quality}, {HeroData.satisfaction}</h5>
        <h1 className="w-full md:w-[504px] text-3xl md:text-6xl font-extrabold font-sans mb-3 md:mb-6">{HeroData.title}</h1>
        <p className="w-full md:w-[440px] text-justify text-base md:text-lg">{HeroData.description}</p>
        <div className="flex justify-center md:justify-start ">
          <button className="mt-4 md:mt-8 w-full md:w-[200px] btn btn-neutral py-2 px-8 rounded-full font-semibold">Shop Now</button>
        </div>
      </div>
    </>
  );
};

export default HeroLeftSide;