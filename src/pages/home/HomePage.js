import MasterLayout from "layouts/MasterLayout";
import React from "react";
import { Input } from "antd";
import { BiAlarmExclamation } from "react-icons/bi";
import { BsMapFill } from "react-icons/bs";
import { IoAccessibilitySharp } from "react-icons/io5";

const HomePage = () => {
  return (
    <MasterLayout>
      <section className="space-y-4">
        <div className="text-red-500 border w-[200px] text-center">Ok</div>
        <div className="flex items-center space-x-2 border rounded-md justify-center text-[#fff] bg-[#FB923C] text-[25px]">
          test1
        </div>
        <div className="px-5">
          <Input
            className="!rounded-[30px] border"
            placeholder="default size"
            prefix={<BiAlarmExclamation className="text-2xl text-red-500" />}
          />
        </div>
        <BsMapFill className="text-[70px] text-gray-500" />
        <IoAccessibilitySharp className="text-[70px] text-gray-500" />
      </section>
    </MasterLayout>
  );
};
export default HomePage;
