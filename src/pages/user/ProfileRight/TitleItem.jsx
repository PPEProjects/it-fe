import classNames from 'classnames';
import React from 'react';

export const TitleItem = ({ title, numberTitle, children, minPadding }) => {
  return (
    <section>
      <div
        className={classNames('text-[#164E63] px-5 py-1 flex items-center space-x-2', {
          'p-0': minPadding,
        })}
      >
        <span>{title}</span>
        <span>{numberTitle}</span>
      </div>
      <div className="-mt-1">{children}</div>
    </section>
  );
};
