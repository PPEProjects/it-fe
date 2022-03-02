import React, { useEffect } from "react";
import MasterLayout from "layouts/MasterLayout";
import { CardSkin } from "./CardSkin";
import { ProjectItem } from "./ProjectItem";
import { Directory } from "./Directory";
import { Framework } from "./Framework";
import { Button } from "antd";
import { detailUser, userSelector } from "pages/user/userSlice";
import { getURLParams } from "services";
import { useDispatch, useSelector } from "react-redux";

import { AiOutlineStar, AiFillStar, AiTwotoneDownSquare } from "react-icons/ai";
import { BsFillCalendar2Fill, BsTelephoneFill } from "react-icons/bs";
import { FaTransgender } from "react-icons/fa";
import { HiMail, HiLocationMarker } from "react-icons/hi";

const MyProfile = () => {
  const dispatch = useDispatch();
  const { id } = getURLParams();
  const { deUser } = useSelector(userSelector);
  const deUsers = deUser?.detailUserIds;

  useEffect(() => {
    dispatch(detailUser(id));
  }, [id, dispatch]);

  return (
    <MasterLayout>
      <section className="flex space-x-7 p-5 bg-[#F6F9FB]">
        <section className="w-1/2 space-y-5">
          <div className="border-b-[4px] border-[#FDBA74] space-y-1 pb-5">
            <p className="flex items-center justify-center">
              <img
                className="w-[450px] rounded-full h-[450px]"
                src="https://i.pravatar.cc/100?img=2"
                alt=""
              />
            </p>
            <p className="text-5xl flex justify-center space-x-1">
              <AiFillStar className="text-[#ffc700]" />
              <AiFillStar className="text-[#ffc700]" />
              <AiFillStar className="text-[#ffc700]" />
              <AiFillStar className="text-[#ffc700]" />
              <AiFillStar className="text-[#ffc700]" />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </p>
          </div>

          <div className="space-y-3">
            <Directory nameDirectory="Self Ideas/Projects" />
            <div className="grid grid-cols-2 gap-4 pt-2">
              {(deUsers?.userAdvance?.selfProject ?? [])?.map((item, index) => {
                return (
                  <div key={index}>
                    <ProjectItem
                      ideas
                      imgAvatar="https://i.pravatar.cc/100?img=2"
                      content={item?.description}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-3">
            <Directory nameDirectory="Joined Projects" />
            <div className="grid grid-cols-2 gap-4 pt-2">
              {(deUsers?.userAdvance?.joinProject ?? [])?.map((item, index) => {
                return (
                  <div key={index}>
                    <ProjectItem
                      joinProject
                      imgAvatar="https://i.pravatar.cc/100?img=2"
                      project={item?.project?.name}
                      category={item?.project?.category}
                      time={item?.project?.timeToDo}
                      position={item?.position}
                    >
                      <p className="text-[26px] flex justify-center space-x-1">
                        <AiFillStar className="text-[#ffc700]" />
                        <AiFillStar className="text-[#ffc700]" />
                        <AiFillStar className="text-[#ffc700]" />
                        <AiFillStar className="text-[#ffc700]" />
                        <AiFillStar className="text-[#ffc700]" />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                      </p>
                    </ProjectItem>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="w-1/2 space-y-5">
          <div className="px-2 pt-2 border-b-[4px] pb-[22px] border-[#FDBA74]">
            <h6 className="text-[#164E63] text-[66px] uppercase">
              {deUsers?.name}
            </h6>
            <h6 className="text-[#0891B2] text-[40px] uppercase">
              {deUsers?.userAdvance?.goal}
            </h6>
            <div className="text-[24px] text-[#164E63]">
              <div className="flex items-center justify-between">
                <div className="flex pl-[3px] items-center space-x-1.5">
                  <BsFillCalendar2Fill />
                  <span>{deUsers?.date_of_birth}</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <FaTransgender />
                  <span>{deUsers?.gender}</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <BsTelephoneFill />
                  <span>{deUsers?.phone_number}</span>
                </div>
              </div>
              <div className="flex items-center space-x-1.5">
                <HiMail className="text-3xl" />
                <span>{deUsers?.email}</span>
              </div>
              <div className="flex space-x-1.5 w-2/3">
                <HiLocationMarker className="text-4xl" />
                <span>{deUsers?.address}</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-2">
              <CardSkin
                project="Self Ideas/Project"
                number={deUsers?.userAdvance?.selfProject?.length}
              />
              <CardSkin
                project="Joined Project"
                number={deUsers?.userAdvance?.joinProject?.length}
              />
              <CardSkin
                project="Framework"
                number={deUsers?.userAdvance?.skill?.length}
              />
            </div>
          </div>

          <div className="space-y-3">
            <Directory nameDirectory="Personal goals" />
            <p className="text-[24px] text-[#000000]">
              {deUsers?.userAdvance?.plan}
            </p>
          </div>

          <div className="space-y-3">
            <Directory nameDirectory="Language" />
            <p className="flex items-center justify-around pt-5">
              {(deUsers?.userAdvance?.language ?? [])?.map((item, index) => {
                return (
                  <div key={index}>
                    {item === "VietNames" && (
                      <Button className="!h-[57px] !w-[160px] !text-[24px] border-none !rounded !text-[#92400E] !bg-[#FEF3C7]">
                        Vietnamese
                      </Button>
                    )}
                    {item === "English" && (
                      <Button className="!h-[57px] !w-[160px] !text-[24px] border-none !rounded !text-[#065F46] !bg-[#D1FAE5]">
                        English
                      </Button>
                    )}
                    {item === "Japanese" && (
                      <Button className="!h-[57px] !w-[160px] !text-[24px] border-none !rounded !text-[#1E40AF] !bg-[#DBEAFE]">
                        Japanese
                      </Button>
                    )}
                  </div>
                );
              })}
            </p>
          </div>

          {/* {(deUsers?.userAdvance?.skill ?? [])?.map((item, index) => {
            return (
              <div key={index} className="space-y-3">
                <div className="space-y-6 pt-4" key={index}>
                  <Directory
                    className="!w-[490px]"
                    nameDirectory="Programming Language"
                  />

                  <div className="text-[12px] m-auto p-8 bg-white w-[220px]">
                    {(item?.program_language ?? [])?.map(
                      (programItem, index) => {
                        return (
                          <div key={index}>
                            {programItem === "php" && (
                              <p className="flex items-center space-x-2">
                                <AiTwotoneDownSquare className="text-[#35B26F] text-xl" />
                                <span className="text-[#2E9960]">
                                  {programItem}
                                </span>
                              </p>
                            )}
                            {programItem === "java" && (
                              <p className="flex items-center space-x-2">
                                <AiTwotoneDownSquare className="text-[#0284C7] text-xl" />
                                <span className="text-[#2563EB]">
                                  {programItem}
                                </span>
                              </p>
                            )}
                            {programItem === "C" && (
                              <p className="flex items-center space-x-2">
                                <AiTwotoneDownSquare className="text-[#F2CE54] text-xl" />
                                <span className="text-[#CCAE47]">
                                  {programItem}
                                </span>
                              </p>
                            )}
                            {programItem === "css" && (
                              <p className="flex items-center space-x-2">
                                <AiTwotoneDownSquare className="text-[#F2545D] text-xl" />
                                <span className="text-[#CC474E]">
                                  {programItem}
                                </span>
                              </p>
                            )}
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>

                <div className="space-y-6 pt-4">
                  <Directory nameDirectory="Framework" />
                  <div className="flex items-center space-x-12 px-2">
                    {(item?.framework ?? [])?.map((frameworkItem, index) => {
                      return (
                        <div key={index}>
                          <Framework
                            className="!bg-[#d1fae5] !text-[#065F46]"
                            framework={frameworkItem}
                          />
                          <Framework
                            className="!bg-[#F3F4F6]"
                            framework={frameworkItem}
                          />
                          <Framework
                            className="!bg-[#FEE2E2] !text-[#991B1B]"
                            framework={frameworkItem}
                          />
                          <Framework
                            className="!bg-[#FEF3C7] !text-[#92400E]"
                            framework={frameworkItem}
                          />
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex items-center justify-end space-x-12 px-2">
                    <Framework
                      className="!bg-[#d1fae5] !text-[#065F46]"
                      framework=".NET"
                    />
                    <Framework
                      className="!bg-[#DBEAFE] !text-[#1E40AF]"
                      framework="Laravel"
                    />
                    <Framework
                      className="!bg-[#EDE9FE] !text-[#5B21B6]"
                      framework="Tailwind"
                    />
                  </div>
                </div>
              </div>
            );
          })} */}

          <div className="space-y-3 py-5">
            <Directory
              className="!w-[490px]"
              nameDirectory="Self Introduction"
            />
            <p className="text-[24px] text-[#000000]">
              {deUsers?.userAdvance?.info}
            </p>
          </div>
        </section>
      </section>
    </MasterLayout>
  );
};

export default MyProfile;
