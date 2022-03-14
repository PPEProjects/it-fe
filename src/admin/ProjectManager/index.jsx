import React from 'react';
import MasterLayout from 'layouts/MasterLayout';
import { LayoutAdmin } from 'layouts/LayoutAdmin';
import { BoardItem } from 'components/BoardItem';
import { Steps } from 'components/Steps';

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
    status: 'complete',
  },
  {
    key: 2,
    name: 'Onboard',
    href: '#',
    status: 'complete',
  },
  {
    key: 3,
    name: 'Running',
    href: '#',
    status: 'current',
  },
  {
    key: 4,
    name: 'Done',
    href: '#',
    status: 'upcoming',
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

const ProjectManager = () => {
  return (
    <MasterLayout>
      <LayoutAdmin>
        <div className="grid grid-cols-2 gap-4 p-4">
          {(dataBoardItem ?? []).map((item, index) => {
            return (
              <div key={index}>
                <BoardItem
                  imgPage={item?.imgPage}
                  imgAvatar={item?.imgAvatar}
                  nameProject={item?.nameProject}
                  shadowNone
                  projectManager
                  placement="bottomRight"
                >
                  <div className="p-2 space-y-4">
                    <Steps stepsRow dataSteps={dataSteps} />
                    <Steps stepsColumn dataSteps={dataStepsColumn} />
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
