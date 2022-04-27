import { Menu, Dropdown } from 'antd';
import React from 'react';
import { MenuItemHover } from 'components/MenuItemHover';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from 'pages/user/userSlice';
import { Stars } from 'components/Stars';

import { BsFillTelephoneFill, BsThreeDotsVertical } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';
import { addAsPosition, deleteAsPosition } from '../../adminIstratorSlice';
import { Link } from 'react-router-dom';

export const InformationMember = ({
  placement,
  nameMember,
  goadMember,
  emailMember,
  phoneMember,
  dropDown,
  icon,
  item,
  imgSrcAvatar,
  numberStartActive,
}) => {
  const dispatch = useDispatch();
  const { me } = useSelector(userSelector);
  const rolesIdeasReview = { ideas_review: 'ideas_review' };
  const rolesProjectReview = { project_review: 'project_review' };
  const rolesProjectManage = { project_manage: 'project_manage' };
  const rolesAdmin = { admin: 'admin' };

  const menu = item => {
    return (
      <Menu>
        <Link to={`/MyProfile?id=${item?.id}`}>
          <MenuItemHover nameMenu="View Profile" />
        </Link>
        {me?.data?.userAdvance?.roles?.includes(rolesAdmin?.admin) && (
          <>
            {item?.userAdvance?.roles?.includes(rolesAdmin?.admin) ? (
              <>
                <MenuItemHover disabled nameMenu="Add as admin" />
                <MenuItemHover
                  onClick={() => {
                    const values = { userId: item?.id, roles: 'admin' };
                    dispatch(deleteAsPosition(values));
                  }}
                  nameMenu="Remove as admin"
                />
              </>
            ) : (
              <MenuItemHover
                onClick={() => {
                  const values = { userId: item?.id, roles: 'admin' };
                  dispatch(addAsPosition(values));
                }}
                nameMenu="Add as admin"
              />
            )}
            {item?.userAdvance?.roles?.includes(rolesProjectManage?.project_manage) ? (
              <>
                <MenuItemHover disabled nameMenu="Add as project manager" />
                <MenuItemHover
                  onClick={() => {
                    const values = { userId: item?.id, roles: 'project_manage' };
                    dispatch(deleteAsPosition(values));
                  }}
                  nameMenu="Remove as  project manager"
                />
              </>
            ) : (
              <MenuItemHover
                onClick={() => {
                  const values = { userId: item?.id, roles: 'project_manage' };
                  dispatch(addAsPosition(values));
                }}
                nameMenu="Add as project manager"
              />
            )}

            {item?.userAdvance?.roles?.includes(rolesIdeasReview?.ideas_review) ? (
              <>
                <MenuItemHover disabled nameMenu="Add as idea reviewer" />
                <MenuItemHover
                  onClick={() => {
                    const values = { userId: item?.id, roles: 'ideas_review' };
                    dispatch(deleteAsPosition(values));
                  }}
                  nameMenu="Remove as idea reviewer"
                />
              </>
            ) : (
              <MenuItemHover
                onClick={() => {
                  const values = { userId: item?.id, roles: 'ideas_review' };
                  dispatch(addAsPosition(values));
                }}
                nameMenu="Add as idea reviewer"
              />
            )}

            {item?.userAdvance?.roles?.includes(rolesProjectReview?.project_review) ? (
              <>
                <MenuItemHover disabled nameMenu="Add as project reviewer" />
                <MenuItemHover
                  onClick={() => {
                    const values = { userId: item?.id, roles: 'project_review' };
                    dispatch(deleteAsPosition(values));
                  }}
                  nameMenu="Remove as project reviewer"
                />
              </>
            ) : (
              <MenuItemHover
                onClick={() => {
                  const values = { userId: item?.id, roles: 'project_review' };
                  dispatch(addAsPosition(values));
                }}
                nameMenu="Add as project reviewer"
              />
            )}
          </>
        )}
      </Menu>
    );
  };
  return (
    <section
      className={classNames('border rounded-lg', {
        'shadow-xs space-y-7': dropDown,
      })}
    >
      <div className="text-center text-sm min-h-[232px]">
        <p className="flex items-center justify-center">
          <img src={imgSrcAvatar} alt="" className="rounded-full h-[128px] w-[128px] mt-5" />
        </p>
        <h6>{nameMember}</h6>
        <h6 className="text-[#6B7280] -mt-1">{goadMember}</h6>
        {icon && (
          <p className="flex items-center justify-center space-x-1">
            <Stars containerClassName="!text-xl" numberStartActive={numberStartActive} />
          </p>
        )}
      </div>
      <div
        className={classNames('h-[94px]', {
          'flex items-center justify-between': dropDown,
        })}
      >
        <div
          className={classNames('w-full', {
            '!w-[80%]': dropDown,
          })}
        >
          <div className="border-b border-r border-t flex h-[47px] w-full pl-3 items-center space-x-2">
            <HiMail className="text-xl text-gray-400" />
            <span className="text-xs">{emailMember}</span>
          </div>

          <div className="border-r flex h-[47px] w-full pl-3 items-center space-x-2">
            <BsFillTelephoneFill className="text-xl text-gray-400" />
            <span className="text-xs">{phoneMember}</span>
          </div>
        </div>
        {dropDown && (
          <Dropdown overlay={menu(item)} placement={placement} trigger={['click']}>
            <div className="border-t hover:bg-gray-100 items-sm w-[20%] h-full flex items-center justify-center">
              <BsThreeDotsVertical className="!text-2xl text-gray-400" />
            </div>
          </Dropdown>
        )}
      </div>
    </section>
  );
};
