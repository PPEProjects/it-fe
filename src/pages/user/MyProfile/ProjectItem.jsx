import React from 'react';

import { BiTask, BiTerminal } from 'react-icons/bi';
import { BsCalendar2 } from 'react-icons/bs';

export const ProjectItem = ({
  ideas,
  project,
  content,
  time,
  position,
  joinProject,
  category,
  children,
  imgPage,
}) => {
  return (
    <section>
      <img className="h-[215px] w-full object-cover rounded cursor-pointer" src={imgPage} alt="" />
      <h3 className="text-[24px] text-center text-gray-800">{project}</h3>
      {ideas && <p className="text-gray-600 -mt-2">{content}</p>}
      {joinProject && (
        <div>
          <p className="text-[#000000] flex pl-[1px] items-center space-x-1.5 -mt-1.5">
            <BiTask className="text-xl" />
            <span>Category: {category}</span>
          </p>
          <p className="text-[#000000] pl-0.5 flex items-center space-x-1.5 -mt-1.5">
            <BsCalendar2 className="stroke-1 text-[17px]" />
            <span>Time: {time}</span>
          </p>
          <p className="text-[#000000] flex items-center space-x-1.5 -mt-1.5">
            <BiTerminal className="text-xl" />
            <span>Position: {position}</span>
          </p>
        </div>
      )}
      <div className="-mt-2">{children}</div>
    </section>
  );
};
