import React, { useState, useEffect } from 'react';
import MasterLayout from 'layouts/MasterLayout';
import { Input, Button, Menu, Dropdown, Modal } from 'antd';
import { BoardPosition } from 'pages/home/AllPage/BoardPosition';
import { InformationItem } from './InformationItem';
import { CommentItem } from 'pages/home/AllPage/CommentItem';
import { TopComment } from 'pages/home/AllPage/TopComment';
import { detailProject, projectSelector } from 'pages/project/projectSlice';
import { getURLParams } from 'services';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { thumbImage } from 'services/convert';

import { BiDotsVerticalRounded } from 'react-icons/bi';
import { MdMailOutline, MdAttachFile } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import {
  AiOutlineLike,
  AiOutlineMessage,
  AiOutlineHeart,
  AiOutlineShareAlt,
  AiOutlineLeft,
  AiOutlineDown,
} from 'react-icons/ai';

import { ReactComponent as IconMenuComment } from 'assets/menu-comment-icon.svg';

const { TextArea } = Input;
const ProjectDescription = () => {
  const dispatch = useDispatch();
  const { id } = getURLParams();
  const { deProject } = useSelector(projectSelector);
  const detailProjects = deProject.detailProjectIds;
  console.log('detailProjects', detailProjects);

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

  useEffect(() => {
    dispatch(detailProject(id));
  }, [id, dispatch]);

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
        <Menu.Item onClick={showModal}>Top Comment</Menu.Item>
        <Menu.Item>Newest first</Menu.Item>
      </Menu>
    );
  };
  return (
    <MasterLayout>
      {renderModalTopComment()}
      <section className="p-4 space-y-4">
        <Link to="/AllPage">
          <div className="flex text-gray-900 pl-2 text-sm items-center space-x-1">
            <AiOutlineLeft className="stroke-4" />
            <span>Back</span>
          </div>
        </Link>

        <section className="flex items-center space-x-5">
          <div className="w-3/4">
            <img
              className="w-full h-[520px] object-cover rounded cursor-pointer"
              src={detailProjects?.attachments?.main_picture?.file}
              alt=""
            />
          </div>
          <div className="w-1/4">
            <div className="grid grid-cols-1 gap-5">
              <img
                className="w-full h-[160px] object-cover rounded cursor-pointer"
                src="https://i.pravatar.cc/100?img=2"
                alt=""
              />
              <img
                className="w-full h-[160px] object-cover rounded cursor-pointer"
                src="https://i.pravatar.cc/100?img=2"
                alt=""
              />
              <img
                className="w-full h-[160px] object-cover rounded cursor-pointer"
                src="https://i.pravatar.cc/100?img=2"
                alt=""
              />
            </div>
          </div>
        </section>
        <section className="flex space-x-5">
          <div className="w-3/4">
            <div className="text-[#0C4A6E] text-[24px] uppercase flex items-center justify-between border-b">
              <p>{detailProjects?.name}</p>
              <p className="flex items-center space-x-7 text-sm text-[#164E63]">
                <p className="flex items-center space-x-1 cursor-pointer">
                  <AiOutlineLike className="text-2xl stroke-[20px]" />
                  <span>1</span>
                </p>
                <p className="flex items-center space-x-1 cursor-pointer">
                  <AiOutlineMessage className="text-2xl stroke-[20px]" />
                  <span>2</span>
                </p>
                <p className="flex items-center space-x-1 cursor-pointer">
                  <AiOutlineHeart className="text-2xl stroke-[20px]" />
                  <span>3</span>
                </p>
                <p className="pr-2 cursor-pointer">
                  <AiOutlineShareAlt className="text-2xl stroke-[20px]" />
                </p>
                <p className="pr-2 cursor-pointer">
                  <BiDotsVerticalRounded className="text-3xl" />
                </p>
              </p>
            </div>
            <div className="flex items-center border-b">
              <div className="flex w-1/3 items-center py-2 space-x-2">
                <img
                  className="object-cover rounded-full cursor-pointer w-10 h-10"
                  src={thumbImage(detailProjects?.avatar_attachment?.file)}
                  alt=""
                />
                <div className="pt-1">
                  <h6 className="text-sm text-gray-900">{detailProjects?.user?.name}</h6>
                  <h6 className="text-xs -mt-1 text-gray-500">View profile</h6>
                </div>
              </div>
              <div className="text-sm flex space-x-12 items-center">
                <span>Member:</span>
                <div className="flex items-center space-x-2 pt-2">
                  <BoardPosition running imgAvatar="https://i.pravatar.cc/100?img=2" text="PO" />
                  <BoardPosition board text="Dev" />
                  <BoardPosition board text="Leader" />
                  <BoardPosition board text="Leader" />
                  <BoardPosition board text="Tester" />
                </div>
              </div>
            </div>
            <div className="py-3 border-b text-[18px]">Project Information</div>
            <div>
              <InformationItem
                justifyBetween
                Information="Main author name"
                result={detailProjects?.user?.name}
              >
                <div>
                  <p className="flex items-center space-x-2">
                    <MdMailOutline className="text-xl text-gray-400" />
                    <span>{detailProjects?.user?.email}</span>
                  </p>
                  {detailProjects?.user?.phone_number && (
                    <p className="flex items-center space-x-2">
                      <BsTelephoneFill className="text-gray-400 text-lg" />
                      <span>{detailProjects?.user?.phone_number}</span>
                    </p>
                  )}
                </div>
              </InformationItem>
              <InformationItem Information="Co-author name" result="Margot Foster" justifyBetween>
                <div>
                  <p className="flex items-center space-x-2">
                    <MdMailOutline className="text-xl text-gray-400" />
                    <span>{detailProjects?.user?.email}</span>
                  </p>
                  {detailProjects?.user?.phone_number && (
                    <p className="flex items-center space-x-2">
                      <BsTelephoneFill className="text-gray-400 text-lg" />
                      <span>{detailProjects?.user?.phone_number}</span>
                    </p>
                  )}
                </div>
              </InformationItem>
              <InformationItem Information="Category" result={detailProjects?.category} />
              <InformationItem Information="Salary" result={detailProjects?.salary?.money} />
              <InformationItem Information="Budget" result={detailProjects?.budget?.money} />
              <InformationItem Information="Time to do:" result={detailProjects?.timeToDo} />
              <InformationItem
                Information="Framework:"
                // result={(detailProjects?.framework).join()}
              />

              <InformationItem
                Information="Programing Language:"
                resultClassName="!flex !items-center !space-x-1"
                // result={(detailProjects?.programingLanguage).join()}
              />

              <InformationItem
                Information="Main description"
                result={detailProjects?.description}
              />
              <InformationItem widthFull Information="Attachments">
                <div className="text-sm w-full rounded-t p-1 px-3 flex items-center !justify-between border">
                  <span className="text-gray-900 flex items-center space-x-2 py-2">
                    <MdAttachFile className="text-xl text-gray-400" />
                    <span>PitchDeck.pdf</span>
                  </span>
                  <span className="text-[#4F46E5]">View</span>
                </div>
                <div className="text-sm w-full p-1 px-3 flex items-center !justify-between border-l border-r">
                  <span className="text-gray-900 flex items-center space-x-2 py-2">
                    <MdAttachFile className="text-xl text-gray-400" />
                    <span>PitchDeck.pdf</span>
                  </span>
                  <span className="text-[#4F46E5]">View</span>
                </div>
                <div className="text-sm w-full rounded-b p-1 px-3 flex items-center !justify-between border">
                  <span className="text-gray-900 flex items-center space-x-2 py-2">
                    <MdAttachFile className="text-xl text-gray-400" />
                    <span>PitchDeck.pdf</span>
                  </span>
                  <span className="text-[#4F46E5]">View</span>
                </div>
              </InformationItem>
            </div>
          </div>
          <div className="w-1/4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[18px] text-gray-900">Comments</span>
              <Dropdown overlay={menu} trigger={['click']}>
                <span className="cursor-pointer flex items-center space-x-2 border p-2 bg-white rounded-lg">
                  <IconMenuComment />
                  <AiOutlineDown className="text-gray-400 stroke-2" />
                </span>
              </Dropdown>
            </div>
            <div className="space-y-3">
              <div className="flex space-x-2">
                <CommentItem
                  iconClassName="!w-7 !rounded-md !h-7 !text-xl top-7"
                  containerClassName="space-y-1.5"
                  imgAvatarClassName="!w-12 !h-12"
                />
                <TextArea rows={4} placeholder="Add a comment..." />
              </div>
              <div className="text-right">
                <Button className="!h-[40px] !font-[500] !rounded-lg" type="primary">
                  Comment
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <CommentItem
                time="6d ago"
                numberLike="6"
                iconClassName="!w-7 !rounded-md !h-7 !text-xl top-7"
                topComment
                containerClassName="space-y-1.5"
                imgAvatarClassName="!w-12 !h-12"
                nameUserClassName="pt-2 !text-[14px]"
                contentClassName="!text-[14px]"
                nameUser="Eduardo Benz"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus "
              />
              <CommentItem
                time="6d ago"
                numberLike="6"
                iconClassName="!w-7 !rounded-md !h-7 !text-xl top-7"
                topComment
                containerClassName="space-y-1.5"
                imgAvatarClassName="!w-12 !h-12"
                nameUserClassName="pt-2 !text-[14px]"
                contentClassName="!text-[14px]"
                nameUser="Eduardo Benz"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus "
              />
            </div>
            <div className="text-center">
              <Button className="!w-[245] !h-[34px] !text-gray-900 !font-[500] !rounded-lg">
                View all comment
              </Button>
            </div>
          </div>
        </section>
      </section>
    </MasterLayout>
  );
};

export default ProjectDescription;
