import classNames from 'classnames';
import React from 'react';

import { IoMdAdd } from 'react-icons/io';

export const SeeMore = ({ onClick, name, py8, py4 }) => {
  return (
    <div
      className={classNames('', {
        'py-8': py8,
        'py-4': py4,
      })}
    >
      <div className="relative mt-3 mb-3">
        <div className="border-b-2 relative"></div>
        <div className="absolute -top-4 left-0 right-0 flex items-center justify-center">
          <button
            onClick={onClick}
            className="!rounded-full border cursor-pointer !w-[112px] !bg-white  py-2.5 px-3.5 !h-[34px] hover:!bg-[#F97316] flex items-center hover:!text-white text-sm text-gray-700 space-x-1"
          >
            <IoMdAdd className="stroke-4" />
            <span>{name}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
