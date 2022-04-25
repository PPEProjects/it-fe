import React from 'react';
import classNames from 'classnames';
import { AiOutlineCheck } from 'react-icons/ai';

/**
 * @param current { String }
 * @constructor
 */
export default function StepsView({ current, StepsEnum, flexCol, itemsCenter = true }) {
  const _current = StepsEnum.indexOf(current);
  return (
    <div className="border rounded p-3">
      <ul
        className={classNames('flex justify-evenly !mb-0', {
          'items-center': itemsCenter,
        })}
      >
        {StepsEnum.map((step, index) => (
          <li key={step}>
            <a
              href
              className={classNames('flex items-center justify-center', {
                'flex-col space-y-1': flexCol,
              })}
            >
              <span
                className={classNames(
                  'step-circle',
                  _current >= index ? 'bg-primary-500' : 'text-primary-500'
                )}
              >
                {_current >= index ? (
                  <AiOutlineCheck className="w-5 h-5 text-white" aria-hidden="true" />
                ) : (
                  index
                )}
              </span>
              <span
                className={classNames('font-medium text-gray-900 capitalize ml-1.5', {
                  'text-[8px] w-16 text-center': flexCol,
                })}
              >
                {step}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
