import { FeatureMediaData } from '@/utils/FeatureData';

const FeatureMediaImages = () => {
  return (
    <>
      {
        FeatureMediaData.images.map((item, index) => (
          <div key={index} className="relative">
            <img
              src={item.image}
              className="h-[70px] w-[60px] md:h-[120px] md:w-[100px]"
              alt={`media-image-${index}`}
            />
            <div className="absolute top-0 left-0">
              <img src={item.icon} className="h-full w-full" alt={`media-icon-${index}`} />
            </div>
            <div className="absolute bottom-32 md:bottom-20 left-2">
              <h6 className="text-xs font-bold">{item.price}</h6>
            </div>
          </div>
        ))
      }
    </>
  );
};

export default FeatureMediaImages;
