import FeatureBrand from "./FeatureBrand";
import FeatureMedia from "./FeatureMedia";

const Feature = () => {
 
  return (
    <div className="bg-[#F4FCFF] flex flex-col items-center">
      <FeatureBrand/>
      <div className="mt-4 md:mt-48 mb-16 flex flex-col-reverse md:flex-row justify-center items-center md:gap-x-32 md:py-0">
        <FeatureMedia/>
      </div>
    </div>
  );
};

export default Feature;
