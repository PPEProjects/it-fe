import React from "react";

import { HiOutlineDotsHorizontal } from "react-icons/hi";
import {
  AiOutlineLike,
  AiOutlineMessage,
  AiOutlineHeart,
  AiOutlineShareAlt,
} from "react-icons/ai";

export const BoardItem = ({
  imgPage,
  imgAvatar,
  project,
  numberLike,
  numberComment,
  numberHeart,
}) => {
  return (
    <section>
      <img
        className="h-[215px] w-full object-cover rounded cursor-pointer"
        src={imgPage}
        alt=""
      />
      <div className="border-l border-r border-b rounded-b-md px-3">
        <div className="flex items-center justify-between py-2">
          <span className="flex items-center space-x-2 w-[60%]">
            <img
              className="h-10 w-10 object-cover rounded-full cursor-pointer"
              src={imgAvatar}
              alt=""
            />
            <span>{project}</span>
          </span>
          <span className="w-10 h-10 hover:border hover:bg-gray-50 rounded-full flex items-center justify-center cursor-pointer">
            <HiOutlineDotsHorizontal className="text-2xl text-gray-400" />
          </span>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <p className="flex items-center space-x-1 cursor-pointer">
            <AiOutlineLike className="text-xl" />
            <span>{numberLike}</span>
          </p>
          <p className="flex items-center space-x-1 cursor-pointer">
            <AiOutlineMessage className="text-xl" />
            <span>{numberComment}</span>
          </p>
          <p className="flex items-center space-x-1 cursor-pointer">
            <AiOutlineHeart className="text-xl" />
            <span>{numberHeart}</span>
          </p>
          <p className="pr-2 cursor-pointer">
            <AiOutlineShareAlt className="text-xl" />
          </p>
        </div>
      </div>
    </section>
  );
};
