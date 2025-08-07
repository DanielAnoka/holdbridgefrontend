/* eslint-disable no-unused-vars */
import React from 'react';

const ActionCard = ({ icon: Icon, label }) => {
  return (
    <button
      className="w-[90px] h-[80px] sm:w-[130px] sm:h-[110px] border border-white/10 rounded-[10px] text-white flex flex-col items-center justify-center gap-1 hover:bg-white/5 transition"
    >
      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
      <span className="text-[10px] sm:text-xs">{label}</span>
    </button>
  );
};

export default ActionCard;
