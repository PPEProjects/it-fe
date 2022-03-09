import React from 'react';
import MasterLayout from 'layouts/MasterLayout';
import { TitleItem } from './TitleItem';
import { BoardItem } from 'components/BoardItem';

const Administrator = () => {
  return (
    <MasterLayout>
      <section className="p-3 flex items-center space-x-4">
        <div className="w-[15%] border rounded">1</div>
        <div className="w-[85%] border rounded space-y-4">
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
        </div>
      </section>
    </MasterLayout>
  );
};

export default Administrator;
