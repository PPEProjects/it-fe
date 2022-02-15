import React from "react";

import { RiMessage2Fill } from "react-icons/ri";

export const CommentItem = ({ imgAvatar, nameUser, content }) => {
  return (
    <section className="relative">
      <span className="flex items-center space-x-2">
        <img
          className="h-10 w-10 object-cover rounded-full cursor-pointer"
          src={imgAvatar}
          alt=""
        />
        <div>
          <div className="text-xs">{nameUser}</div>
          <div className="text-[10px] text-gray-500">{content}</div>
        </div>
      </span>
      <div className="absolute bottom-0 left-7 w-4 h-4 flex items-center justify-center bg-white rounded-full">
        <RiMessage2Fill className="text-[#0E7490] text-[12px]" />
      </div>
    </section>
  );
};
