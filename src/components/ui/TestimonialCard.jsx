import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ name, role, quote }) => {
  return (
    <div className="w-full max-w-[350px] sm:max-w-[400px] md:max-w-[450px] h-[342px] border border-[#1E293B] rounded-[14px] p-6 flex flex-col justify-between gap-[33px]">
      <div className="flex flex-col gap-4">
        {/* Stars */}
        <div className="flex gap-1 text-yellow-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={18} fill="currentColor" />
          ))}
        </div>

        {/* Quote */}
        <p className="text-white/80 text-base leading-relaxed">
          “{quote}”
        </p>
      </div>

      {/* Divider */}
      <hr className="border-t border-white/10" />

      {/* User Info */}
      <div>
        <h4 className="text-white font-semibold text-lg">{name}</h4>
        <p className="text-white/50 text-sm">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
