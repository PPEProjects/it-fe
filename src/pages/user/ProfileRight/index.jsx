import React from 'react';
import { thumbImageBg, thumbImage } from 'services/convert';
import { Popconfirm } from 'antd';
import { TitleItem } from './TitleItem';
import { userSelector } from 'pages/user/userSlice';
import { authLogout } from 'pages/auth/authsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Stars } from 'components/Stars';

import { AiOutlineStar, AiFillStar, AiOutlineSetting } from 'react-icons/ai';
import { HiOutlineLogout } from 'react-icons/hi';

export const ProfileRight = () => {
  const dispatch = useDispatch();
  const { me } = useSelector(userSelector);

  return (
    <section className="w-[284px] border rounded">
      <div className="relative">
        <img
          className="h-[76px] w-full rounded-t object-cover"
          alt=""
          src={thumbImageBg(me?.data?.avatar_attachment?.file)}
        />
        <div className="absolute left-0 top-5 right-0 flex items-center justify-center">
          <img
            className="h-[109px] w-[109px] rounded-full object-cover"
            alt=""
            src={thumbImage(me?.data?.avatar_attachment?.file)}
          />
        </div>
      </div>
      <div className="text-center pt-12">
        <p className="text-[#0E7490] font-bold text-[24px]">{me?.data?.name}</p>
        <p className="text-[#06B6D4] italic -mt-7">{me?.data?.userAdvance?.goal}</p>
        <Stars containerClassName="-mt-4 px-6" numberStartActive={4} />
      </div>
      <div className="pb-8 border-b">
        <TitleItem title="Self Ideas/Projects:" numberTitle={me?.data?.selfProject?.length}>
          {(me?.data?.selfProject ?? []).map((item, index) => {
            return (
              <div key={index} className="text-[#164E63] pl-8">
                + {item?.name}
              </div>
            );
          })}
        </TitleItem>
        <TitleItem title="Joined Projects:" numberTitle={me?.data?.joinProject?.length}>
          {(me?.data?.joinProject ?? []).map((item, index) => {
            return (
              <div key={index} className="text-[#164E63] pl-8">
                + {item?.project?.name}
              </div>
            );
          })}
        </TitleItem>
        {/* <TitleItem title="Language:" numberTitle={(me?.data?.userAdvance?.language).join()} /> */}
        <TitleItem title="All positions:" numberTitle={me?.data?.allPosition} />
      </div>
      <Link to={`/MyProfile?id=${me?.data?.id}`}>
        <div className="p-2.5 text-[14px] text-[#164E63] border-b text-center">My Profile</div>
      </Link>
      <div className="flex items-center p-2.5 justify-between">
        <Link to={`/Account?id=${me?.data?.id}`}>
          <span className="text-12 text-gray-500 flex items-center space-x-2">
            <AiOutlineSetting className="text-[17px]" />
            <span>Setting</span>
          </span>
        </Link>
        <Popconfirm
          title="Do you want to logout?"
          onConfirm={() => dispatch(authLogout())}
          okText="Yes"
          cancelText="No"
        >
          <span className="text-12 cursor-pointer text-gray-500 flex items-center space-x-2">
            <HiOutlineLogout className="text-[17px]" />
            <span>Log out</span>
          </span>
        </Popconfirm>
      </div>
    </section>
  );
};
