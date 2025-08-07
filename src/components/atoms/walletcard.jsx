import React from 'react';

const WalletCard = ({ label, value, color = 'bg-gray-700', dotColor = 'bg-white' }) => {
  return (
    <div className={`rounded-md p-4 text-white w-full sm:w-auto ${color}`}>
      <div className="flex items-center gap-2 text-sm font-medium mb-1">
        <span className={`w-2 h-2 rounded-full ${dotColor}`} />
        {label}
      </div>
      <div className="text-xl font-semibold tracking-wide">{value}</div>
    </div>
  );
};

export default WalletCard;
