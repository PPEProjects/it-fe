import React from 'react';
import MasterLayout from 'layouts/MasterLayout';
import { TitleItem } from './TitleItem';
import { BoardItem } from 'components/BoardItem';
import { LayoutAdmin } from 'layouts/LayoutAdmin';

const Administrator = () => {
  return (
    <MasterLayout>
      <LayoutAdmin className=" border rounded space-y-4">
        <div className="space-y-4 border-b p-4 pb-5">
          <TitleItem title="Draft" number="8" />
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
      </LayoutAdmin>
    </MasterLayout>
  );
};

export default Administrator;
