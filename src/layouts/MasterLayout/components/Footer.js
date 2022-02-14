import React from "react";

import { FaFacebook } from "react-icons/fa";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="py-4 px-24 flex items-center m-auto justify-between">
      <span className="text-[18px] text-gray-700">
        © Smile Eye 2020, Inc. All rights reserved.
      </span>
      <span className="text-[18px] text-gray-500 space-x-3 flex items-center">
        <FaFacebook className="cursor-pointer" />
        <AiFillGithub className="cursor-pointer" />
        <AiFillTwitterCircle className="cursor-pointer" />
      </span>
    </div>
  );
};

export default Footer;
