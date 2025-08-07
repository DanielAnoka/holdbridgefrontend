import { ArrowRight } from 'lucide-react';
import React from 'react';

const Longcard = ({ title, icon: Icon, border = '', children, actionButton, onAction, }) => {
  return (
    <div className={`bg-[#0C0C1E] p-4 rounded-lg w-full ${border}`}>
      <div className="flex items-center justify-between mb-4" >
      <div className="flex items-center gap-2">
        {Icon && <Icon className="w-8 h-8 text-white" />}
        <h2 className="font-medium text-[23px] leading-[36.4px] tracking-normal">
          {title}
        </h2>
      </div>
          {actionButton && (
          <button  onClick={onAction}  className="text-sm bg-white/10 hover:bg-white/20 text-white px-4 py-1.5 rounded-md flex items-center gap-1">
            {actionButton} 
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
};

export default Longcard;
