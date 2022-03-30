import React from 'react';
import { userSelector } from 'pages/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { createProjectLike, createProjectInterested } from 'pages/project/projectSlice';
import { getURLParams } from 'services';

import { AiOutlineLike, AiOutlineHeart } from 'react-icons/ai';

export const LikeProject = ({ likeProject }) => {
  const dispatch = useDispatch();
  const { me } = useSelector(userSelector);
  const { id } = getURLParams();

  return (
    <button
      className="!text-[#164E63] !border-none"
      onClick={() => {
        const values = { userId: me?.data?.id, projectId: id };
        likeProject
          ? dispatch(createProjectLike({ data: values }))
          : dispatch(createProjectInterested({ data: values }));
      }}
    >
      {likeProject ? (
        <AiOutlineLike className="text-2xl stroke-[20px]" />
      ) : (
        <AiOutlineHeart className="text-2xl stroke-[20px]" />
      )}
    </button>
  );
};
