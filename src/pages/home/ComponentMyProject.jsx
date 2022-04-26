import React, { useEffect, useState } from 'react';
import { BoardItem } from 'components/BoardItem';
import { SeeMore } from 'components/SeeMore';
import { BoardPosition } from 'pages/home/AllPage/BoardPosition';
import { useDispatch, useSelector } from 'react-redux';
import { projectSelector, MyProject } from 'pages/project/projectSlice';
import {
  AiFillHeart,
  AiFillLike,
  AiOutlineMessage,
  AiOutlineHeart,
  AiOutlineShareAlt,
} from 'react-icons/ai';
import { deleteProjectInterested, deleteProjectLike } from 'pages/project/projectSlice';
import _ from 'lodash';
import { userSelector } from 'pages/user/userSlice';
import { LikeProject } from 'pages/project/LikeProject';
import { Tooltip } from 'antd';
import classNames from 'classnames';
import UserPositionComp from 'components/UserPositioncomp';

export const ComponentMyProject = ({ containerClassName, status }) => {
  const dispatch = useDispatch();
  const {
    mlMyProject,
    cProject,
    cProjectLike,
    dProjectLike,
    cProjectInterested,
    dProjectInterested,
  } = useSelector(projectSelector);
  const [loadMore, setLoadMore] = useState(8);
  const onLoadMore = () => {
    setLoadMore(loadMore + 8);
  };
  useEffect(() => {
    dispatch(MyProject());
  }, [dispatch, cProject, cProjectLike, dProjectLike, cProjectInterested, dProjectInterested]);
  const { me } = useSelector(userSelector);

  const dataFilterProjects = (mlMyProject?.myProject ?? []).filter(item => item.status === status);

  return (
    <section className={classNames('', containerClassName)}>
      <h3 className="text-[18px] font-[600] capitalize">{status}</h3>

      <div className="grid grid-cols-4 gap-x-4 gap-y-16">
        {(dataFilterProjects?.slice(0, loadMore) ?? [])?.map((item, index) => {
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
                  {status === 'onboard' && (
                    //  <UserPositionComp detailProjects={item?.members} />
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
                  )}
                  {status === 'in use' && (
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
                  )}
                  {status === 'running' && (
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
                  )}
                  {status === 'done' && (
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
                  )}
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
      {loadMore < dataFilterProjects?.length && (
        <SeeMore py8 name="See more" onClick={onLoadMore} />
      )}
    </section>
  );
};
