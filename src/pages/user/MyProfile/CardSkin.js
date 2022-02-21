import React from "react";

export const CardSkin = ({ project, number }) => {
  return (
    <div className="!bg-white rounded shadow p-4">
      <h6 className="text-[14px] text-gray-500">{project}</h6>
      <h6 className="text-[30px] text-[#0E7490]">{number}</h6>
    </div>
  );
};
