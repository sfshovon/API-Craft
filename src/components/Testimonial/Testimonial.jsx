"use client"
import { testimonials } from '@/utils/TestimonialData';
import { useState } from 'react';
import TestimonialLeftSide from './TestimonialLeftSide';
import TestimonialRightSide from './TestimonialRightSide';

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
    <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-14 my-4 md:my-24">
      <TestimonialLeftSide testimonial={testimonial}/>
      <TestimonialRightSide testimonial={testimonial} handlePrevious={handlePrevious} handleNext={handleNext}/> 
    </div>
  );
};

export default Testimonial;