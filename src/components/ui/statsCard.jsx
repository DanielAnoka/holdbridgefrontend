import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const StatsCard = ({
  label,
  value,
  currency,
  icon: Icon,
  trendValue,
  trendLabel,
  trendType = 'up', 
  bgColor = 'bg-[#111827]', 
}) => {
  const isPositive = trendType === 'up';

  return (
    <div className={`rounded-lg p-4 ${bgColor} text-white w-full sm:w-auto flex-1`}>
      <div className="flex items-center justify-between text-sm text-white/70">
        <span>{label}</span>
        {Icon && <Icon className="w-4 h-4" />}
      </div>

      <div className="mt-2 text-2xl font-semibold flex items-center gap-1">
        {currency && <span className="text-base text-white/60">{currency}</span>}
        <span>{value}</span>
      </div>

      <div className={`mt-1 flex items-center text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
        {isPositive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
        <span className="ml-1">{trendValue}</span>
        <span className="ml-1 ">{trendLabel}</span>
      </div>
    </div>
  );
};

export default StatsCard;
