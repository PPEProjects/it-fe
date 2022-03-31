import React from 'react';
import { Button, Popconfirm, Tooltip } from 'antd';
import { thumbImage } from 'services/convert';
import { setMemberProjectMerge } from 'pages/memberProject/memberProjectSlice';
import { useDispatch } from 'react-redux';

import { IoMdAdd } from 'react-icons/io';
import { RiDeleteBin6Line } from 'react-icons/ri';

export const BoardPosition = ({
  text,
  board,
  running,
  imgAvatar,
  done,
  nameUser,
  onConfirm,
  onClick,
}) => {
  const texts = (
    <span className="text-[12px] font-medium">
      Lectus gravida pretium pulvinar consectetur leo in. Duis eu porttitor tincidunt est. Faucibus
      lobortis pellentesque leo, purus faucibus scelerisque nec purus. Consectetur lectus turpis
      nibh ut fermentum id. Sit odio hac urna, nullam rutrum pharetra mauris ultricies nam. Massa
      aliquam bibendum aliquam orci, turpis lorem ut. Augue viverra sed a in...
    </span>
  );
  const dispatch = useDispatch();
  return (
    <section>
      <div className="m-auto">
        {board && (
          <>
            <Button
              onClick={() => dispatch(setMemberProjectMerge('upMemberProject', { isOpen: true }))}
              type="dashed"
              shape="circle"
              className="!w-[32px] !h-[32px]"
            >
              <Tooltip placement="bottom" title={texts}>
                <div className="flex items-center justify-center">
                  <IoMdAdd className="text-gray-400" />
                </div>
              </Tooltip>
            </Button>
          </>
        )}
        {running && (
          <div className="group h-[32px] m-auto rounded-full relative  w-[32px] overflow-hidden bg-gray-300">
            <img
              className="h-[32px] w-[32px] object-cover rounded-full cursor-pointer"
              src={thumbImage(imgAvatar)}
              alt=""
            />
            <Popconfirm
              // icon={<QuestionCircleOutlined style={{color: "red"}}/>}
              title={
                <div>
                  Do you want to remove this user <span className="font-bold"> {nameUser}</span>{' '}
                  from the project?
                </div>
              }
              onConfirm={onConfirm}
              okText="Yes"
              cancelText="No"
            >
              <div className="invisible rounded-md opacity-0 transition group-hover:!visible group-hover:opacity-100">
                <button
                  onClick={onClick}
                  className="absolute top-0 left-0 cursor-pointer right-0 flex space-x-2 h-full bg-black !bg-opacity-40 items-center justify-center text-white"
                >
                  <RiDeleteBin6Line className="text-lg" />
                </button>
              </div>
            </Popconfirm>
          </div>
        )}
        {done && (
          <img
            className="h-[32px] w-[32px] object-cover rounded-full cursor-pointer"
            src={thumbImage(imgAvatar)}
            alt=""
          />
        )}
        <div className="text-[10px] text-center">{text}</div>
      </div>
    </section>
  );
};
