import React from "react";
import classNames from "classnames";

export const Directory = ({ className, nameDirectory }) => {
  return (
    <div
      className={classNames(
        "text-white text-[36px] w-[382px] flex items-center justify-center h-[68px] rounded-md m-auto bg-[#FB923C]",
        className
      )}
    >
      {nameDirectory}
    </div>
  );
};
