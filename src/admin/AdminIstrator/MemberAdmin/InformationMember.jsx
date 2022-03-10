import { Dropdown } from 'antd';
import React from 'react';
import { AiFillStar, AiOutlineMail } from 'react-icons/ai';
import { BsFillTelephoneFill, BsThreeDotsVertical } from 'react-icons/bs';

export const InformationMember = () => {
  return (
    <section className="px-[25px]">
      <div className="w-[325px] h-[369px]  shadow-md border-4-solid">
        <div className="flex items-center justify-center">
          <img src="https://i.pravatar.cc/100?img=2" alt="" className="rounded-full" />
        </div>

        <div className="w-[261px] h-[20px] pl-[32px] text-center text-sm">Alidabet</div>
        <div className="w-[261px] h-[20px] text-sm pl-[40px] text-center">Goal: Leader</div>
        <div className="flex items-center justify-center">
          <AiFillStar className="float-left" />
          <AiFillStar className="float-left" />
          <AiFillStar className="float-left" />
          <AiFillStar className="float-left" />
          <AiFillStar className="float-left" />
          <AiFillStar className="float-left" />
          <AiFillStar className="float-left" />
          <AiFillStar className="float-left" />
          <AiFillStar className="float-left" />
          <AiFillStar className="float-left" />
          <AiFillStar />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="border flex items-center pl-[22px] w-[277px] h-[35px]">
              <AiOutlineMail className="float-left !w-[16px] !h-[12px] " />
              <span className="pl-[22px]">123@gmail.com</span>
            </div>

            <div className="border flex items-center  pl-[22px] w-[277px] h-[35px]">
              <BsFillTelephoneFill className="float-left !w-[16px] !h-[12px]" />
              <span className="pl-[22px]">0123456789</span>
            </div>
          </div>
          <div className="border items-sm w-[49px] h-[70px] flex items-center justify-center">
            <BsThreeDotsVertical />
          </div>
        </div>
      </div>
    </section>
  );
};
