import React from "react";
import { Input, Button } from "antd";

import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillMicFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { IoMdAdd, IoMdNotificationsOutline } from "react-icons/io";

const Header = () => {
  return (
    <section className="p-3 flex items-center space-x-2 border-b">
      <div className="flex items-center space-x-3 w-3/12">
        <GiHamburgerMenu className="text-2xl" />
        <span className="text-[30px]">SmileEye</span>
      </div>
      <div className="flex items-center space-x-2 w-5/12">
        <div className="flex items-center w-5/6">
          <Input className="!rounded-l-[6px] h-[50px] z-10" />
          <Button className="!h-[50px] -ml-0.5 !rounded-r-[6px]">
            <span className="pt-[4px]">
              <BiSearch className="text-2xl" />
            </span>
          </Button>
        </div>
        <Button shape="circle !h-[50px] !w-[50px]">
          <span className="pt-[4px]">
            <BsFillMicFill className="text-xl" />
          </span>
        </Button>
      </div>
      <div className="flex space-x-2 items-center pl-16 w-4/12">
        <Button className="!rounded-md !bg-[#FB923C] !h-[50px]">
          <div className="flex items-center text-xl text-white space-x-1">
            <IoMdAdd />
            <span>New Idea/Project</span>
          </div>
        </Button>
        <Button shape="circle !h-[36px] !bg-gray-200 !w-[36px]">
          <span className="pt-[2px]">
            <IoMdNotificationsOutline className="text-xl text-[#0E7490]" />
          </span>
        </Button>
        <div className="flex items-center space-x-2">
          <span className="w-[36px] h-[36px] border rounded-full flex items-center justify-center bg-gray-100">
            P
          </span>
          <span className="text-[#0E7490] text-xl">Product</span>
        </div>
      </div>
    </section>
  );
};

export default Header;
