import React, { useState, useEffect } from 'react';
import MasterLayout from 'layouts/MasterLayout';
import { LayoutAdmin } from 'layouts/LayoutAdmin';
import { BoardItem } from 'components/BoardItem';
import { Steps_OLD } from 'components/Steps_OLD';
import {getMyProjects, memberProjectSelector} from "../../pages/memberProject/memberProjectSlice";
import {useDispatch, useSelector} from "react-redux";

const dataBoardItem = [
  {
    imgPage: 'https://i.pravatar.cc/100?img=2',
    imgAvatar: 'https://i.pravatar.cc/100?img=2',
    nameProject: 'Cay xanh cho ngoi nha yeu thuong',
  },
  {
    imgPage: 'https://i.pravatar.cc/100?img=2',
    imgAvatar: 'https://i.pravatar.cc/100?img=2',
    nameProject: 'Cay xanh cho ngoi nha yeu thuong',
  },
  {
    imgPage: 'https://i.pravatar.cc/100?img=2',
    imgAvatar: 'https://i.pravatar.cc/100?img=2',
    nameProject: 'Cay xanh cho ngoi nha yeu thuong',
  },
  {
    imgPage: 'https://i.pravatar.cc/100?img=2',
    imgAvatar: 'https://i.pravatar.cc/100?img=2',
    nameProject: 'Cay xanh cho ngoi nha yeu thuong',
  },
];

const dataSteps = [
  {
    key: 1,
    name: 'Preparing',
    href: '#',
    status: 'Preparing',
  },
  {
    key: 2,
    name: 'Onboard',
    href: '#',
    status: 'Onboard',
  },
  {
    key: 3,
    name: 'Running',
    href: '#',
    status: 'Running',
  },
  {
    key: 4,
    name: 'Done',
    href: '#',
    status: 'Done',
  },
];

const dataStepsNameColumn = [
  {
    key: 1,
    name: 'Created',
    href: '#',
    status: 'complete',
  },

  {
    key: 2,
    name: ' Creviewing & Improving ',
    href: '#',
    status: 'current',
  },
  {
    key: 3,
    name: ' Approve',
    href: '#',
    status: 'current',
  },
  {
    key: 4,
    name: 'PM Preparing',
    href: '#',
    status: 'current',
  },
  {
    key: 5,
    name: 'OnBoard',
    href: '#',
    status: 'current',
  },
  {
    key: 6,
    name: 'Running',
    href: '#',
    status: 'complete',
  },
  {
    key: 7,
    name: 'Done/Stuck/In use',
    href: '#',
    status: 'complete',
  },
];

const dataStepsColumn = [
  {
    description: 'Iusto et officia maiores porro ad non quas.',
    name: 'Preparing',
    href: '#',
    status: 'complete',
  },
  {
    description: 'Iusto et officia maiores porro ad non quas.',
    name: 'Onboard',
    href: '#',
    status: 'complete',
  },
  {
    description: 'Iusto et officia maiores porro ad non quas.',
    name: 'Running',
    href: '#',
    status: 'current',
  },
  {
    description: 'Iusto et officia maiores porro ad non quas.',
    name: 'Done',
    href: '#',
    status: 'upcoming',
  },
];

const avatarAttachment = (attachment) => {
  return attachment.thumb
}

const ProjectManager = () => {

  const dispatch = useDispatch()

  const { projects } = useSelector(memberProjectSelector)


  useEffect(() => {
    dispatch(getMyProjects())
  }, [])

  return (
    <MasterLayout>
      <LayoutAdmin>
        <div className="grid grid-cols-2 gap-4 p-4">
          {Object.values(projects).filter((item) => !!item.project).map((item, index) => {
            return (
              <div key={index}>
                <BoardItem
                  imgPage={item?.imgPage}
                  imgAvatar={avatarAttachment(item.project.user.avatar_attachment)}
                  nameProject={item?.project.name}
                  shadowNone
                  projectManager
                  placement="bottomRight"
                >
                  <div className="p-2 space-y-4">
                    <Steps_OLD dataSteps={dataSteps} stepsRow stepsName />
                  </div>
                </BoardItem>
              </div>
            );
          })}
        </div>
      </LayoutAdmin>
    </MasterLayout>
  );
};

export default ProjectManager;
