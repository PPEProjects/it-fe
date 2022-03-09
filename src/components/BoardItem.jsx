import React, { useState } from 'react';
import { Menu, Dropdown, Modal, Button } from 'antd';
import { TopComment } from 'pages/home/AllPage/TopComment';
import { Link } from 'react-router-dom';
import { MenuItemHover } from 'components/MenuItemHover';
import { thumbImage } from 'services/convert';

import { BiDotsVerticalRounded } from 'react-icons/bi';
import { FiEdit } from 'react-icons/fi';
import { AiOutlineLike, AiOutlineMessage, AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai';
import classNames from 'classnames';

export const BoardItem = ({
  imgPage,
  imgAvatar,
  nameProject,
  numberLike,
  numberComment,
  numberHeart,
  link,
  children,
  user,
  shadowNone,
  linkViewDetail,
  linkViewDescription,
  placement,
  admin,
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
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
        <TopComment />
      </Modal>
    );
  };

  const menu = () => {
    return (
      <Menu>
        {user && (
          <>
            <Link to={`${linkViewDescription}`}>
              <MenuItemHover nameMenu="View Description" />
            </Link>
            <MenuItemHover nameMenu="Top Comment" onClick={showModal} />
          </>
        )}

        {admin && (
          <>
            <Link to={`${linkViewDescription}`}>
              <MenuItemHover nameMenu="View Description" />
            </Link>
            <MenuItemHover nameMenu="Download" onClick={showModal} />
          </>
        )}
      </Menu>
    );
  };

  return (
    <section
      className={classNames('border-l border-r border-b rounded-b-md pb-3 shadow-md', {
        'shadow-none': shadowNone,
      })}
    >
      {renderModalTopComment()}
      <div className="group aspect-w-4 rounded-md relative aspect-h-4 overflow-hidden bg-gray-300">
        <img
          className="h-[215px] w-full object-cover rounded cursor-pointer"
          src={imgPage}
          alt=""
        />
        <div className="invisible rounded-md opacity-0 transition group-hover:!visible group-hover:opacity-100">
          <Link to={`${linkViewDetail}`}>
            <div className="absolute top-0 left-0 cursor-pointer right-0 flex space-x-2 h-full bg-black !bg-opacity-60 items-center justify-center text-white">
              <span className="text-xs">View detail</span>
              <FiEdit />
            </div>
          </Link>
        </div>
      </div>
      <div className="px-3">
        <div className="flex items-center justify-between py-2">
          <Link to={`${link}`} className="flex items-center space-x-3 w-[60%]">
            <img
              className="h-10 w-10 object-cover rounded-full cursor-pointer"
              src={thumbImage(imgAvatar)}
              alt=""
            />
            <span className="font-[600] text-[#0369A1]">{nameProject}</span>
          </Link>

          <Dropdown overlay={menu} placement={placement} trigger={['click']}>
            <p className="w-10 h-10 hover:border hover:bg-gray-50 rounded-full flex items-center justify-center cursor-pointer">
              <BiDotsVerticalRounded className="!text-2xl text-gray-400" />
            </p>
          </Dropdown>
        </div>
        {admin && (
          <div className="text-right pr-6 pb-1">
            <Button className="!bg-[#0EA5E9] !h-[40px] rounded !text-white !text-sm">
              Approve
            </Button>
          </div>
        )}
        {user && (
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
        )}
      </div>
      <div className="pt-2">{children}</div>
    </section>
  );
};
