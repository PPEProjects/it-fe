import React, { useEffect } from "react";
import { Input, Button, Modal } from "antd";
import NewProject from "pages/project/NewProject";
import { Link } from "react-router-dom";
import { getMe, userSelector } from "pages/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { projectSelector, setProjectMerge } from "pages/project/projectSlice";

import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillMicFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { IoMdAdd, IoMdNotificationsOutline } from "react-icons/io";

const Header = () => {
  const dispatch = useDispatch();
  const { me } = useSelector(userSelector);
  const { cProject } = useSelector(projectSelector);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  const renderModalNewProject = () => {
    return (
      <Modal
        className="!w-[1152px]"
        visible={cProject?.isOpen}
        onCancel={() =>
          dispatch(setProjectMerge("cProject", { isOpen: false }))
        }
        footer={null}
      >
        <NewProject />
      </Modal>
    );
  };

  return (
    <section className="p-3 flex items-center space-x-2 border-b">
      <Link to={`/NewProfile?id=${me?.data?.id}`}>
        <div className="flex items-center space-x-3 w-3/12">
          <GiHamburgerMenu className="text-2xl" />
          <span className="text-[30px]">SmileEye</span>
        </div>
      </Link>
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
            dispatch(setProjectMerge("cProject", { isOpen: true }));
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
        <Link to={`/MyProfile?id=${me?.data?.id}`}>
          <div className="flex items-center space-x-2">
            <span className="w-[36px] h-[36px] border rounded-full flex items-center justify-center bg-gray-100">
              P
            </span>
            <span className="text-[#0E7490] text-xl">{me?.data?.name}</span>
          </div>
        </Link>
      </div>
      {renderModalNewProject()}
    </section>
  );
};

export default Header;
