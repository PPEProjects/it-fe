import React from 'react';
import classNames from 'classnames';

export const LabelItemProject = ({ children, label, width, flex }) => {
  return (
    <section className="flex border-b p-3">
      <label className="w-1/3 text-sm text-gray-700">{label}</label>
      <div
        className={classNames('w-2/3', {
          '!w-1/3': width,
          'flex space-x-0.5': flex,
        })}
      >
        {children}
      </div>
    </section>
  );
};
