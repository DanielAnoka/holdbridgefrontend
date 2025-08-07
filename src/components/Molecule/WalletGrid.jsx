import React from 'react';
import WalletCard from '../atoms/walletcard';

const WalletGrid = ({ data }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {data.map(({ label, value, color, dotColor }, idx) => (
        <WalletCard
          key={idx}
          label={label}
          value={value}
          color={color}
          dotColor={dotColor}
        />
      ))}
    </div>
  );
};

export default WalletGrid;
