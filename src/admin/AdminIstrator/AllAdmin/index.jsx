import React from 'react';
import MasterLayout from 'layouts/MasterLayout';
import { TitleItem } from './TitleItem';
import { BoardItem } from 'components/BoardItem';
import { LayoutAdmin } from 'layouts/LayoutAdmin';
import { Checkbox } from 'antd';
function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}
const dataIdeas = [
  {
    imgPage: 'https://i.pravatar.cc/100?img=2',
    imgAvatar: 'https://i.pravatar.cc/100?img=2',
    nameProject: '12345',
  },
  {
    imgPage: 'https://i.pravatar.cc/100?img=2',
    imgAvatar: 'https://i.pravatar.cc/100?img=2',
    nameProject: '12345',
  },
  {
    imgPage: 'https://i.pravatar.cc/100?img=2',
    imgAvatar: 'https://i.pravatar.cc/100?img=2',
    nameProject: '12345',
  },
];
const dataProject = [
  {
    imgPage: 'https://i.pravatar.cc/100?img=2',
    imgAvatar: 'https://i.pravatar.cc/100?img=2',
    nameProject: '12345',
  },
  {
    imgPage: 'https://i.pravatar.cc/100?img=2',
    imgAvatar: 'https://i.pravatar.cc/100?img=2',
    nameProject: '12345',
  },
  {
    imgPage: 'https://i.pravatar.cc/100?img=2',
    imgAvatar: 'https://i.pravatar.cc/100?img=2',
    nameProject: '12345',
  },
];
const dataDraft = [
  {
    imgPage: 'https://i.pravatar.cc/100?img=2',
    imgAvatar: 'https://i.pravatar.cc/100?img=2',
    nameProject: '12345',
  },
  {
    imgPage: 'https://i.pravatar.cc/100?img=2',
    imgAvatar: 'https://i.pravatar.cc/100?img=2',
    nameProject: '12345',
  },
  {
    imgPage: 'https://i.pravatar.cc/100?img=2',
    imgAvatar: 'https://i.pravatar.cc/100?img=2',
    nameProject: '12345',
  },
];
const Administrator = ({ imgPage, imgAvatar, nameProject }) => {
  return (
    <MasterLayout>
      <LayoutAdmin admin className=" border rounded space-y-4">
        <div className="space-y-4 border-b p-4 pb-5">
          <div className="flex space-x-5">
            <button className="border h-10 bg-[#F6F9FB] flex items-center justify-between px-3 rounded-lg font-medium text-sm w-44 text-[#0369A1]">
              <span>Newest</span>
              <Checkbox onChange={onChange}></Checkbox>
            </button>
            <button className="border h-10 flex items-center justify-between px-3 rounded-lg font-medium text-sm w-44 text-[#0369A1]">
              <span>Most interested</span>
              <Checkbox onChange={onChange}></Checkbox>
            </button>
          </div>
          <TitleItem title="Draft" number="8" />
          <div className="grid grid-cols-3 gap-4 px-3">
            {(dataDraft ?? []).map((item, index) => {
              return (
                <div key={index}>
                  <BoardItem
                    imgPage={item?.imgPage}
                    imgAvatar={item?.imgAvatar}
                    nameProject={item?.nameProject}
                    admin
                    shadowNone
                    placement="bottomRight"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-4 border-b p-4 pb-5">
          <TitleItem title="Ideas" number="8" />
          <div className="grid grid-cols-3 gap-4 px-3">
            <BoardItem
              imgPage="https://i.pravatar.cc/100?img=2"
              imgAvatar="https://i.pravatar.cc/100?img=2"
              nameProject="12345"
              admin
              shadowNone
              placement="bottomRight"
            />
            <BoardItem
              imgPage="https://i.pravatar.cc/100?img=2"
              imgAvatar="https://i.pravatar.cc/100?img=2"
              nameProject="12345"
              admin
              shadowNone
              placement="bottomRight"
            />
            <BoardItem
              imgPage="https://i.pravatar.cc/100?img=2"
              imgAvatar="https://i.pravatar.cc/100?img=2"
              nameProject="12345"
              admin
              shadowNone
              placement="bottomRight"
            />
          </div>
        </div>

        <div className="space-y-4 p-4 pb-5">
          <TitleItem title="Project" number="8" />
          <div className="grid grid-cols-3 gap-4 px-3">
            {(dataProject ?? []).map((item, index) => {
              return (
                <div key={index}>
                  <BoardItem
                    imgPage={item?.imgPage}
                    imgAvatar={item?.imgAvatar}
                    nameProject={item?.nameProject}
                    admin
                    shadowNone
                    placement="bottomRight"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </LayoutAdmin>
    </MasterLayout>
  );
};

export default Administrator;
