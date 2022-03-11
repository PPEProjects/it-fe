import React from 'react';

export const TitleItem = ({ title, number }) => {
  return (
    <div className="flex items-center space-x-3">
      <span className="text-[18px] text-gray-800 font-semibold">{title}</span>
      <span className="w-[32px] font-semibold h-[20px] bg-[#0369A1] border rounded-full text-white text-12 flex items-center justify-center">
        {number}
      </span>
    </div>
  );
};
