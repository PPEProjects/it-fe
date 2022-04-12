import React from 'react';
import classNames from 'classnames';
import { AiOutlineCheck } from 'react-icons/ai';
import { updateMyProject } from 'pages/memberProject/memberProjectSlice';
import { useDispatch } from 'react-redux';

export const StepsEnum = ['Preparing', 'Onboard', 'Running', 'Done'];

/**
 * @param current { String }
 * @constructor
 */
export default function StepsView({ current, onClick, project }) {
  const _current = StepsEnum.indexOf(current);
  const dispatch = useDispatch();
  return (
    <div className="border rounded p-3">
      <ul className="flex items-center justify-evenly">
        {StepsEnum.map((step, index) => (
          <li key={step}>
            <a
              onClick={() => {
                dispatch(updateMyProject({ status: step }));
              }}
              href
              className="flex items-center justify-center"
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
              <span className="font-medium text-gray-900 ml-1.5">{step}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
