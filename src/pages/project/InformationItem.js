import React from "react";
import classNames from "classnames";

export const InformationItem = ({
  Information,
  result,
  children,
  justifyBetween,
  widthFull,
  resultClassName,
}) => {
  return (
    <div className="py-4 flex border-b">
      <span className="w-1/3 text-gray-700 text-sm">{Information}</span>
      <span
        className={classNames("text-gray-900 text-sm w-2/3 flex", {
          "justify-between": justifyBetween,
        })}
      >
        <span className={classNames("", resultClassName)}>{result}</span>
        <span
          className={classNames("text-xs text-gray-700", {
            "!w-full": widthFull,
          })}
        >
          {children}
        </span>
      </span>
    </div>
  );
};
