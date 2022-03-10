import { Menu, Dropdown, Modal, Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItemHover } from 'components/MenuItemHover';

import { AiFillStar } from 'react-icons/ai';
import { BsFillTelephoneFill, BsThreeDotsVertical } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';

export const InformationMember = ({ placement }) => {
  const menu = () => {
    return (
      <Menu>
        {/* <Link to={`${linkViewDescription}`}> */}
        <MenuItemHover nameMenu="View Description" />
        {/* </Link> */}
        <MenuItemHover nameMenu="Download" />
        <MenuItemHover nameMenu="Review" />
        <MenuItemHover nameMenu="Assign Reviewer" />
        <MenuItemHover nameMenu="Update Information" />
      </Menu>
    );
  };

  return (
    <section className="shadow-md space-y-7">
      <div className="text-center text-sm">
        <p className="flex items-center justify-center">
          <img
            src="https://i.pravatar.cc/100?img=2"
            alt=""
            className="rounded-full h-[128px] w-[128px]"
          />
        </p>
        <h6>Alidabet</h6>
        <h6 className="text-[#6B7280] -mt-1">Goal: Leader</h6>
        <p className="flex items-center justify-center space-x-1">
          <AiFillStar className="text-xl" />
          <AiFillStar className="text-xl" />
          <AiFillStar className="text-xl" />
          <AiFillStar className="text-xl" />
          <AiFillStar className="text-xl" />
          <AiFillStar className="text-xl" />
          <AiFillStar className="text-xl" />
          <AiFillStar className="text-xl" />
          <AiFillStar className="text-xl" />
          <AiFillStar className="text-xl" />
          <AiFillStar className="text-xl" />
        </p>
      </div>
      <div className="flex items-center h-[94px] justify-between">
        <div className="w-[80%]">
          <div className="border-b border-r border-t flex h-[47px] w-full pl-3 items-center space-x-2">
            <HiMail className="text-xl text-gray-400" />
            <span className="text-xs">123@gmail.com</span>
          </div>

          <div className="border-b border-r flex h-[47px] w-full pl-3 items-center space-x-2">
            <BsFillTelephoneFill className="text-xl text-gray-400" />
            <span className="text-xs">0123456789</span>
          </div>
        </div>
        <Dropdown overlay={menu} placement={placement} trigger={['click']}>
          <div className="border-t hover:bg-gray-100 border-b items-sm w-[20%] h-full flex items-center justify-center">
            <BsThreeDotsVertical className="!text-2xl text-gray-400" />
          </div>
        </Dropdown>
      </div>
    </section>
  );
};
