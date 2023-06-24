import { FeatureMediaData } from "@/utils/FeatureData";
import { AiOutlineArrowRight } from "react-icons/ai";
import FeatureMediaImages from "./FeatureMediaImages";

const FeatureMedia = () => {
  const renderMediaImages = () => {
    return (
      <FeatureMediaImages/>
    )
  };

  return (
    <>
      <div>
        <h2 className="w-full md:w-[442px] text-2xl md:text-3xl font-bold text-center md:text-left">
          {FeatureMediaData.title}
        </h2>
        <p className="px-4 md:px-0 mt-8 w-full md:w-[320px] text-base text-center md:text-justify text-[#585858] font-light">
          {FeatureMediaData.description}
        </p>
        <div className="mt-12 flex items-center justify-center md:justify-start gap-2">
          <h3 className="text-base font-bold">{FeatureMediaData.buttonText}</h3>
          <AiOutlineArrowRight size={20} />
        </div>
      </div>

      <div className="flex relative justify-center w-full h-[500px] bg-center bg-no-repeat bg-cover md:w-[622px] md:h-[622px]" style={{ backgroundImage: `url('${FeatureMediaData.backgroundImage}')` }}>
        <div className="h-[200px] absolute top-16 md:top-20">
          <img src={FeatureMediaData.containerImage} className="h-[200px] w-[200px] md:h-[310px] md:w-[310px]" alt="image-4"/>
        </div>
        <div className="h-[200px] absolute left-6 md:left-28 bottom-20 md:bottom-24 flex gap-3"> 
          {renderMediaImages()}
        </div>
      </div>
    </>
  );
};

export default FeatureMedia;