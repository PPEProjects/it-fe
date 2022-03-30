import classNames from 'classnames';
import React from 'react';

export const StarRed = ({ name, star }) => {
  return (
    <div
      className={classNames('pb-1 ', {
        'space-x-1 flex items-center': star,
      })}
    >
      <span>{name}</span>
      {star && <span className="text-red-500 !mt-1">*</span>}
    </div>
  );
};
