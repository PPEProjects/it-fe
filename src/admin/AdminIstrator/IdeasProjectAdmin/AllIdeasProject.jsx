import React, { useState, useEffect } from 'react';
import { TitleItem } from 'components/TitleItem';
import { BoardItem } from 'components/BoardItem';
import { Checkbox } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { projectSelector, MyProject, MyIdeas } from 'pages/project/projectSlice';
import { SeeMore } from 'components/SeeMore';

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
export const AllIdeasProject = () => {
  const dispatch = useDispatch();
  const { mlMyProject, mlMyIdeas, cProject } = useSelector(projectSelector);

  const [loadMore, setLoadMore] = useState(3);
  const onLoadMore = () => {
    setLoadMore(loadMore + 3);
  };

  useEffect(() => {
    dispatch(MyProject());
  }, [dispatch, cProject]);

  useEffect(() => {
    dispatch(MyIdeas());
  }, [dispatch, cProject]);

  return (
    <section>
      <div className="space-y-4  p-4 pb-5 ">
        <div className="flex space-x-5">
          <button className="border h-10 bg-[#F6F9FB] flex items-center justify-between px-3 rounded-lg font-medium text-sm w-44 text-[#0369A1]">
            <span>Newest</span>
            <Checkbox />
          </button>
          <button className="border h-10 flex items-center justify-between px-3 rounded-lg font-medium text-sm w-44 text-[#0369A1]">
            <span>Most interested</span>
            <Checkbox />
          </button>
        </div>
        <TitleItem title="Draft" number={dataDraft?.length} />
        <div className="grid grid-cols-3 gap-4 px-3">
          {(dataDraft ?? []).map((item, index) => {
            return (
              <div key={index}>
                <BoardItem
                  imgPage={item?.imgPage}
                  imgAvatar={item?.imgAvatar}
                  nameProject={item?.nameProject}
                  admin
                  linkViewDescription={`/ProjectDescription?id=${item?.id}`}
                  linkViewDetail={`/ProjectDescription?id=${item?.id}`}
                  link={`/ProjectDescription?id=${item?.id}`}
                  shadowNone
                  borderRounded={false}
                  placement="bottomRight"
                />
              </div>
            );
          })}
        </div>
      </div>
      <SeeMore name="See more" onClick={onLoadMore} />
      <div className="space-y-4  p-4 pb-5">
        <TitleItem title="Ideas" number={mlMyIdeas?.myIdeas?.length} />
        <div className="grid grid-cols-3 gap-4 px-3">
          {(mlMyIdeas?.myIdeas?.slice(0, loadMore) ?? []).map((item, index) => {
            return (
              <div key={index}>
                <BoardItem
                  imgPage={item?.attachments?.main_picture?.file}
                  imgAvatar={item?.avatar_attachment?.file}
                  nameProject={item?.name}
                  admin
                  linkViewDescription={`/ProjectDescription?id=${item?.id}`}
                  linkViewDetail={`/ProjectDescription?id=${item?.id}`}
                  link={`/ProjectDescription?id=${item?.id}`}
                  shadowNone
                  borderRounded={false}
                  placement="bottomRight"
                />
              </div>
            );
          })}
        </div>
      </div>
      {loadMore < mlMyIdeas?.myIdeas?.length && <SeeMore name="See more" onClick={onLoadMore} />}

      <div className="space-y-4 p-4 pb-5">
        <TitleItem title="Project" number={mlMyProject?.myProject?.length} />
        <div className="grid grid-cols-3 gap-4 px-3">
          {(mlMyProject?.myProject?.slice(0, loadMore) ?? []).map((item, index) => {
            return (
              <div key={index}>
                <BoardItem
                  imgPage={item?.attachments?.main_picture?.file}
                  imgAvatar={item?.avatar_attachment?.file}
                  nameProject={item?.name}
                  admin
                  linkViewDescription={`/ProjectDescription?id=${item?.id}`}
                  linkViewDetail={`/ProjectDescription?id=${item?.id}`}
                  link={`/ProjectDescription?id=${item?.id}`}
                  borderRounded={false}
                  shadowNone
                  placement="bottomRight"
                />
              </div>
            );
          })}
        </div>
      </div>
      {loadMore < mlMyProject?.myProject?.length && (
        <SeeMore name="See more" onClick={onLoadMore} />
      )}
    </section>
  );
};
