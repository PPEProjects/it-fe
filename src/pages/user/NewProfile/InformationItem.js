import React from "react";
import classNames from "classnames";

export const InformationItem = ({
  children,
  childrenClassName,
  information,
  content,
}) => {
  return (
    <section className="flex justify-between space-x-3">
      <div className="w-1/3">
        <h6 className="text-[18px] text-gray-900">{information}</h6>
        <h6 className="text-14 text-gray-500 -mt-2">{content}</h6>
      </div>
      <p className={classNames("w-2/3", childrenClassName)}>{children}</p>
    </section>
  );
};
