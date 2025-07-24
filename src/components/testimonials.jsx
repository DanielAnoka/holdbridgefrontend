import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from './ui/TestimonialCard';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Verified user',
    quote:
      'Holdbridge made my first online payment completely safe. The escrow system gave me peace of mind',
  },
  {
    name: 'Sarah Johnson',
    role: 'Verified user',
    quote:
      'Holdbridge made my first online payment completely safe. The escrow system gave me peace of mind',
  },
  {
    name: 'Sarah Johnson',
    role: 'Verified user',
    quote:
      'Holdbridge made my first online payment completely safe. The escrow system gave me peace of mind',
  },
];

const TestimonialsSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className=" py-16 px-4 md:px-10" id='testimonials'>
      <div className="max-w-7xl mx-auto text-center space-y-6">
        <h2 className="text-2xl md:text-4xl font-bold text-white">What Our Users Say</h2>
        <p className="text-white/70 text-sm md:text-base max-w-2xl mx-auto">
          From freelancers to businesses, people trust Holdbridge to protect their transactions and deliver peace of mind.
        </p>

        <div className="flex justify-center sm:justify-end mt-4 gap-4 px-2">
          <button
            onClick={() => scroll('left')}
            className="w-9 h-9 rounded-full bg-[#1E293B] text-white hover:bg-blue-600 transition flex items-center justify-center"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-9 h-9 rounded-full bg-[#1E293B] text-white hover:bg-blue-600 transition flex items-center justify-center"
          >
            <ChevronRight size={18} />
          </button>
        </div>
        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto no-scrollbar py-8 justify-start sm:justify-center"
        >
          {testimonials.map((item, idx) => (
            <div key={idx} className="shrink-0 snap-center w-full sm:w-auto px-1">
              <TestimonialCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
