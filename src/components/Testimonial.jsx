"use client"
import { useState } from 'react';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';

const testimonials = [
  {
    name: 'Justin Pierre',
    role: 'Products Seller',
    quote: 'In 2 years, my business went from just me and my Shop site to 40 employees, my own fulfillment center and over 22 million dollars in revenue.',
    imageSrc: '/image.png',
  },
  {
    name: 'John Doe',
    role: 'Products Buyer',
    quote: "I've been using this product for a year, and it has completely transformed the way I manage my daily tasks. Highly recommended!",
    imageSrc: '/image-2.png',
  },
  {
    name: 'Sheldon Cole',
    role: 'Products Buyer',
    quote: "The customer support provided by this company is exceptional. They always go the extra mile to ensure customer satisfaction.",
    imageSrc: '/image-3.png',
  },
];

const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handlePrevious = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const testimonial = testimonials[currentTestimonial];

  return (
    <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-14 my-24">
      <div className="py-5 px-4 flex justify-end w-full md:w-[666px]" style={{backgroundImage: "url('base.png')", backgroundSize: 'cover'}}>
        <div className="border border-sky-200 rounded-3xl w-[440px] h-[530px]" style={{backgroundImage: "url('testimonial-vector.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
          <img src={testimonial.imageSrc} alt="image" className="w-full h-full" />
        </div>
      </div>
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
    </div>
  );
};

export default Testimonial;