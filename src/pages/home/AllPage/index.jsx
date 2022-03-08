import React, { useEffect, useState } from 'react';
import { BoardItem } from 'components/BoardItem';
import { SeeMore } from 'components/SeeMore';
import { BoardPosition } from './BoardPosition';
import { CommentItem } from './CommentItem';
import { useDispatch, useSelector } from 'react-redux';
import { projectSelector, MyProject, MyIdeas, setProject } from 'pages/project/projectSlice';
import { Image } from '@tienlucky/storage';

import { AiOutlineHeart } from 'react-icons/ai';
import { RiCommunityFill } from 'react-icons/ri';

export const AllPage = () => {
  const dispatch = useDispatch();
  const { mlMyProject, mlMyIdeas, cProject } = useSelector(projectSelector);

  const [loadMore, setLoadMore] = useState(8);
  const onLoadMore = () => {
    setLoadMore(loadMore + 8);
  };

  useEffect(() => {
    dispatch(MyProject());
  }, [dispatch, cProject]);

  useEffect(() => {
    dispatch(MyIdeas());
  }, [dispatch, cProject]);

  useEffect(() => {
    dispatch(
      setProject({
        cProject: {},
      })
    );
  }, [dispatch]);

  return (
    <section className="p-3 pl-5 space-y-1">
      <section>
        <h3 className="text-[18px] font-[600]">Project Board</h3>
        <p className="text-sm -mt-2 text-gray-500">
          Projects that allow registration to participate.
        </p>
        <div className="grid grid-cols-4 gap-4">
          {(mlMyProject?.myProject?.slice(0, loadMore) ?? [])?.map((item, index) => {
            console.log('item', item);
            return (
              <div key={index}>
                <BoardItem
                  placement="bottomRight"
                  user
                  linkViewDescription={`/ProjectDescription?id=${item?.id}`}
                  linkViewDetail={`/ProjectDescription?id=${item?.id}`}
                  link={`/ProjectDescription?id=${item?.id}`}
                  // imgPage={Image.getFileUrl(item?.attachments?.main_picture, 200)}
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
          <SeeMore name="See more" onClick={onLoadMore} />
        )}
      </section>

      <section>
        <h3 className="text-[18px] font-[600]">Ideas</h3>
        <div className="grid grid-cols-4 gap-4">
          {(mlMyIdeas?.myIdeas?.slice(0, loadMore) ?? [])?.map((item, index) => {
            return (
              <div key={index}>
                <BoardItem
                  user
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
                  <div className="px-2.5 space-y-1.5">
                    <div className="space-y-2">
                      <CommentItem
                        itemsCenter
                        nameUser="Eduardo Benz"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                      />
                      <CommentItem
                        itemsCenter
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
        {loadMore < mlMyIdeas?.myIdeas?.length && <SeeMore name="See more" onClick={onLoadMore} />}
      </section>

      {/* <section>
        <h3 className="text-[18px] font-[600]">Project Running</h3>
        <div className="grid grid-cols-4 gap-4">
          {dataBoardItem?.map((item, index) => {
            return (
              <div key={index}>
                <BoardItem
                  imgPage={item?.imgPage}
                  project={item?.project}
                  numberComment={item?.numberComment}
                  numberHeart={item?.numberHeart}
                  numberLike={item?.numberLike}
                  imgAvatar={item?.imgAvatar}
                >
                  <div className="relative">
                    <div className="grid grid-cols-7 gap-2 px-3">
                      <BoardPosition
                        running

                        text="Leader"
                      />
                      <BoardPosition
                        running

                        text="PO"
                      />
                      <BoardPosition
                        running

                        text="Dev"
                      />
                      <BoardPosition
                        running

                        text="Leader"
                      />
                      <BoardPosition
                        running

                        text="Leader"
                      />
                      <BoardPosition
                        running

                        text="Tester"
                      />
                      <BoardPosition
                        running

                        text="Leader"
                      />
                      <BoardPosition
                        running

                        text="QA"
                      />
                      <BoardPosition
                        running

                        text="Leader"
                      />
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
        <SeeMore name='See more' />
      </section>

      <section>
        <h3 className="text-[18px] font-[600]">Project Done</h3>
        <div className="grid grid-cols-4 gap-4">
          {dataBoardItem?.map((item, index) => {
            return (
              <div key={index}>
                <BoardItem
                  imgPage={item?.imgPage}
                  project={item?.project}
                  numberComment={item?.numberComment}
                  numberHeart={item?.numberHeart}
                  numberLike={item?.numberLike}
                  imgAvatar={item?.imgAvatar}
                >
                  <div className="relative">
                    <div className="grid grid-cols-7 gap-2 px-3">
                      <BoardPosition
                        done

                        text="Leader"
                      />
                      <BoardPosition
                        done

                        text="PO"
                      />
                      <BoardPosition
                        done

                        text="Dev"
                      />
                      <BoardPosition
                        done

                        text="Leader"
                      />
                      <BoardPosition
                        done

                        text="Leader"
                      />
                      <BoardPosition
                        done

                        text="Tester"
                      />
                      <BoardPosition
                        done

                        text="Leader"
                      />
                      <BoardPosition
                        done

                        text="QA"
                      />
                      <BoardPosition
                        done

                        text="Leader"
                      />
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
        <SeeMore name='See more' />
      </section>

      <section>
        <h3 className="text-[18px] font-[600]">Project In Use</h3>
        <div className="grid grid-cols-4 gap-4">
          {dataBoardItem?.map((item, index) => {
            return (
              <div key={index}>
                <BoardItem
                  imgPage={item?.imgPage}
                  project={item?.project}
                  numberComment={item?.numberComment}
                  numberHeart={item?.numberHeart}
                  numberLike={item?.numberLike}
                  imgAvatar={item?.imgAvatar}
                >
                  <div className="px-2.5 space-y-1.5">
                    <div className="flex font-[500] text-[#164E63] items-center space-x-1.5">
                      <RiCommunityFill className="text-xl" />
                      <span>Company: Smile Eye</span>
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
        <SeeMore name='See more' />
      </section> */}
    </section>
  );
};
