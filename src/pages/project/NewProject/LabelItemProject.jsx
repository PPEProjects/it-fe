import React from 'react';
import classNames from 'classnames';
import { BsFillExclamationCircleFill } from 'react-icons/bs';

export const LabelItemProject = ({
  children,
  label,
  rules,
  width,
  information,
  flex,
  borderB = true,
}) => {
  return (
    <section
      className={classNames('flex p-3', {
        'border-b': borderB,
      })}
    >
      <label className="w-1/3 text-sm text-gray-700 font-medium">
        <div className="flex items-center space-x-1.5">
          <span>{label} </span>
          {rules && <span className="text-[#EF4444] mt-1.5 text-base">*</span>}
          {information && (
            <span>
              <BsFillExclamationCircleFill className="text-gray-600" />
            </span>
          )}
        </div>
      </label>
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
