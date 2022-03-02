import React from "react";
import { Button } from "antd";
import classNames from "classnames";

export const Framework = ({ framework, className }) => {
  return (
    <Button
      className={classNames(
        "!border-none !h-[50px] !rounded !w-[144px] !text-[24px]",
        className
      )}
    >
      {framework}
    </Button>
  );
};
