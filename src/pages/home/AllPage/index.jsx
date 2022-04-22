import React, { useEffect, useState } from 'react';
import { BoardItem } from 'components/BoardItem';
import { SeeMore } from 'components/SeeMore';
import { BoardPosition } from './BoardPosition';
import { CommentItem } from './CommentItem';
import { useDispatch, useSelector } from 'react-redux';
import { projectSelector, MyProject, MyIdeas } from 'pages/project/projectSlice';
import { userSelector } from 'pages/user/userSlice';
import {
  AiFillHeart,
  AiFillLike,
  AiOutlineMessage,
  AiOutlineHeart,
  AiOutlineShareAlt,
} from 'react-icons/ai';
import { deleteProjectInterested, deleteProjectLike } from 'pages/project/projectSlice';
import { LikeProject } from 'pages/project/LikeProject';
import _ from 'lodash';
import { Tooltip } from 'antd';

export const AllPage = () => {
  const dispatch = useDispatch();
  const {
    mlMyProject,
    mlMyIdeas,
    cProject,
    cProjectLike,
    dProjectLike,
    cProjectInterested,
    dProjectInterested,
  } = useSelector(projectSelector);
  const { me } = useSelector(userSelector);
  const [loadMore, setLoadMore] = useState(8);
  const onLoadMore = () => {
    setLoadMore(loadMore + 8);
  };

  useEffect(() => {
    dispatch(MyProject());
  }, [dispatch, cProject, cProjectLike, dProjectLike, cProjectInterested, dProjectInterested]);

  useEffect(() => {
    dispatch(MyIdeas());
  }, [dispatch, cProject, cProjectLike, dProjectLike, cProjectInterested, dProjectInterested]);

  return (
    <section className="p-3 pl-5 space-y-1">
      <section>
        <h3 className="text-[18px] font-[600]">OnBoard</h3>
        <p className="text-sm -mt-2 text-gray-500">
          Projects that allow registration to participate.
        </p>
        <div className="grid grid-cols-4 gap-x-4 gap-y-16">
          {(mlMyProject?.myProject?.slice(0, loadMore) ?? [])?.map((item, index) => {
            const isMe = _.first(
              item?.projectLikes?.filter(projectLike => projectLike.userId === me?.data?.id)
            );

            const isMeInterested = _.first(
              item?.projectInterested?.filter(
                projectInterested => projectInterested.userId === me?.data?.id
              )
            );
            return (
              <div key={index}>
                <BoardItem
                  lever="100"
                  placement="bottomRight"
                  user
                  linkViewDescription={`/ProjectDescription?id=${item?.id}`}
                  linkViewDetail={`/ProjectDescription?id=${item?.id}`}
                  link={`/ProjectDescription?id=${item?.id}`}
                  imgPage={item?.attachments?.main_picture?.file}
                  nameProject={item?.name}
                  onClickComment
                  imgAvatar={item?.avatar_attachment?.file}
                >
                  <div className="relative">
                    <div className="flex items-center justify-between pb-3 text-sm text-[#164E63]">
                      <button className="flex items-center space-x-1 cursor-pointer px-3">
                        {isMe ? (
                          <AiFillLike
                            onClick={() => {
                              dispatch(deleteProjectLike(isMe?.id));
                            }}
                            className="text-2xl text-blue-600 cursor-pointer"
                          />
                        ) : (
                          <LikeProject likeProject idProject={item?.id} />
                        )}
                        {item?.projectLikes === null ? (
                          <span>0</span>
                        ) : (
                          <span>{item?.projectLikes?.length}</span>
                        )}
                      </button>
                      <button className="flex items-center space-x-1 cursor-pointer">
                        <AiOutlineMessage className="text-2xl stroke-[20px]" />
                        <span>2</span>
                      </button>
                      <button className="flex items-center space-x-1 cursor-pointer">
                        {isMeInterested ? (
                          <AiFillHeart
                            onClick={() => {
                              dispatch(deleteProjectInterested(isMeInterested?.id));
                            }}
                            className="text-2xl text-red-600 cursor-pointer"
                          />
                        ) : (
                          <LikeProject idProject={item?.id} />
                        )}
                        {item?.projectInterested === null ? (
                          <span>0</span>
                        ) : (
                          <span>{item?.projectInterested?.length}</span>
                        )}
                      </button>
                      <Tooltip
                        color="#ffffff"
                        placement="bottom"
                        title={<div className="text-black">Copy Link To Clipboard</div>}
                      >
                        <button className="pr-2 cursor-pointer">
                          <AiOutlineShareAlt className="text-2xl stroke-[20px]" />
                        </button>
                      </Tooltip>
                    </div>
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
                    {isMeInterested ? (
                      <button
                        onClick={() => {
                          dispatch(deleteProjectInterested(isMeInterested?.id));
                        }}
                        className="shadow-sm absolute right-4 bottom-3 bg-[#F97316] p-1.5 flex text-white items-center justify-center space-x-1.5 w-[90px] rounded-md"
                      >
                        <AiOutlineHeart className="text-xl stroke-[20px]" />
                        <span className="text-[11px]">Follow</span>
                      </button>
                    ) : (
                      <LikeProject follow={false} followName idProject={item?.id} />
                    )}
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
      <section>
        <h3 className="text-[18px] font-[600]">Ideas</h3>
        <div className="grid grid-cols-4 gap-x-4 gap-y-10">
          {(mlMyIdeas?.myIdeas?.slice(0, loadMore) ?? [])?.map((item, index) => {
            const isMe = _.first(
              item?.projectLikes?.filter(projectLike => projectLike.userId === me?.data?.id)
            );

            const isMeInterested = _.first(
              item?.projectInterested?.filter(
                projectInterested => projectInterested.userId === me?.data?.id
              )
            );
            return (
              <div key={index}>
                <BoardItem
                  lever="100"
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
                  imgAvatar={item?.avatar_attachment?.file}
                >
                  <div className="relative">
                    <div className="flex items-center justify-between pb-3 text-sm text-[#164E63]">
                      <button className="flex items-center space-x-1 cursor-pointer px-3">
                        {isMe ? (
                          <AiFillLike
                            onClick={() => {
                              dispatch(deleteProjectLike(isMe?.id));
                            }}
                            className="text-2xl text-blue-600 cursor-pointer"
                          />
                        ) : (
                          <LikeProject likeProject idProject={item?.id} />
                        )}
                        {item?.projectLikes === null ? (
                          <span>0</span>
                        ) : (
                          <span>{item?.projectLikes?.length}</span>
                        )}
                      </button>
                      <button className="flex items-center space-x-1 cursor-pointer">
                        <AiOutlineMessage className="text-2xl stroke-[20px]" />
                        <span>2</span>
                      </button>
                      <button className="flex items-center space-x-1 cursor-pointer">
                        {isMeInterested ? (
                          <AiFillHeart
                            onClick={() => {
                              dispatch(deleteProjectInterested(isMeInterested?.id));
                            }}
                            className="text-2xl text-red-600 cursor-pointer"
                          />
                        ) : (
                          <LikeProject idProject={item?.id} />
                        )}
                        {item?.projectInterested === null ? (
                          <span>0</span>
                        ) : (
                          <span>{item?.projectInterested?.length}</span>
                        )}
                      </button>
                      <Tooltip
                        color="#ffffff"
                        placement="bottom"
                        title={<div className="text-black">Copy Link To Clipboard</div>}
                      >
                        <button className="pr-2 cursor-pointer">
                          <AiOutlineShareAlt className="text-2xl stroke-[20px]" />
                        </button>
                      </Tooltip>
                    </div>
                  </div>
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
                      {isMeInterested ? (
                        <button
                          onClick={() => {
                            dispatch(deleteProjectInterested(isMeInterested?.id));
                          }}
                          className="shadow-sm bg-[#F97316] p-1.5 flex text-white items-center justify-center space-x-1.5 w-[90px] rounded-md"
                        >
                          <AiOutlineHeart className="text-xl stroke-[20px]" />
                          <span className="text-[11px]">Follow</span>
                        </button>
                      ) : (
                        <LikeProject follow={false} followName1 idProject={item?.id} />
                      )}
                    </div>
                  </div>
                </BoardItem>
              </div>
            );
          })}
        </div>
        {loadMore < mlMyIdeas?.myIdeas?.length && (
          <SeeMore py8 name="See more" onClick={onLoadMore} />
        )}
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
