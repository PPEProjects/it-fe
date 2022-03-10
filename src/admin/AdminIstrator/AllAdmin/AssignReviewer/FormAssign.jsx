import React from 'react';

import { GrFormAdd } from 'react-icons/gr';

export const FormAssign = ({ nameAssign, goalAssign, imgAssign }) => {
  return (
    <div className="h-[58px] border rounded-full px-3 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <img src={imgAssign} alt="" className="rounded-full w-[40px] h-[40px]" />
        <div>
          <h6 className="-mb-1">{nameAssign}</h6>
          <h7 className="-mt-5">{goalAssign}</h7>
        </div>
      </div>
      <GrFormAdd className="flex items-center justify-center text-3xl" />
    </div>
  );
};
