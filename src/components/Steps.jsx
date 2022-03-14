import React from 'react';
import classNames from 'classnames';

import { AiOutlineCheck } from 'react-icons/ai';

export const Steps = ({ dataSteps, stepsRow, stepsColumn }) => {
  return (
    <div className="border rounded p-3">
      <nav aria-label="Progress">
        <ol
          role="list"
          className={classNames('!mb-0', {
            'flex items-center': stepsRow,
          })}
        >
          {dataSteps.map((step, stepIdx) => (
            <li
              key={step.name}
              className={classNames(
                stepIdx !== dataSteps.length - 1 ? `${stepsRow ? 'pr-6 sm:pr-16' : 'pb-10'}` : '',
                'relative'
              )}
            >
              {step.status === 'complete' ? (
                <div className="flex items-center space-x-2">
                  {stepsColumn && (
                    <>
                      {stepIdx !== dataSteps.length - 1 ? (
                        <div
                          className="-ml-px absolute mt-0.5 top-4 left-6 w-0.5 h-full bg-[#0369A1]"
                          aria-hidden="true"
                        />
                      ) : null}
                    </>
                  )}

                  <a
                    href="#"
                    className="relative w-8 h-8 flex items-center justify-center bg-[#0369A1] rounded-full hover:bg-indigo-900"
                  >
                    <AiOutlineCheck className="w-5 h-5 text-white" aria-hidden="true" />
                  </a>
                  <div className="ml-4 min-w-0 flex flex-col">
                    <span
                      className={classNames('', {
                        'font-medium text-gray-900': stepsRow,
                      })}
                    >
                      {step?.name}
                    </span>
                    <span className="text-sm text-gray-500">{step.description}</span>
                  </div>
                </div>
              ) : step.status === 'current' ? (
                <div className="flex items-center space-x-2">
                  {stepsColumn && (
                    <>
                      {stepIdx !== dataSteps.length - 1 ? (
                        <div
                          className="-ml-px absolute mt-0.5 top-4 left-6 w-0.5 h-full bg-[#0369A1]"
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
                  <div className="ml-4 min-w-0 flex flex-col">
                    <span
                      className={classNames('', {
                        'font-medium text-[#0369A1]': stepsRow,
                      })}
                    >
                      {step?.name}
                    </span>
                    <span className="text-sm text-gray-500">{step.description}</span>
                  </div>
                </div>
              ) : (
                <div className="flex pl-[8px] items-center space-x-2">
                  {stepsColumn && (
                    <>
                      {stepIdx !== dataSteps.length - 1 ? (
                        <div
                          className="-ml-px absolute mt-0.5 top-4 left-6 w-0.5 h-full bg-[#0369A1]"
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

                  <div className="ml-4 min-w-0 flex flex-col">
                    <span
                      className={classNames('', {
                        'font-medium text-gray-500': stepsRow,
                      })}
                    >
                      {step?.name}
                    </span>
                    <span className="text-sm text-gray-500">{step.description}</span>
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
