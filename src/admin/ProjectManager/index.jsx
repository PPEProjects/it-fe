import React from 'react';
import MasterLayout from 'layouts/MasterLayout';
import { LayoutAdmin } from 'layouts/LayoutAdmin';
import { BoardItem } from 'components/BoardItem';

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
                />
              </div>
            );
          })}
        </div>
      </LayoutAdmin>
    </MasterLayout>
  );
};

export default ProjectManager;
