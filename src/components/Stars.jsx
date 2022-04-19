import classNames from 'classnames';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFeedBack, feedBackSelector } from 'pages/feedBack/feedBackSlice';

import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

export const Stars = ({ numberStartActive, containerClassName, userId, id }) => {
  const totalStars = 10;
  const activeStars = numberStartActive;
  const dispatch = useDispatch();

  return (
    <div
      className={classNames(
        'flex items-center space-x-2 text-[17px] justify-center',
        containerClassName
      )}
    >
      {[...new Array(totalStars)].map((item, index) => {
        return index < activeStars ? (
          <AiFillStar
            onClick={() => {
              const values = { userId: userId, id: id, grate: index };
              dispatch(updateFeedBack({ data: values }));
            }}
            className={classNames('text-[#ffc700]')}
          />
        ) : (
          <AiOutlineStar
            onClick={() => {
              const values = { userId: userId, id: id, grate: index };
              dispatch(updateFeedBack({ data: values }));
            }}
          />
        );
      })}
    </div>
  );
};
