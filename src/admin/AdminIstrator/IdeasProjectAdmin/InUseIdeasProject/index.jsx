// import { BoardItem } from 'components/BoardItem';
// import { TitleItem } from 'components/TitleItem';
// import { MyIdeas, MyProject, projectSelector } from 'pages/project/projectSlice';
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// export const InUseIdeasProject = () => {
//   const dispatch = useDispatch();
//   const { mlMyProject, mlMyIdeas, cProject } = useSelector(projectSelector);
//   const [loadMore, setLoadMore] = useState(3);
//   const onLoadMore = () => {
//     setLoadMore(loadMore + 3);
//   };

//   useEffect(() => {
//     dispatch(MyProject());
//   }, [dispatch, cProject]);

//   useEffect(() => {
//     dispatch(MyIdeas());
//   }, [dispatch, cProject]);

//   const dataFillterProjects = (mlMyProject?.myProject ?? []).filter(
//     item => item.status === 'in use'
//   );

//   return (
//     <section>
//       <div className="space-y-4 p-4 pb-5">
//         <TitleItem title="Project" number={dataFillterProjects?.length} />
//         <div className="grid grid-cols-3 gap-4 px-3">
//           {(dataFillterProjects ?? []).map((item, index) => {
//             return (
//               <div key={index}>
//                 <BoardItem
//                   imgPage={item?.attachments?.main_picture?.file}
//                   imgAvatar={item?.avatar_attachment?.file}
//                   nameProject={item?.name}
//                   shadowNone
//                   item={item}
//                   company
//                   linkViewDescription={`/ProjectDescription?id=${item?.id}`}
//                   linkViewDetail={`/ProjectDescription?id=${item?.id}`}
//                   link={`/ProjectDescription?id=${item?.id}`}
//                   placement="bottomRight"
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

import { BoardItem } from 'components/BoardItem';
import { TitleItem } from 'components/TitleItem';
import { MyIdeas, MyProject, projectSelector } from 'pages/project/projectSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { userSelector } from 'pages/user/userSlice';
import {
  AiFillHeart,
  AiFillLike,
  AiOutlineMessage,
  AiOutlineHeart,
  AiOutlineShareAlt,
} from 'react-icons/ai';
import { RiCommunityFill } from 'react-icons/ri';
import { LikeProject } from 'pages/project/LikeProject';
import { Tooltip } from 'antd';
import UserPositionComp from 'components/UserPositioncomp';
import { deleteProjectInterested, deleteProjectLike } from 'pages/project/projectSlice';

export const InUseIdeasProject = () => {
  const status = 'in use';
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
  const [loadMore, setLoadMore] = useState(3);
  const onLoadMore = () => {
    setLoadMore(loadMore + 3);
  };
  const { me } = useSelector(userSelector);

  useEffect(() => {
    dispatch(MyProject());
  }, [dispatch, cProject, cProjectLike, dProjectLike, cProjectInterested, dProjectInterested]);

  useEffect(() => {
    dispatch(MyIdeas());
  }, [dispatch, cProject]);

  const dataFillterProjects = (mlMyProject?.myProject ?? []).filter(
    item => item.status === 'in use'
  );

  return (
    <section>
      <div className="space-y-4 p-4 pb-5">
        {/* <pre> {JSON.stringify(dataFillterProjects, null, ' ')} </pre> */}
        <TitleItem title="Project" number={dataFillterProjects?.length} />
        <div className="grid grid-cols-3 gap-4 px-3">
          {(dataFillterProjects ?? []).map((item, index) => {
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
                  imgPage={item?.attachments?.main_picture?.file}
                  imgAvatar={item?.avatar_attachment?.file}
                  nameProject={item?.name}
                  shadowNone
                  item={item}
                  company
                  linkViewDescription={`/ProjectDescription?id=${item?.id}`}
                  linkViewDetail={`/ProjectDescription?id=${item?.id}`}
                  link={`/ProjectDescription?id=${item?.id}`}
                  placement="bottomRight"
                >
                  <div className="relative min-h-[155px]">
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
                    {(status === 'onboard' || status === 'running' || status === 'done') && (
                      <div className="grid grid-cols-7 gap-2 px-3">
                        <UserPositionComp detailProjects={item?.members} />
                      </div>
                    )}
                    {status === 'in use' && (
                      <div className="grid grid-cols-1 gap-2 px-3">
                        <div className="flex font-[500] text-[#164E63] space-x-1.5">
                          <RiCommunityFill className="text-xl" />
                          <span>
                            Company:
                            <span className="px-1">
                              {item?.companies ??
                                [].map(companies => {
                                  return { companies };
                                })}
                            </span>
                          </span>
                        </div>
                      </div>
                    )}

                    {isMeInterested ? (
                      <button
                        onClick={() => {
                          dispatch(deleteProjectInterested(isMeInterested?.id));
                        }}
                        className="!shadow-xl absolute right-4 bottom-3 bg-[#F97316] p-1.5 flex text-white items-center justify-center space-x-1.5 w-[90px] rounded-md"
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
      </div>
    </section>
  );
};
