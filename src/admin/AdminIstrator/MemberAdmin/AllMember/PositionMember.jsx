import React from 'react';
import { MenuItemHover } from 'components/MenuItemHover';

export const PositionMember = ({ nameMenu, onClick }) => {
  return <MenuItemHover onClick={onClick} nameMenu={nameMenu} />;
};
