import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

const TestimonialRightSide = ({ testimonial, handlePrevious, handleNext}) => {
  return (
    <>
      <div className="w-full md:w-[463px]">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">{testimonial.name}</h2>
            <h3 className="text-gray-400 text-start text-sm">{testimonial.role}</h3>
            <p className="mt-4 text-justify italic font-semibold">{testimonial.quote}</p>
            <div className="card-actions flex justify-start">
              <div className="mt-8 flex justify-center gap-2">
                <AiFillLeftCircle className="text-4xl" onClick={handlePrevious} />
                <AiFillRightCircle className="text-4xl text-gray-300" onClick={handleNext} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialRightSide;