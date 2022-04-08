import React, { useEffect, useState } from 'react';
import MasterLayout from 'layouts/MasterLayout';
import { MenuPage } from './MenuPage';
import { BoardItem } from 'components/BoardItem';
import { SeeMore } from 'components/SeeMore';
import { BoardPosition } from 'pages/home/AllPage/BoardPosition';
import { useDispatch, useSelector } from 'react-redux';
import { projectSelector, MyProject } from 'pages/project/projectSlice';
import { Image } from '@tienlucky/storage';
import { AiOutlineHeart } from 'react-icons/ai';

const OnBoardPage = () => {
  const dispatch = useDispatch();
  const { mlMyProject, cProject } = useSelector(projectSelector);
  const [loadMore, setLoadMore] = useState(8);
  const onLoadMore = () => {
    setLoadMore(loadMore + 8);
  };
  useEffect(() => {
    dispatch(MyProject());
  }, [dispatch, cProject]);

  return (
    <MasterLayout>
      <section className="w-full">
        <MenuPage />
        <section className="p-4">
          <h3 className="text-[18px] font-[600]">Project Board</h3>
          <p className="text-sm -mt-2 text-gray-500">
            Projects that allow registration to participate.
          </p>
          <div className="grid grid-cols-4 gap-x-4 gap-y-10">
            {(mlMyProject?.myProject?.slice(0, loadMore) ?? [])?.map((item, index) => {
              return (
                <div key={index}>
                  <BoardItem
                    user
                    lever="100"
                    placement="bottomRight"
                    linkViewDescription={`/ProjectDescription?id=${item?.id}`}
                    linkViewDetail={`/ProjectDescription?id=${item?.id}`}
                    link={`/ProjectDescription?id=${item?.id}`}
                    imgPage={item?.attachments?.main_picture?.file}
                    nameProject={item?.name}
                    numberComment="1"
                    numberHeart="2"
                    numberLike="3"
                  >
                    <div className="relative">
                      <div className="grid grid-cols-7 gap-2 px-3">
                        <BoardPosition board text="Leader" />
                        <BoardPosition board text="PO" />
                        <BoardPosition board text="Dev" />
                        <BoardPosition board text="Leader" />
                        <BoardPosition board text="Leader" />
                        <BoardPosition board text="Tester" />
                        <BoardPosition board text="Leader" />
                        <BoardPosition board text="QA" />
                        <BoardPosition board text="Leader" />
                      </div>
                      <button className="shadow-sm absolute right-4 bottom-3 bg-white p-1.5 flex text-[#F97316] items-center space-x-1.5 w-[90px] rounded-md">
                        <AiOutlineHeart className="text-xl stroke-[20px]" />
                        <span className="text-[11px]">Follow</span>
                      </button>
                    </div>
                  </BoardItem>
                </div>
              );
            })}
          </div>
          {loadMore < mlMyProject?.myProject?.length && (
            <SeeMore py8 name="See more" onClick={onLoadMore} />
          )}
        </section>
      </section>
    </MasterLayout>
  );
};
export default OnBoardPage;
