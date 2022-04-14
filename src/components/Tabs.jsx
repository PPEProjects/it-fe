import React, { useState } from 'react';
import classNames from 'classnames';

export const Tabs = ({
  color,
  colorBorder,
  listTab,
  tabPane,
  className,
  borderTop = true,
  roundedTop = true,
  hasArrayContent,
  justifyBetween,
  children,
  menuClassNames,
  isSmallWidth,
  borderLeft,
  border,
  colorBg,
  TabsNameClassName,
}) => {
  const [openTab, setOpenTab] = useState(0);

  return (
    <>
      <div className={classNames('flex flex-wrap py-2 overflow-x-auto', {})}>
        <div
          className={classNames('w-full', {
            'border-t': borderTop,
            'rounded-t-md': roundedTop,
          })}
        >
          <div
            className={classNames(className, {
              'flex items-center': hasArrayContent,
              'justify-between': justifyBetween,
            })}
          >
            <div
              className={classNames(
                'menu-tabs flex list-none flex-row items-center overflow-x-auto',
                menuClassNames,
                {
                  'rounded-tr-md rounded-tl-md border-r border-l': border,
                  'space-x-5': isSmallWidth,
                  'rounded-tl-md border-l': borderLeft,
                }
              )}
            >
              {listTab.map((item, index) => (
                <div
                  key={index}
                  className={classNames('flex-auto text-center pl-4', TabsNameClassName)}
                >
                  <span
                    className={classNames(
                      'flex cursor-pointer items-center justify-center p-2.5 text-[15px] text-gray-500',
                      openTab === index
                        ? classNames('', {
                            'border-b-2 border-[#0369A1] bg-white text-[#6f838d] font-semibold':
                              colorBorder,
                            'bg-[#0369A1] rounded-md !text-white text-base': colorBg,
                          })
                        : classNames('', { 'bg-white': color }),
                      {
                        'border rounded-md mb-2 !p-2 shadow-md font-semibold !px-4': colorBg,
                      }
                    )}
                    onClick={() => {
                      setOpenTab(index);
                    }}
                  >
                    <span className="text-2xl text-gray-300">{item?.icon}</span>
                    <span>{item?.title}</span>
                  </span>
                </div>
              ))}
            </div>
            {children}
          </div>
          <div className="relative flex w-full min-w-0 flex-col break-words border-t">
            {tabPane.map((record, index) => (
              <div key={index} className={openTab === index ? 'block' : 'hidden'}>
                {record.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
