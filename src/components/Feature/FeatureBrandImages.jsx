import { FeatureBrandData } from "@/utils/FeatureData";

const FeatureBrandImages = () => {
  return (
    <>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
      {
        FeatureBrandData.images.map((image, index) => (
          <img
            key={index}
            src={image}
            className="h-[150px] w-[150px] md:h-[182px] md:w-[182px]"
            alt={`brand-${index}`}
          />
        ))
      }
      </div>
    </>
  );
};

export default FeatureBrandImages;