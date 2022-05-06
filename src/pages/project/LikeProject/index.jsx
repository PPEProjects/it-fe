import React from 'react';
import { userSelector } from 'pages/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { createProjectLike, createProjectInterested } from 'pages/project/projectSlice';
import { getURLParams } from 'services';

import { AiOutlineLike, AiOutlineHeart } from 'react-icons/ai';
import classNames from 'classnames';

export const LikeProject = ({ likeProject, idProject, followName, follow = true, followName1 }) => {
  const dispatch = useDispatch();
  const { me } = useSelector(userSelector);
  const { id } = getURLParams();

  return (
    <button
      className={classNames('!text-[#164E63] !border-none', {
        '!shadow-md absolute right-4 bottom-[11px] bg-white p-1.5 flex text-[#F97316] items-center justify-center space-x-1.5 w-[90px] rounded-md':
          followName,
      })}
      onClick={() => {
        const values = { userId: me?.data?.id, projectId: id || idProject };
        likeProject
          ? dispatch(createProjectLike({ data: values }))
          : dispatch(createProjectInterested({ data: values }));
      }}
    >
      {likeProject ? (
        <AiOutlineLike className="text-2xl stroke-[20px]" />
      ) : (
        <>
          {follow && <AiOutlineHeart className="text-2xl stroke-[20px]" />}
          {followName && (
            <>
              <AiOutlineHeart className="text-xl stroke-[20px] text-[#F97316]" />
              <span className="text-[11px] text-[#F97316]">Follow</span>
            </>
          )}
          {followName1 && (
            <button className="!shadow-md p-1.5 text-[#F97316] flex items-center justify-center space-x-1.5 w-[90px] rounded-md">
              <AiOutlineHeart className="text-xl stroke-[20px]" />
              <span className="text-[11px]">Follow</span>
            </button>
          )}
        </>
      )}
    </button>
  );
};
