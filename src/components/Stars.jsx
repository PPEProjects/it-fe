import classNames from 'classnames';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFeedBack } from 'pages/feedBack/feedBackSlice';
import { feedBackSelector } from 'pages/feedBack/feedBackSlice';

import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

export const Stars = ({
  numberStartActive,
  containerClassName,
  userId,
  projectId,
  onClickStars,
}) => {
  const totalStars = 10;
  const activeStars = numberStartActive;
  const dispatch = useDispatch();
  const { upFeedBack } = useSelector(feedBackSelector);

  useEffect(() => {}, [upFeedBack]);

  return (
    <div
      className={classNames(
        'flex items-center space-x-2 text-[17px] justify-center',
        containerClassName
      )}
    >
      {[...new Array(totalStars)].map((item, index) => {
        return index <= activeStars ? (
          <>
            {onClickStars ? (
              <AiFillStar
                onClick={() => {
                  const values = { userId: userId, projectId: projectId, grate: index };
                  dispatch(updateFeedBack({ data: values }));
                }}
                className={classNames('text-[#ffc700] cursor-pointer')}
              />
            ) : (
              <AiFillStar className={classNames('text-[#ffc700] cursor-pointer')} />
            )}
          </>
        ) : (
          <>
            {onClickStars ? (
              <AiOutlineStar
                className="cursor-pointer"
                onClick={() => {
                  const values = { userId: userId, projectId: projectId, grate: index };
                  dispatch(updateFeedBack({ data: values }));
                }}
              />
            ) : (
              <AiOutlineStar className="cursor-pointer" />
            )}
          </>
        );
      })}
    </div>
  );
};
