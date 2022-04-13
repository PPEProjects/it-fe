import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import classNames from 'classnames';
export const StepsEnum = ['Preparing', 'Onboard', 'Running', 'Done'];

export const StepsColumn = ({ current, iconDropdown }) => {
  const _current = StepsEnum.indexOf(current);
  const max_length = StepsEnum.length;

  return (
    <div className="border rounded p-3">
      <ul>
        {StepsEnum.map((step, index) => (
          <li
            key={step}
            className={classNames(
              'relative flex items-center justify-between',
              index !== max_length - 1 ? 'pb-10' : ''
            )}
          >
            <a
              href
              onClick={() => console.log('step', step)}
              className="flex items-center space-x-2"
            >
              <div
                className={classNames(
                  'step-circle z-10',
                  _current >= index ? 'bg-primary-500' : 'text-primary-500 bg-white'
                )}
              >
                {_current >= index ? (
                  <AiOutlineCheck className="w-5 h-5 text-white" aria-hidden="true" />
                ) : (
                  index
                )}
              </div>

              {index !== max_length - 1 ? (
                <div
                  className="-ml-px absolute mt-0.5 top-6 left-1.5 w-0.5 h-full bg-gray-300"
                  aria-hidden="true"
                />
              ) : null}
              <span className="font-medium text-gray-900 ml-1.5">{step}</span>
            </a>
            {index === max_length - 1 && <div>{iconDropdown}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
};
