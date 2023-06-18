import CategoryTabs from "./CategoryTabs";

const Hero = () => {
  return (
    <div className="px-4 md:px-32 bg-cover bg-no-repeat bg-center bg-[url('../../public/Hero-bg.png')] min-h-[1000px] md:min-h-[800px]">
      <CategoryTabs></CategoryTabs>
      <div className="mt-8 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-2">
        <div className="md:col-span-5 text-center md:text-start">
          <h5 className="text-sm md:text-md font-semibold font-sans mb-3 md:mb-6">100% QUALITY, 100% SATISFACTION</h5>
          <h1 className="w-full md:w-[504px] text-3xl md:text-6xl font-extrabold font-sans mb-3 md:mb-6">Where the world comes to shop</h1>
          <p className="w-full md:w-[440px] text-justify text-base md:text-lg font-thin">Life is hard enough already. Let us make it a little easier, Vision of Snipshop for a better outlook.</p>
          <div className="flex justify-center md:justify-start ">
            <button className="mt-4 md:mt-8 w-full md:w-[200px] btn btn-neutral py-2 px-8 rounded-full font-semibold">Shop Now</button>
          </div>
        </div>

        <div className="md:col-span-4 mt-2 md:mt-0">
          <div className="flex justify-center md:items-center items-start">
            <img src="/camera.png" className="w-[240px] md:w-[390px] h-auto" alt="Camera" />
          </div>
          <div className="mt-2">
            <h4 className="text-xs text-center md:text-start md:text-md">Start From</h4>
            <h3 className="text-lg md:text-2xl text-center md:text-start font-bold">110.00$</h3>
          </div>
        </div>
        <div className="md:col-span-3 mt-2 md:mt-0">
          <div className="flex flex-col justify-center items-center">
            <img src="/tripod.png" className="w-[80px] md:w-[130px] h-auto" alt="Camera" />
            <h6 className="mt-2 md:mt-4 text-xs md:text-sm">Full 14mm Lens</h6>
          </div>
          <div className="mt-6 flex flex-col justify-center items-center">
            <img src="/lens.png" className="w-[80px] md:w-[130px] h-auto" alt="Camera" />
            <h6 className="mt-2 md:mt-4 text-xs md:text-sm">Camera Stand</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;