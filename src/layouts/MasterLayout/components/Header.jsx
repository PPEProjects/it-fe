import React, { useEffect, useState } from 'react';
import { Input, Button, Modal } from 'antd';
import NewProject from 'pages/project/NewProject';
import { TestNewProject } from 'pages/project/NewProject/TestNewProject';
import { Link } from 'react-router-dom';
import { getMe, userSelector } from 'pages/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { projectSelector, setProjectMerge } from 'pages/project/projectSlice';
import { thumbImage } from 'services/convert';

import { GiHamburgerMenu } from 'react-icons/gi';
import { BsFillMicFill } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd, IoMdNotificationsOutline } from 'react-icons/io';

const Header = () => {
  const dispatch = useDispatch();
  const { me } = useSelector(userSelector);
  const { cProject } = useSelector(projectSelector);
  const [isShowBarLeft, setIsShowSideBarLeft] = useState(false);
  const [isShowBarRight, setIsShowSideBarRight] = useState(false);
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

  const renderNewModalTestNewProject = () => {
    return (
      <Modal
        className="!w-[1152px]"
        visible={cProject?.isOpen}
        onCancel={() => {
          dispatch(setProjectMerge('cProject', { isOpen: false }));
        }}
        footer={null}
      >
        <TestNewProject />
      </Modal>
    );
  };

  const showSideBarLeft = () => setIsShowSideBarLeft(!isShowBarLeft);
  const showSideBarRight = () => setIsShowSideBarRight(!isShowBarRight);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  const renderModalNewProject = () => {
    return (
      <Modal
        className="!w-[1152px]"
        visible={cProject?.isOpen}
        onCancel={() => dispatch(setProjectMerge('cProject', { isOpen: false }))}
        footer={null}
      >
        <NewProject />
      </Modal>
    );
  };

  return (
    <>
      <section className="p-3 relative flex items-center space-x-2 border-b">
        <div className="w-3/12">
          <div className="flex items-center space-x-4">
            <Link to={`/Account?id=${me?.data?.id}`}>
              <GiHamburgerMenu
                // onClick={showSideBarLeft}
                className="text-3xl cursor-pointer"
              />
            </Link>
            <Link className="flex items-center space-x-4" to={`/AllPage`}>
              <img
                className="w-[41px]"
                src={`/assets/images/photo_2021-07-14_10-53-20.jpg`}
                alt=""
              />{' '}
              <span className="text-[30px]">SmileEye</span>
            </Link>
          </div>
          {/* <div
            className={`${
              isShowBarLeft
                ? "bg-white left-[100%] ease-in-out"
                : "left-0 ease-in"
            }`}
          >
            <div
              onClick={showSideBarLeft}
              className="absolute z-10 w-[250px] top-0 left-0  h-[700px] bg-blue-500"
            >
              <p className="h-5 w-5 cursor-pointer" onClick={showSideBarLeft}>
                10
              </p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
            </div>
          </div> */}
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
        <div className="flex space-x-2 items-center justify-end pr-4 w-4/12">
          <Button
            onClick={() => {
              dispatch(setProjectMerge('cProject', { isOpen: true }));
            }}
            className="!rounded-md !bg-[#FB923C] !h-[50px]"
          >
            <div className="flex items-center text-xl text-white space-x-1">
              <IoMdAdd />
              <span>New Idea/Project</span>
            </div>
          </Button>
          <Button
            onClick={() => {
              dispatch(setProjectMerge('cProject', { isOpen: true }));
            }}
            shape="circle !h-[36px] !bg-gray-200 !w-[36px]"
          >
            <span className="pt-[2px]">
              <IoMdNotificationsOutline className="text-xl text-[#0E7490]" />
            </span>
          </Button>
          <Link to={`/MyProfile?id=${me?.data?.id}`}>
            <div onClick={showSideBarRight} className="flex items-center cursor-pointer space-x-2">
              <img
                className='w-[36px] h-[36px] border rounded-full flex items-center justify-center bg-gray-100"'
                src={thumbImage(me?.data?.avatar_attachment?.file)}
                alt=""
              />
              <span className="text-[#0E7490] text-xl">{me?.data?.name}</span>
            </div>
          </Link>
        </div>
        {renderModalNewProject()}
        {renderNewModalTestNewProject()}
      </section>
      {/* <div
        onClick={showSideBarRight}
        className={`${
          isShowBarRight
            ? "bg-white absolute w-[250px] h-[700px] top-0 left-[100%] ease-in-out"
            : "left-0 ease-in"
        }`}
      >
        Ok123213143
      </div> */}
    </>
  );
};

export default Header;
