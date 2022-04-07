import React from 'react';
import classNames from 'classnames';

import { AiOutlineCheck } from 'react-icons/ai';
import { CgArrowUp } from 'react-icons/cg';

export const Steps_OLD = ({
  dataSteps,
  stepsRow,
  borderNone,
  stepsColumn,
  uppercase,
  stepsName,
  StepsNameColumn,
}) => {
  return (
    <div
      className={classNames('border rounded p-3', {
        'border-none': borderNone,
      })}
    >
      <nav aria-label="Progress">
        <ol
          role="list"
          className={classNames('!mb-0', {
            'flex justify-between': stepsRow,
          })}
        >
          {dataSteps.map((step, stepIdx) => (
            <li
              key={step.name}
              className={classNames(
                stepIdx !== dataSteps.length - 1 ? `${stepsRow ? '' : 'pb-10'}` : '',
                'relative'
              )}
            >
              {step.status === 'Preparing' ? (
                <div
                  className={classNames('flex items-center', {
                    'flex-col': StepsNameColumn,
                  })}
                >
                  {stepsColumn && (
                    <>
                      {stepIdx !== dataSteps.length - 1 ? (
                        <div
                          className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
                          aria-hidden="true"
                        />
                      ) : null}
                    </>
                  )}

                  <a
                    href="javascript:void(0)"
                    className="relative w-8 h-8 flex items-center justify-center bg-[#0369A1] rounded-full hover:bg-indigo-900"
                  >
                    <AiOutlineCheck className="w-5 h-5 text-white" aria-hidden="true" />
                  </a>
                  <div
                    className={classNames('ml-4 min-w-0 flex flex-col text-sm', {
                      '!ml-0': StepsNameColumn,
                    })}
                  >
                    <span
                      className={classNames('', {
                        'font-medium text-gray-900 text-center': stepsName,
                        'text-xs text-[#0369A1] font-semibold': stepsColumn,
                        'uppercase block': uppercase,
                        'w-16 text-center text-[8px] leading-4': StepsNameColumn,
                      })}
                    >
                      {step?.name}
                    </span>
                    <span className="text-gray-500">{step.description}</span>
                  </div>
                </div>
              ) : step.status === 'Onboard' ? (
                <div
                  className={classNames('flex items-center', {
                    'flex-col': StepsNameColumn,
                  })}
                >
                  {stepsColumn && (
                    <>
                      {stepIdx !== dataSteps.length - 1 ? (
                        <div
                          className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
                          aria-hidden="true"
                        />
                      ) : null}
                    </>
                  )}
                  {stepsRow && (
                    <a
                      href="#"
                      className="relative w-8 h-8 flex items-center justify-center bg-white border-2 border-[#0369A1] rounded-full"
                    >
                      <span className="text-sm font-[500] text-[#0369A1]">0{step?.key}</span>
                    </a>
                  )}
                  {stepsColumn && (
                    <a
                      href="#"
                      className="relative w-8 h-8 flex items-center justify-center bg-white border-2 border-[#0369A1] rounded-full"
                      aria-current="step"
                    >
                      <span className="h-2.5 w-2.5 bg-[#0369A1] rounded-full" aria-hidden="true" />
                    </a>
                  )}
                  <div
                    className={classNames('ml-4 min-w-0 flex flex-col text-sm', {
                      '!ml-0': StepsNameColumn,
                    })}
                  >
                    <span
                      className={classNames('', {
                        'font-medium text-[#0369A1] text-center': stepsName,
                        'text-xs text-[#0369A1] font-semibold': stepsColumn,
                        'uppercase block': uppercase,
                        'w-16 text-center text-[8px] leading-4': StepsNameColumn,
                      })}
                    >
                      {step?.name}
                    </span>
                    <span className="text-gray-500">{step.description}</span>
                  </div>
                </div>
              ) : step.status === 'Running' ? (
                <div
                  className={classNames('flex items-center', {
                    'flex-col': StepsNameColumn,
                  })}
                >
                  {stepsColumn && (
                    <>
                      {stepIdx !== dataSteps.length - 1 ? (
                        <div
                          className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
                          aria-hidden="true"
                        />
                      ) : null}
                    </>
                  )}
                  {stepsRow && (
                    <a
                      href="#"
                      className="relative w-8 h-8 flex items-center justify-center bg-white border-2 border-[#0369A1] rounded-full"
                    >
                      <span className="text-sm font-[500] text-[#0369A1]">0{step?.key}</span>
                    </a>
                  )}
                  {stepsColumn && (
                    <a
                      href="#"
                      className="relative w-8 h-8 flex items-center justify-center bg-red-600 border-2 border-red-600 rounded-full"
                      aria-current="step"
                    >
                      <CgArrowUp className="w-5 h-5 text-white" aria-hidden="true" />
                    </a>
                  )}
                  <div
                    className={classNames('ml-4 min-w-0 flex flex-col text-sm', {
                      '!ml-0': StepsNameColumn,
                    })}
                  >
                    <span
                      className={classNames('', {
                        'font-medium text-[#EF4444] text-center': stepsName,
                        'text-xs text-[#EF4444] font-semibold': stepsColumn,
                        'uppercase block': uppercase,
                        'w-16 text-center text-[8px] leading-4': StepsNameColumn,
                      })}
                    >
                      {step?.name}
                    </span>
                    <span className="text-gray-500">{step.description}</span>
                  </div>
                </div>
              ) : (
                <div
                  className={classNames('flex items-center', {
                    'flex-col': StepsNameColumn,
                  })}
                >
                  {stepsColumn && (
                    <>
                      {stepIdx !== dataSteps.length - 1 ? (
                        <div
                          className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
                          aria-hidden="true"
                        />
                      ) : null}
                    </>
                  )}
                  {stepsRow && (
                    <a
                      href="#"
                      className="relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full"
                    >
                      <span className="text-sm font-[500] text-gray-500">0{step?.key}</span>
                    </a>
                  )}
                  {stepsColumn && (
                    <a
                      href="#"
                      className="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400"
                    >
                      <span
                        className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"
                        aria-hidden="true"
                      />
                    </a>
                  )}

                  <div
                    className={classNames('ml-4 min-w-0 flex flex-col text-sm', {
                      '!ml-0': StepsNameColumn,
                    })}
                  >
                    <span
                      className={classNames('', {
                        'font-medium text-gray-500 text-center': stepsName,
                        'text-xs text-[#0369A1] font-semibold': stepsColumn,
                        'uppercase block': uppercase,
                        'w-16 text-center text-[8px] leading-4': StepsNameColumn,
                      })}
                    >
                      {step?.name}
                    </span>
                    <span className="text-gray-500">{step.description}</span>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};
