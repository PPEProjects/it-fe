import React from 'react';
import classNames from 'classnames';
import { BsFillExclamationCircleFill } from 'react-icons/bs';
import { Button, Tooltip } from 'antd';
export const LabelItemProject = ({
  children,
  label,
  rules,
  width,
  information,
  flex,
  borderB = true,
}) => {
  const text = (
    <span className="text-[12px] font-medium">
      Purpose, implemention, parties involved, cost and benefits, and expected results
    </span>
  );

  const buttonWidth = 70;
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
            <Tooltip placement="bottom" title={text}>
              <span>
                <BsFillExclamationCircleFill className="text-gray-600" />
              </span>
            </Tooltip>
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
