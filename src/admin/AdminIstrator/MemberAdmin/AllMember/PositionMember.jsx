import React from 'react';
import { MenuItemHover } from 'components/MenuItemHover';
import { useDispatch } from 'react-redux';
import { addAsPosition, deleteAsPosition } from '../../adminIstratorSlice';

export const PositionMember = ({ nameMenu, onClick, item, roles, addPositon }) => {
  const dispatch = useDispatch();
  console.log('ok');

  return (
    <MenuItemHover
      onClick={onClick}
      // onClick={() => {
      //   const values = { userId: item, roles: roles };
      //   addPositon ? dispatch(addAsPosition(values)) : dispatch(deleteAsPosition(values));
      // }}
      nameMenu={nameMenu}
    />
  );
};
