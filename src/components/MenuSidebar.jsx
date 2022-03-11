import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillCaretRight } from 'react-icons/ai';

export const MenuSidebar = ({ link, icon, label, iconCaretRight }) => {
  return (
    <ul>
      <NavLink to={link} activeClassName="bg-blue-100" className="w-full block py-3" exact>
        <li className="pl-[65px] pr-8">
          <p className="text-15 flex items-center space-x-2">
            {iconCaretRight && <AiFillCaretRight className="text-gray-400" />}
            {icon}
            <span>{label}</span>
          </p>
        </li>
      </NavLink>
    </ul>
  );
};
