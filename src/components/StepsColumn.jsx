import React, { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { BiChevronDown } from 'react-icons/bi';
import classNames from 'classnames';
import { updateStatusProject } from 'pages/project/projectSlice';
import { useDispatch } from 'react-redux';

export const StepsColumn = ({
  current,
  iconDropdown,
  children,
  StepsEnum,
  uppercase,
  item,
  closeModal,
}) => {
  const _current = StepsEnum.indexOf(current);
  const max_length = StepsEnum.length;
  const dispatch = useDispatch();
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="border rounded p-3">
      <ul className="space-y-3">
        {StepsEnum.map((step, index) => (
          <li
            key={step}
            className={classNames(
              'relative flex items-center justify-between',
              index !== max_length - 1 ? 'pb-10' : ''
            )}
          >
            <a
              onClick={() => {
                const values = { status: step, id: item?.id };
                dispatch(updateStatusProject({ data: values }));
                closeModal();
              }}
              href
              className="flex items-center text-gray-400 space-x-2"
            >
              <div
                className={classNames(
                  'step-circle z-10',
                  _current >= index ? 'bg-[#0369A1]' : 'text-[#0369A1] bg-white'
                )}
              >
                {_current >= index ? (
                  <AiOutlineCheck className="w-5 h-5 text-white" />
                ) : (
                  <span className="h-9 flex items-center">
                    <span
                      className={classNames(
                        'relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 rounded-full',
                        _current === index - 1 ? 'border-[#0369A1]' : 'border-gray-400'
                      )}
                    >
                      {_current === index - 1 && (
                        <span className="h-2.5 w-2.5 bg-[#0369A1] rounded-full" />
                      )}
                    </span>
                  </span>
                )}
              </div>

              {index !== max_length - 1 ? (
                <div className="-ml-px absolute mt-0.5 top-6 left-1.5 w-0.5 h-full bg-gray-300" />
              ) : null}
              <span
                className={classNames(
                  'font-medium ml-1.5',
                  _current >= index && 'text-gray-900',
                  _current === index - 1 && 'text-[#0369A1]',
                  {
                    uppercase: uppercase,
                  }
                )}
              >
                {step}
              </span>
            </a>
            {/* {iconDropdown && (
              <>
                {index === max_length - 1 && (
                  <div>
                    <BiChevronDown
                      onClick={() => setIsShow(!isShow)}
                      className={classNames(
                        'text-3xl text-gray-400 ease-in-out duration-500',
                        isShow ? 'rotate-180' : ''
                      )}
                    />
                  </div>
                )}
              </>
            )} */}
            <>
              {index === max_length - 1 && (
                <div>
                  <BiChevronDown
                    onClick={() => setIsShow(!isShow)}
                    className={classNames(
                      'text-3xl text-gray-400 ease-in-out duration-500',
                      isShow ? 'rotate-180' : ''
                    )}
                  />
                </div>
              )}
            </>
          </li>
        ))}
        {/* {isShow && <div>{children}</div>} */}
        {isShow && <div> Datvnt </div>}
      </ul>
    </div>
  );
};
