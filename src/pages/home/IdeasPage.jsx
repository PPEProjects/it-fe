import React, { useEffect, useState } from 'react';
import MasterLayout from 'layouts/MasterLayout';
import { MenuPage } from './MenuPage';
import { BoardItem } from 'pages/home/AllPage/BoardItem';
import { SeeMore } from 'components/SeeMore';
import { CommentItem } from 'pages/home/AllPage/CommentItem';
import { useDispatch, useSelector } from 'react-redux';
import { projectSelector, MyIdeas } from 'pages/project/projectSlice';

import { AiOutlineHeart } from 'react-icons/ai';

const IdeasPage = () => {
  const dispatch = useDispatch();
  const { mlMyIdeas, cProject } = useSelector(projectSelector);
  const [loadMore, setLoadMore] = useState(8);
  const onLoadMore = () => {
    setLoadMore(loadMore + 8);
  };
  useEffect(() => {
    dispatch(MyIdeas());
  }, [dispatch, cProject]);

  return (
    <MasterLayout>
      <MenuPage />
      <section className="p-4">
        <h3 className="text-[18px] font-[600]">Ideas</h3>
        <div className="grid grid-cols-4 gap-4">
          {(mlMyIdeas?.myIdeas?.slice(0, loadMore) ?? [])?.map((item, index) => {
            return (
              <div key={index}>
                <BoardItem
                  link={`/ProjectDescription?id=${item?.id}`}
                  imgPage="https://i.pravatar.cc/100?img=2"
                  nameProject={item?.name}
                  numberComment="1"
                  numberHeart="2"
                  numberLike="3"
                  imgAvatar="https://i.pravatar.cc/100?img=2"
                >
                  <div className="px-2.5 space-y-1.5">
                    <div className="space-y-2">
                      <CommentItem
                        itemsCenter
                        imgAvatar="https://i.pravatar.cc/100?img=2"
                        nameUser="Eduardo Benz"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                      />
                      <CommentItem
                        itemsCenter
                        imgAvatar="https://i.pravatar.cc/100?img=2"
                        nameUser="Eduardo Benz"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                      />
                    </div>
                    <div className="flex items-center justify-end">
                      <button className="shadow-sm bg-white p-1.5 flex text-[#F97316] items-center space-x-1.5 w-[90px] rounded-md">
                        <AiOutlineHeart className="text-xl stroke-[20px]" />
                        <span className="text-[11px]">Follow</span>
                      </button>
                    </div>
                  </div>
                </BoardItem>
              </div>
            );
          })}
        </div>
        {loadMore < mlMyIdeas?.myIdeas?.length && <SeeMore onClick={onLoadMore} />}
      </section>
    </MasterLayout>
  );
};
export default IdeasPage;
