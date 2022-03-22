import React from 'react';
import { Button } from 'antd';
import { thumbImage } from 'services/convert';
import { setMemberProjectMerge } from 'pages/memberProject/memberProjectSlice';
import { useDispatch } from 'react-redux';

import { IoMdAdd } from 'react-icons/io';

export const BoardPosition = ({ text, board, running, imgUser, imgAvatar, done }) => {
  const dispatch = useDispatch();
  return (
    <section>
      <div className="text-center">
        {board && (
          <>
            {imgUser ? (
              <img
                className="h-[32px] w-[32px] object-cover rounded-full cursor-pointer"
                src={imgUser}
                alt=""
              />
            ) : (
              <Button
                onClick={() => dispatch(setMemberProjectMerge('cMemberProject', { isOpen: true }))}
                type="dashed"
                shape="circle"
                className="!w-[32px] !h-[32px]"
              >
                <div className="flex items-center justify-center">
                  <IoMdAdd className="text-gray-400" />
                </div>
              </Button>
            )}
          </>
        )}
        {running && (
          <img
            className="h-[32px] w-[32px] object-cover rounded-full cursor-pointer"
            src={thumbImage(imgAvatar)}
            alt=""
          />
        )}
        {done && (
          <img
            className="h-[32px] w-[32px] object-cover rounded-full cursor-pointer"
            src={thumbImage(imgAvatar)}
            alt=""
          />
        )}
        <div className="text-[10px]">{text}</div>
      </div>
    </section>
  );
};
