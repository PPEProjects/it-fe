import React from 'react';
import classNames from 'classnames';
import { thumbImage } from 'services/convert';

import { RiMessage2Fill } from 'react-icons/ri';
import { HiReply } from 'react-icons/hi';
import { AiOutlineLike } from 'react-icons/ai';

export const CommentItem = ({
  imgAvatar,
  imgAvatarClassName,
  nameUserClassName,
  nameUser,
  content,
  contentClassName,
  itemsCenter,
  topComment,
  containerClassName,
  iconClassName,
  numberLike,
  time,
}) => {
  return (
    <section className="relative">
      <div
        className={classNames('flex space-x-2', {
          'items-center': itemsCenter,
        })}
      >
        <img
          className={classNames(
            'object-cover rounded-full cursor-pointer w-10 h-10',
            imgAvatarClassName
          )}
          src={thumbImage(imgAvatar)}
          alt=""
        />
        <div className={classNames('', containerClassName)}>
          <div className={classNames('text-xs text-gray-900 font-medium', nameUserClassName)}>
            {nameUser}
          </div>
          {topComment && <div className="text-[14px] text-gray-500">Commented {time}</div>}
          <div className={classNames('text-[10px] text-gray-500', contentClassName)}>{content}</div>
          {topComment && (
            <div className="text-[14px] pt-1 text-gray-600 flex items-center justify-end space-x-6">
              <p className="flex items-center space-x-1 cursor-pointer">
                <AiOutlineLike className="text-2xl stroke-[20px]" />
                <span>{numberLike}</span>
              </p>
              <p>
                <HiReply className="text-2xl" />
              </p>
            </div>
          )}
        </div>
      </div>
      <div
        className={classNames(
          'absolute bottom-0 text-[12px] text-[#0E7490] left-7 w-4 h-4 flex items-center justify-center bg-white rounded-full',
          iconClassName
        )}
      >
        <RiMessage2Fill />
      </div>
    </section>
  );
};
