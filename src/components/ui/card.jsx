import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className=" border border-[#1E293B] rounded-xl p-5 flex flex-col gap-3 hover:shadow transition">
      <div className="w-10 h-10 flex items-center justify-center rounded-md bg-[#1E293B] text-blue-400">
        {icon}
      </div>
      <h4 className="text-white font-semibold text-lg">{title}</h4>
      <p className="text-white/70 text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
