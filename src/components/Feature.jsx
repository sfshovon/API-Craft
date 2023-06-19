import { AiOutlineArrowRight } from "react-icons/ai";

const Feature = () => {
  return (
    <div className="bg-[#F4FCFF] flex flex-col items-center">
      <div className="flex flex-col items-center py-8 md:flex-row md:justify-center md:gap-x-32 md:py-0">
        <div className="mt-4 md:mt-44 flex justify-around items-center w-full h-[550px] bg-center bg-no-repeat bg-cover md:w-[672px] md:h-[672px]" style={{ backgroundImage: `url('brand-bg.png')`}}>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
            <img src="apple.png" className="h-[150px] w-[150px] md:h-[182px] md:w-[182px]" alt="apple" />
            <img src="bmw.png" className="h-[150px] w-[150px] md:h-[182px] md:w-[182px]"  alt="bmw" />
            <img src="nike.png" className="h-[150px] w-[150px] md:h-[182px] md:w-[182px]"  alt="nike" />
            <img src="fila.png" className="h-[150px] w-[150px] md:h-[182px] md:w-[182px]"  alt="fila" />
            <img src="mi.png" className="h-[150px] w-[150px] md:h-[182px] md:w-[182px]"  alt="mi" />
            <img src="adidas.png" className="h-[150px] w-[150px] md:h-[182px] md:w-[182px]"  alt="adidas" />
          </div>
        </div>
        <div className="md:mt-8 mt-2">
          <div>
            <h3 className="w-full md:w-[361px] text-2xl md:text-3xl font-bold text-center md:text-left">Explore Most Popular Brands</h3>
            <p className="px-4 md:px-0 mt-8 w-full md:w-[320px] text-base text-center md:text-justify text-[#585858] font-light">Life is hard enough already. Let us make it a little easier.</p>
            <div className="mt-12 flex items-center justify-center md:justify-start">
              <h3 className="text-base font-bold">See All</h3>
              <AiOutlineArrowRight size={20} />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 md:mt-48 mb-16 flex flex-col-reverse md:flex-row justify-center items-center md:gap-x-32 md:py-0">
        <div>
          <h2 className="w-full md:w-[442px] text-2xl md:text-3xl font-bold text-center md:text-left">
            Sell Easily on Social Media
          </h2>
          <p className="px-4 md:px-0 mt-8 w-full md:w-[320px] text-base text-center md:text-justify text-[#585858] font-light">
            Life is hard enough already. Let us make it a little easier.
          </p>
          <div className="mt-12 flex items-center justify-center md:justify-start">
            <h3 className="text-base font-bold">See All</h3>
            <AiOutlineArrowRight size={20} />
          </div>
        </div>

        <div className="flex relative justify-center w-full h-[500px] bg-center bg-no-repeat bg-cover md:w-[622px] md:h-[622px]" style={{ backgroundImage: `url('media-bg.png')` }}>
          <div className="h-[200px] absolute top-16 md:top-20">
            <img src="image-4.png" className="h-[200px] w-[200px] md:h-[310px] md:w-[310px]" alt="image-4" />
          </div>
          <div className="h-[200px] absolute left-6 md:left-28 bottom-20 md:bottom-24 flex gap-3">
            <div className="relative">
              <img src="sunglass.png" className="h-[70px] w-[60px] md:h-[120px] md:w-[100px]" alt="image-4" />
              <div className="absolute top-0 left-0">
                <img src="facebook.png" className="h-full w-full" alt="facebook" />
              </div>
              <div className="absolute bottom-32 left-2">
                <h6 className="text-xs font-bold">$12.00</h6>
              </div>
            </div>
            <div className="relative">
              <img src="shoe.png" className="h-[70px] w-[60px] md:h-[120px] md:w-[100px]" alt="shoe" />
              <div className="absolute top-0 left-0">
                <img src="instagram.png" className="h-full w-full" alt="instagram" />
              </div>
              <div className="absolute bottom-32 left-2">
                <h6 className="text-xs font-bold">$35.00</h6>
              </div>
            </div>
            <div className="relative">
              <img src="watch.png" className="h-[70px] w-[60px] md:h-[120px] md:w-[100px]" alt="watch" />
              <div className="absolute top-0 left-2">
                <img src="twitter.png" className="h-full w-full" alt="tk" />
              </div>
              <div className="absolute bottom-32 left-2">
                <h6 className="text-xs font-bold">$22.00</h6>
              </div>
            </div>
          </div>
        </div>
      
      </div>

    </div>
  );
};

export default Feature;