import React, { useEffect, useState } from 'react';
import { Input, Button, Modal, Menu } from 'antd';
import NewProject from 'pages/project/NewProject';
import { Link } from 'react-router-dom';
import { getMe, userSelector, setUser } from 'pages/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { projectSelector, setProjectMerge } from 'pages/project/projectSlice';
import { thumbImage } from 'services/convert';

import { GiHamburgerMenu } from 'react-icons/gi';
import { BsFillMicFill } from 'react-icons/bs';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { BiSearch, BiShoppingBag } from 'react-icons/bi';
import { AiOutlineClose, AiFillHome, AiOutlineSetting } from 'react-icons/ai';
import { IoMdAdd, IoMdNotificationsOutline } from 'react-icons/io';
import { ModalVoice } from './ModalVoice';

const Header = () => {
  const dispatch = useDispatch();
  const { SubMenu } = Menu;
  const { me, isOpenMyProfileRight } = useSelector(userSelector);
  const { cProject } = useSelector(projectSelector);
  const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

  const [menuShow, setMenuShow] = useState(false);
  const [openKeys, setOpenKeys] = useState(['sub1']);
  const [isModalVoice, setIsModalVoice] = useState(false);

  const showModalVoice = () => {
    setIsModalVoice(true);
  };
  const handleCancelModalVoice = () => {
    setIsModalVoice(false);
  };
  const toggleMenu = () => {
    setMenuShow(!menuShow);
  };

  const onOpenChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  useEffect(() => {
    dispatch(
      setUser({
        isOpenMyProfileRight: false,
      })
    );
  }, [dispatch]);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  const renderModalVoice = () => {
    return (
      <Modal
        className="!w-[500px] !rounded-full"
        visible={isModalVoice}
        onCancel={handleCancelModalVoice}
        footer={null}
      >
        <ModalVoice />
      </Modal>
    );
  };

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
      <section className="p-3 relative flex items-center space-x-2 border-b px-3">
        <div className="w-3/12 pl-3">
          <div className="flex items-center space-x-8">
            <GiHamburgerMenu onClick={toggleMenu} className="text-3xl cursor-pointer" />
            <Link className="flex items-center space-x-8" to={`/AllPage`}>
              <img
                className="w-[41px]"
                src={`/assets/images/photo_2021-07-14_10-53-20.jpg`}
                alt=""
              />{' '}
              <span className="text-[30px] !text-black">SmileEye</span>
            </Link>
          </div>
          <div
            onClick={toggleMenu}
            className={`bg-black w-full h-full opacity-40 z-[99] fixed top-0 ${
              menuShow ? 'block' : 'hidden'
            } `}
          />
          <div
            className={`bg-white w-[251px] z-[99] h-[856px] absolute ease-in-out duration-[420ms] top-0  ${
              menuShow ? 'left-0' : 'left-[-555px]'
            } `}
          >
            <div className="flex items-center justify-between px-3">
              <div className="flex items-center space-x-2">
                <img
                  alt=""
                  className="w-12 h-12 my-auto"
                  src="https://smileeye.edu.vn/assets/images/photo_2021-07-14_10-53-20.jpg"
                />
                <h3 className="text-center my-auto ml-[1em] text-[20px]">SmileEye</h3>
              </div>
              <button
                onClick={toggleMenu}
                className="border-[2px] text-[20px] border-[#0369A1] rounded-md text-[#0369A1] p-1"
              >
                <AiOutlineClose />
              </button>
            </div>

            <div className="w-full px-2">
              <Menu
                mode="inline"
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                style={{ width: 243 }}
              >
                <Menu.Item key="5">
                  <Link to="/AllPage" className="flex items-center space-x-2">
                    <AiFillHome className="text-2xl" />
                    <span>Home</span>
                  </Link>
                </Menu.Item>

                <SubMenu
                  icon={<BiShoppingBag className="!text-2xl" />}
                  key="sub1"
                  title="My Idea/Project"
                >
                  <Menu.Item key="1">
                    <Link to={`/MyProject/MyIdeas?id=${me?.data?.id}`}>My Idea</Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link to={`/MyProject/MyProjectChildren?id=${me?.data?.id}`}>My Project</Link>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Link to={`/MyProject/FollowIdeaProject?id=${me?.data?.id}`}>
                      Interested Project
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="4">
                    <Link to={`/MyProject/JoinedProject?id=${me?.data?.id}`}>Joined Project</Link>
                  </Menu.Item>
                </SubMenu>

                <Menu.Item key="6">
                  <Link
                    to={`/Administrator?id=${me?.data?.id}`}
                    className="flex items-center space-x-2"
                  >
                    <HiOutlineUserGroup className="text-2xl" />
                    <span>Administration</span>
                  </Link>
                </Menu.Item>
                <SubMenu
                  icon={<AiOutlineSetting className="!text-2xl" />}
                  key="sub4"
                  title="Setting"
                >
                  <Menu.Item key="8">
                    <Link to={`/Account?id=${me?.data?.id}`}>Account</Link>
                  </Menu.Item>
                  <Menu.Item key="9">
                    <Link to={`/NewProfile?id=${me?.data?.id}`}>Profile</Link>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </div>
          </div>
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
              <BsFillMicFill className="text-xl" onClick={showModalVoice} />
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
          <Button shape="circle !h-[36px] !bg-gray-200 !w-[36px]">
            <span className="pt-[2px]">
              <IoMdNotificationsOutline className="text-xl text-[#0E7490]" />
            </span>
          </Button>
          <div
            onClick={() => dispatch(setUser({ isOpenMyProfileRight: !isOpenMyProfileRight }))}
            className="flex items-center cursor-pointer space-x-2"
          >
            <img
              className='w-[36px] h-[36px] border rounded-full flex items-center justify-center bg-gray-100"'
              src={thumbImage(me?.data?.avatar_attachment?.file)}
              alt=""
            />
            <span className="text-[#0E7490] text-xl">{me?.data?.name}</span>
          </div>
        </div>
        {renderModalNewProject()}
        {renderModalVoice()}
      </section>
    </>
  );
};

export default Header;
