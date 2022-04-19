import classNames from 'classnames';
import React from 'react';

import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

export const Stars = ({ numberStartActive, containerClassName }) => {
  const totalStars = 10;
  const activeStars = numberStartActive;

  return (
    <div
      className={classNames(
        'flex items-center space-x-2 text-[17px] justify-center',
        containerClassName
      )}
    >
      {[...new Array(totalStars)].map((item, index) => {
        return index < activeStars ? (
          <AiFillStar className={classNames('text-[#ffc700]')} />
        ) : (
          <AiOutlineStar />
        );
      })}
    </div>
  );
};
