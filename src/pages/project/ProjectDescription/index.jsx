import React, { useState, useEffect } from 'react';
import MasterLayout from 'layouts/MasterLayout';
import { Input, Button, Menu, Dropdown, Modal, Tooltip } from 'antd';
import { BoardPosition } from 'pages/home/AllPage/BoardPosition';
import { InformationItem } from './InformationItem';
import { CommentItem } from 'pages/home/AllPage/CommentItem';
import { TopComment } from 'pages/home/AllPage/TopComment';
import {
  detailProject,
  projectSelector,
  deleteProjectLike,
  deleteProjectInterested,
} from 'pages/project/projectSlice';
import { getURLParams } from 'services';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { thumbImage } from 'services/convert';
import { JoinPosition } from 'pages/home/AllPage/JoinPosition';
import {
  memberProjectSelector,
  setMemberProjectMerge,
  deleteMemberProject,
} from 'pages/memberProject/memberProjectSlice';
import { userSelector } from 'pages/user/userSlice';

import { FiCamera } from 'react-icons/fi';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { MdMailOutline, MdAttachFile } from 'react-icons/md';
import { BsTelephoneFill, BsEmojiSmile } from 'react-icons/bs';
import {
  AiOutlineLike,
  AiOutlineMessage,
  AiOutlineHeart,
  AiOutlineShareAlt,
  AiOutlineLeft,
  AiOutlineDown,
  AiFillLike,
  AiFillHeart,
} from 'react-icons/ai';
import { LikeProject } from 'pages/project/LikeProject';

import { ReactComponent as IconMenuComment } from 'assets/menu-comment-icon.svg';
import { ItemComment } from './ItemComment';

const { TextArea } = Input;
const ProjectDescription = () => {
  const text = (
    <span className="text-[10px font-medium] text-gray-700">Copy Link To Clipboard</span>
  );
  const color = ['white'];
  const dispatch = useDispatch();
  const { id } = getURLParams();
  const { deProject, cProjectLike, dProjectLike, cProjectInterested, dProjectInterested } =
    useSelector(projectSelector);
  const detailProjects = deProject.detailProjectIds;
  const { upMemberProject, dMemberProject } = useSelector(memberProjectSelector);
  const { me } = useSelector(userSelector);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [idUserName, setIdUserName] = useState({});
  const [idUserProjectInterested, setIdUserProjectInterested] = useState({});

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
  }, [
    id,
    dispatch,
    upMemberProject,
    dMemberProject,
    cProjectLike,
    dProjectLike,
    cProjectInterested,
    dProjectInterested,
  ]);

  useEffect(() => {
    const idUser = (detailProjects?.projectLikes ?? []).filter(
      item => item?.userId === me?.data?.id
    );

    const idProjectInterested = (detailProjects?.projectInterested ?? []).filter(
      item => item?.userId === me?.data?.id
    );
    setIdUserName(idUser);
    setIdUserProjectInterested(idProjectInterested);
  }, [detailProjects, me]);

  const renderModalJoinPosition = () => {
    return (
      <Modal
        className="!w-[800px]"
        visible={upMemberProject?.isOpen}
        onCancel={() => dispatch(setMemberProjectMerge('upMemberProject', { isOpen: false }))}
        footer={null}
      >
        <JoinPosition />
      </Modal>
    );
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
        <Menu.Item onClick={showModal}>Top Comment</Menu.Item>
        <Menu.Item>Newest first</Menu.Item>
      </Menu>
    );
  };
  return (
    <MasterLayout>
      {renderModalTopComment()}
      {renderModalJoinPosition()}
      <section className="p-4 space-y-4 bg-[#F6F9FB]">
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
                  {idUserName[0]?.userId === me?.data?.id ? (
                    <AiFillLike
                      onClick={() => {
                        dispatch(deleteProjectLike(idUserName[0]?.id));
                      }}
                      className="text-2xl text-blue-600 cursor-pointer"
                    />
                  ) : (
                    <LikeProject likeProject />
                  )}

                  <div className="flex flex-col items-center">
                    <span className="">{detailProjects?.numberLikes}</span>
                    <span className="text-[10px] !-mt-2">Like</span>
                  </div>
                </p>
                <p className="flex items-center space-x-1 cursor-pointer">
                  <AiOutlineMessage className="text-2xl stroke-[20px]" />
                  <div className="flex flex-col items-center">
                    <span>2</span>
                    <span className="text-[10px] !-mt-2">Comment</span>
                  </div>
                </p>
                <p className="flex items-center space-x-1 cursor-pointer">
                  {idUserProjectInterested[0]?.userId === me?.data?.id ? (
                    <AiFillHeart
                      onClick={() => {
                        dispatch(deleteProjectInterested(idUserProjectInterested[0]?.id));
                      }}
                      className="text-2xl text-red-500 cursor-pointer"
                    />
                  ) : (
                    <LikeProject />
                  )}
                  <div className="flex flex-col items-center">
                    <span>{detailProjects?.numberInterested}</span>
                    <span className="text-[10px] !-mt-2">Follow</span>
                  </div>
                </p>
                <Tooltip placement="bottom" title={text} color={color}>
                  <p className="pr-2 cursor-pointer">
                    <AiOutlineShareAlt className="text-2xl stroke-[20px]" />
                  </p>
                </Tooltip>

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
                  {(detailProjects?.members ?? []).map((item, index) => {
                    return (
                      <BoardPosition
                        running
                        nameUser={item?.memberUser?.name}
                        imgAvatar={item?.memberUser?.avatar_attachment?.file}
                        text={item?.position}
                        onConfirm={() => {
                          dispatch(deleteMemberProject(item?.id));
                        }}
                      />
                    );
                  })}
                  <BoardPosition board text="Position" />
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
                // result={`${(detailProjects?.framework).join()}`}
              />

              <InformationItem
                Information="Programing Language:"
                resultClassName="!flex !items-center !space-x-1"
                // result={`${(detailProjects?.programingLanguage).join()}`}
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
                  <span className="font-medium text-sm text-[#4B5563]">Top Comments</span>
                  <AiOutlineDown className="text-gray-400 stroke-2" />
                </span>
              </Dropdown>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="">
                  <img
                    src="https://i.pravatar.cc/100?img=2"
                    alt=""
                    className="w-16 border-solid border-4 border-blue rounded-full"
                  />
                </div>
                <div className="relative w-full">
                  <div className="w-full">
                    <Input
                      placeholder="Write a comment..."
                      className="h-12 !w-full !rounded-lg"
                    ></Input>
                  </div>
                  <div className="absolute top-0 right-0 bottom-0 flex items-center justify-end pr-5 space-x-3">
                    <BsEmojiSmile />
                    <FiCamera />
                  </div>
                </div>
                {/* <TextArea rows={4} placeholder="Add a comment..." /> */}
              </div>
              <div className="text-right">
                <Button className="!h-[40px] !font-[500] !rounded-lg" type="primary">
                  Comment
                </Button>
              </div>
            </div>
            <div className="space-y-2 bg-[#FFFF] rounded-lg px-3 pt-2 ">
              <ItemComment
                name="Trọng Ca"
                contents="Hendrerit netus augue interdum odio morbi aliquam. Habitant ultricies volutpat sit eget suspendisse fermentum. Id faucib auctor ultrices senectus dictumst mi blandit. Adipiscing tellus porta enim tortor."
                numberLike="100"
                status="Ready"
                time="24h"
              />
              <ItemComment
                name="Trọng Ca"
                contents="Hendrerit netus augue interdum odio morbi aliquam. Habitant ultricies volutpat sit eget suspendisse fermentum. Id faucib auctor ultrices senectus dictumst mi blandit. Adipiscing tellus porta enim tortor."
                numberLike="100"
                status="Ready"
                time="24h"
              />
              <ItemComment
                name="Trọng Ca"
                contents="Hendrerit netus augue interdum odio morbi aliquam. Habitant ultricies volutpat sit eget suspendisse fermentum. Id faucib auctor ultrices senectus dictumst mi blandit. Adipiscing tellus porta enim tortor."
                numberLike="100"
                status="Ready"
                time="24h"
                feedBack
                number="3 Replies"
              />
              <ItemComment
                name="Trọng Ca"
                contents="Hendrerit netus augue interdum odio morbi aliquam. Habitant ultricies volutpat sit eget suspendisse fermentum. Id faucib auctor ultrices senectus dictumst mi blandit. Adipiscing tellus porta enim tortor."
                numberLike="100"
                status="Ready"
                time="24h"
                feedBack
                number="3 Replies"
              />
              {/* <CommentItem
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
              /> */}
              <div className="text-center pb-5">
                <Button className="!w-[90%] !h-[34px] !text-gray-900 !font-[500] !rounded-lg">
                  View all comment
                </Button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </MasterLayout>
  );
};

export default ProjectDescription;
