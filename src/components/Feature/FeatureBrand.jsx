import { FeatureBrandData } from '@/utils/FeatureData';
import { AiOutlineArrowRight } from 'react-icons/ai';
import FeatureBrandImages from './FeatureBrandImages';

const FeatureBrand = () => {
  const renderBrandImages = () => {
    return (
      <FeatureBrandImages/>
    );
  };

  return (
    <>
      <div className="flex flex-col items-center py-8 md:flex-row md:justify-center md:gap-x-32 md:py-0">
        <div className="mt-4 md:mt-44 flex justify-around items-center w-full h-[550px] bg-center bg-no-repeat bg-cover md:w-[672px] md:h-[672px]" style={{ backgroundImage: `url('${FeatureBrandData.backgroundImage}')` }}>
          {renderBrandImages()}
        </div>
        <div className="md:mt-8 mt-2">
          <div>
            <h3 className="w-full md:w-[361px] text-2xl md:text-3xl font-bold text-center md:text-left">
              {FeatureBrandData.title}
            </h3>
            <p className="px-4 md:px-0 mt-8 w-full md:w-[320px] text-base text-center md:text-justify text-[#585858] font-light">
              {FeatureBrandData.description}
            </p>
            <div className="mt-12 flex items-center justify-center md:justify-start gap-2">
              <h3 className="text-base font-bold">{FeatureBrandData.buttonText}</h3>
              <AiOutlineArrowRight size={20} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureBrand;