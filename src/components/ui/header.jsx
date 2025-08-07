import React from 'react';

const DashboardHeader = ({ title = "Dashboard", subtitle = "Welcome! Here's what’s happening with your account", buttonText = "Create Escrow", onButtonClick }) => {
  return (
    <section className="w-full px-4 py-6 md:py-8  text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div>
        <h1 className="text-xl md:text-2xl font-semibold">{title}</h1>
        <p className="text-sm text-white/70 mt-1">{subtitle}</p>
      </div>
      <button
        onClick={onButtonClick}
        className="bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] text-white px-4 py-2 rounded-md shadow-md text-sm hover:opacity-90 transition"
      >
        + {buttonText}
      </button>
    </section>
  );
};

export default DashboardHeader;
