import { LayoutAdmin } from 'layouts/LayoutAdmin';
import React from 'react';
import MasterLayout from 'layouts/MasterLayout';
import { BoardItem } from 'components/BoardItem';
import { TitleItem } from '../AllAdmin/TitleItem';
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
];
export const MyIdea = () => {
  return (
    <MasterLayout>
      <LayoutAdmin>
        <div className="p-4">
          <TitleItem title="My Idea" number="2" />
        </div>
        <div className="grid grid-cols-2 gap-4 p-4">
          {(dataBoardItem ?? []).map((item, index) => {
            return (
              <div key={index}>
                <BoardItem
                  imgPage={item?.imgPage}
                  imgAvatar={item?.imgAvatar}
                  nameProject={item?.nameProject}
                  shadowNone
                  myIdea
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