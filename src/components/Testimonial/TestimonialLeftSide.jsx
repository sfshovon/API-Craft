
const TestimonialLeftSide = ({ testimonial }) => {
  return (
    <>
      <div className="py-5 px-4 flex justify-end w-full md:w-[666px]" style={{backgroundImage: "url('base.png')", backgroundSize: 'cover'}}>
        <div className="border border-sky-200 rounded-3xl w-[440px] h-[530px]" style={{backgroundImage: "url('testimonial-vector.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
          <img src={testimonial.imageSrc} alt="image" className="w-full h-full" />
        </div>
      </div>
    </>
  );
};

export default TestimonialLeftSide;