import React, { useState } from "react";
import { Menu, Dropdown, Modal } from "antd";
import { TopComment } from "pages/home/AllPage/TopComment";

import { BiDotsVerticalRounded } from "react-icons/bi";
import {
  AiOutlineLike,
  AiOutlineMessage,
  AiOutlineHeart,
  AiOutlineShareAlt,
} from "react-icons/ai";

export const BoardItem = ({
  imgPage,
  imgAvatar,
  project,
  numberLike,
  numberComment,
  numberHeart,
  children,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const renderModalTopComment = () => {
    return (
      <Modal
        // className="!w-[1152px]"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <TopComment />
      </Modal>
    );
  };
  const menu = () => {
    return (
      <Menu>
        <Menu.Item>View Description</Menu.Item>
        <Menu.Item onClick={showModal}>Top Comment</Menu.Item>
      </Menu>
    );
  };

  return (
    <section>
      {renderModalTopComment()}
      <img
        className="h-[215px] w-full object-cover rounded cursor-pointer"
        src={imgPage}
        alt=""
      />
      <div className="border-l border-r border-b rounded-b-md px-3">
        <div className="flex items-center justify-between py-2">
          <span className="flex items-center space-x-2 w-[60%]">
            <img
              className="h-10 w-10 object-cover rounded-full cursor-pointer"
              src={imgAvatar}
              alt=""
            />
            <span>{project}</span>
          </span>
          <Dropdown overlay={menu} trigger={["click"]}>
            <p className="w-10 h-10 hover:border hover:bg-gray-50 rounded-full flex items-center justify-center cursor-pointer">
              <BiDotsVerticalRounded className="!text-2xl text-gray-400" />
            </p>
          </Dropdown>
        </div>
        <div className="flex items-center justify-between text-sm text-[#164E63]">
          <p className="flex items-center space-x-1 cursor-pointer">
            <AiOutlineLike className="text-2xl stroke-[20px]" />
            <span>{numberLike}</span>
          </p>
          <p className="flex items-center space-x-1 cursor-pointer">
            <AiOutlineMessage className="text-2xl stroke-[20px]" />
            <span>{numberComment}</span>
          </p>
          <p className="flex items-center space-x-1 cursor-pointer">
            <AiOutlineHeart className="text-2xl stroke-[20px]" />
            <span>{numberHeart}</span>
          </p>
          <p className="pr-2 cursor-pointer">
            <AiOutlineShareAlt className="text-2xl stroke-[20px]" />
          </p>
        </div>
      </div>
      {children}
    </section>
  );
};
