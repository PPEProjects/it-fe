import React from "react";
import MasterLayout from "layouts/MasterLayout";
import { CardSkin } from "./CardSkin";
import { ProjectItem } from "./ProjectItem";
import { Directory } from "./Directory";
import { Framework } from "./Framework";
import { Button } from "antd";

import { AiOutlineStar, AiFillStar, AiTwotoneDownSquare } from "react-icons/ai";
import { BsFillCalendar2Fill, BsTelephoneFill } from "react-icons/bs";
import { FaTransgender } from "react-icons/fa";
import { HiMail, HiLocationMarker } from "react-icons/hi";

const dataJoinProject = [
  {
    imgAvatar: "https://i.pravatar.cc/100?img=2",
    project: " Project IT Training",
    category: "Web-app",
    time: "20/01/2022 - 20/04/2022",
    position: "Back End Developer",
  },
  {
    imgAvatar: "https://i.pravatar.cc/100?img=2",
    project: " Project IT Training",
    category: "Web-app",
    time: "20/01/2022 - 20/04/2022",
    position: "Back End Developer",
  },
  {
    imgAvatar: "https://i.pravatar.cc/100?img=2",
    project: " Project IT Training",
    category: "Web-app",
    time: "20/01/2022 - 20/04/2022",
    position: "Back End Developer",
  },
  {
    imgAvatar: "https://i.pravatar.cc/100?img=2",
    project: " Project IT Training",
    category: "Web-app",
    time: "20/01/2022 - 20/04/2022",
    position: "Back End Developer",
  },
  {
    imgAvatar: "https://i.pravatar.cc/100?img=2",
    project: " Project IT Training",
    category: "Web-app",
    time: "20/01/2022 - 20/04/2022",
    position: "Back End Developer",
  },
  {
    imgAvatar: "https://i.pravatar.cc/100?img=2",
    project: " Project IT Training",
    category: "Web-app",
    time: "20/01/2022 - 20/04/2022",
    position: "Back End Developer",
  },
];

const MyProfile = () => {
  return (
    <MasterLayout>
      <section className="flex space-x-7 p-5 bg-[#E5E5E5]">
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
              <ProjectItem
                ideas
                imgAvatar="https://i.pravatar.cc/100?img=2"
                content="Arcu nulla feugiat blandit sit eget cras integer habitant. Mattis praesent vel, gravida scelerisque mi urna diam erat. Mauris fames."
              />
              <ProjectItem
                imgAvatar="https://i.pravatar.cc/100?img=2"
                ideas
                content="Arcu nulla feugiat blandit sit eget cras integer habitant. Mattis praesent vel, gravida scelerisque mi urna diam erat. Mauris fames."
              />
            </div>
          </div>

          <div className="space-y-3">
            <Directory nameDirectory="Joined Projects" />
            <div className="grid grid-cols-2 gap-4 pt-2">
              {dataJoinProject?.map((item, index) => {
                return (
                  <div key={index}>
                    <ProjectItem
                      joinProject
                      imgAvatar={item?.imgAvatar}
                      project={item?.project}
                      category={item?.category}
                      time={item?.time}
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
            <h6 className="text-[#164E63] text-[66px]">CHRISTIAN NGUYEN</h6>
            <h6 className="text-[#0891B2] text-[40px]">BACK END DEVELOPER</h6>
            <div className="text-[24px] text-[#164E63]">
              <div className="flex items-center justify-between">
                <div className="flex pl-[3px] items-center space-x-1.5">
                  <BsFillCalendar2Fill />
                  <span>01/01/1996</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <FaTransgender />
                  <span>Nam</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <BsTelephoneFill />
                  <span>0909 888 888</span>
                </div>
              </div>
              <div className="flex items-center space-x-1.5">
                <HiMail className="text-3xl" />
                <span>christian.nguyen.96@gmail.com</span>
              </div>
              <div className="flex space-x-1.5 w-2/3">
                <HiLocationMarker className="text-4xl" />
                <span>
                  81, 6th street, Tan Phong Ward, district 7, Ho Chi Minh city.
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-2">
              <CardSkin project="Self Ideas/Project" number="3" />
              <CardSkin project="Joined Project" number="3" />
              <CardSkin project="Framework" number="3" />
            </div>
          </div>

          <div className="space-y-3">
            <Directory nameDirectory="Personal goals" />
            <p className="text-[24px] text-[#000000]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              facilisis vel, tempus rhoncus. In quam nisl, eu pharetra in quam.
              Adipiscing a, sed adipiscing rhoncus, nulla. Aenean orci fermentum
              scelerisque risus tincidunt ut habitasse. Magna adipiscing urna
              donec enim. Pellentesque sed pretium vel purus.
            </p>
          </div>

          <div className="space-y-3">
            <Directory nameDirectory="Language" />
            <p className="flex items-center justify-around pt-5">
              <Button className="!h-[57px] !w-[160px] !text-[24px] border-none !rounded !text-[#92400E] !bg-[#FEF3C7]">
                Vietnamese
              </Button>
              <Button className="!h-[57px] !w-[160px] !text-[24px] border-none !rounded !text-[#065F46] !bg-[#D1FAE5]">
                English
              </Button>
              <Button className="!h-[57px] !w-[160px] !text-[24px] border-none !rounded !text-[#1E40AF] !bg-[#DBEAFE]">
                Japanese
              </Button>
            </p>
          </div>

          <div className="space-y-6 pt-4">
            <Directory
              className="!w-[490px]"
              nameDirectory="Programming Language"
            />
            <div className="text-[12px] m-auto p-8 bg-white w-[220px]">
              <p className="flex items-center space-x-2">
                <AiTwotoneDownSquare className="text-[#35B26F] text-xl" />
                <span className="text-[#2E9960]">PHP</span>
              </p>
              <p className="flex items-center space-x-2">
                <AiTwotoneDownSquare className="text-[#0284C7] text-xl" />
                <span className="text-[#2563EB]">HTML</span>
              </p>
              <p className="flex items-center space-x-2">
                <AiTwotoneDownSquare className="text-[#F2CE54] text-xl" />
                <span className="text-[##CCAE47]">JavaScript</span>
              </p>
              <p className="flex items-center space-x-2">
                <AiTwotoneDownSquare className="text-[#F2545D] text-xl" />
                <span className="text-[#CC474E]">Css</span>
              </p>
            </div>
          </div>

          <div className="space-y-6 pt-4">
            <Directory nameDirectory="Framework" />
            <div className="flex items-center space-x-12 px-2">
              <Framework className="!bg-[#F3F4F6]" framework="NoteJS" />
              <Framework
                className="!bg-[#FEE2E2] !text-[#991B1B]"
                framework="Spring"
              />
              <Framework
                className="!bg-[#FEF3C7] !text-[#92400E]"
                framework="CakePHP"
              />
            </div>
            <div className="flex items-center justify-end space-x-12 px-2">
              <Framework
                className="!bg-[#D1FAE5] !text-[#065F46]"
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

          <div className="space-y-3 py-5">
            <Directory
              className="!w-[490px]"
              nameDirectory="Self Introduction"
            />
            <p className="text-[24px] text-[#000000]">
              At arcu nullam scelerisque sed quisque. Sodales tellus adipiscing
              cursus odio adipiscing. Adipiscing tempor id aenean tristique.
              Nunc eget commodo id nec nisl in semper. Elit suscipit lacus donec
              augue. Quam vestibulum, fringilla ornare massa duis. Neque
              sagittis, turpis feugiat lectus etiam. Tortor massa semper quisque
              vitae, sed. Tristique sit neque faucibus nibh donec felis.
              Volutpat dolor lectus donec turpis.
            </p>
          </div>
        </section>
      </section>
    </MasterLayout>
  );
};

export default MyProfile;
