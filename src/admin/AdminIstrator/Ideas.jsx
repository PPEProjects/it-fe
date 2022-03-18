import React from 'react';
import { LayoutAdmin } from 'layouts/LayoutAdmin';
import MasterLayout from 'layouts/MasterLayout';
import { BoardItem } from 'components/BoardItem';
import { TitleItem } from './AllAdmin/TitleItem';
import { SearchCommon } from 'components/SearchCommon';

import { BiSearch } from 'react-icons/bi';

const dataIdeas = [
  {
    imgPage: 'https://i.pravatar.cc/100?img=2',
    imgAvatar: 'https://i.pravatar.cc/100?img=2',
    numberLikeIdeas: '6',
    numberCommentIdeas: '8',
    nameProject: 'Tom',
  },
  {
    imgPage: 'https://i.pravatar.cc/100?img=2',
    imgAvatar: 'https://i.pravatar.cc/100?img=2',
    numberLikeIdeas: '6',
    numberCommentIdeas: '8',
    nameProject: 'Tom',
  },
  {
    imgPage: 'https://i.pravatar.cc/100?img=2',
    imgAvatar: 'https://i.pravatar.cc/100?img=2',
    numberLikeIdeas: '6',
    numberCommentIdeas: '8',
    nameProject: 'Tom',
  },
  {
    imgPage: 'https://i.pravatar.cc/100?img=2',
    imgAvatar: 'https://i.pravatar.cc/100?img=2',
    numberLikeIdeas: '6',
    numberCommentIdeas: '8',
    nameProject: 'Tom',
  },
  {
    imgPage: 'https://i.pravatar.cc/100?img=2',
    imgAvatar: 'https://i.pravatar.cc/100?img=2',
    numberLikeIdeas: '6',
    numberCommentIdeas: '8',
    nameProject: 'Tom',
  },
  {
    imgPage: 'https://i.pravatar.cc/100?img=2',
    imgAvatar: 'https://i.pravatar.cc/100?img=2',
    numberLikeIdeas: '6',
    numberCommentIdeas: '8',
    nameProject: 'Tom',
  },
  {
    imgPage: 'https://i.pravatar.cc/100?img=2',
    imgAvatar: 'https://i.pravatar.cc/100?img=2',
    numberLikeIdeas: '6',
    numberCommentIdeas: '8',
    nameProject: 'Tom',
  },
  {
    imgPage: 'https://i.pravatar.cc/100?img=2',
    imgAvatar: 'https://i.pravatar.cc/100?img=2',
    numberLikeIdeas: '6',
    numberCommentIdeas: '8',
    nameProject: 'Tom',
  },
  {
    imgPage: 'https://i.pravatar.cc/100?img=2',
    imgAvatar: 'https://i.pravatar.cc/100?img=2',
    numberLikeIdeas: '6',
    numberCommentIdeas: '8',
    nameProject: 'Tom',
  },
];

const Ideas = () => {
  return (
    <MasterLayout>
      <LayoutAdmin admin>
        <section className="p-4 space-y-4 -mt-2">
          <div className="w-5/12">
            <SearchCommon
              placeholder="Input your text"
              enterButton="Search"
              prefix={<BiSearch className="text-[18px] !text-gray-400" />}
            />
          </div>
          <TitleItem title="Ideas" number="9" />
          <div className="grid grid-cols-3 gap-5">
            {(dataIdeas ?? []).map((item, index) => {
              return (
                <div key={index}>
                  <BoardItem
                    admin
                    shadowNone
                    ideas
                    numberLike
                    minSize
                    imgPage={item?.imgPage}
                    imgAvatar={item?.imgAvatar}
                    numberLikeIdeas={item?.numberLikeIdeas}
                    numberCommentIdeas={item?.numberCommentIdeas}
                    nameProject={item?.nameProject}
                  />
                </div>
              );
            })}
          </div>
        </section>
      </LayoutAdmin>
    </MasterLayout>
  );
};
export default Ideas;
