import React, { useState } from 'react';
import { Button } from 'antd';
import { StepsColumn } from 'components/StepsColumn';
import { RadioGroup } from '@headlessui/react';
import classNames from 'classnames';

export const StepsEnum = ['created', 'reviewing & improving', 'approve/close'];
const settings = [
  {
    name: 'Approve',
  },
  {
    name: 'Close',
  },
];
export const UpdateStatusIdea = () => {
  const [selected, setSelected] = useState(settings[0]);

  return (
    <div className="space-y-3">
      <span className="text-lg font-semibold text-gray-800">Project Idea Update</span>
      <div>
        <StepsColumn uppercase StepsEnum={StepsEnum} iconDropdown>
          <RadioGroup value={selected} onChange={setSelected}>
            <div className="bg-white pt-3 rounded-md -space-y-px">
              {settings.map((setting, settingIdx) => (
                <RadioGroup.Option
                  key={setting.name}
                  value={setting}
                  className={({ checked }) =>
                    classNames(
                      settingIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                      settingIdx === settings.length - 1 ? 'rounded-bl-md rounded-br-md' : '',
                      checked ? 'bg-indigo-50 border-indigo-200 z-10' : 'border-gray-200',
                      'relative border p-4 flex cursor-pointer focus:outline-none'
                    )
                  }
                >
                  {({ active, checked }) => (
                    <>
                      <span
                        className={classNames(
                          checked ? 'bg-[#0369A1] border-transparent' : 'bg-white border-gray-300',
                          active ? 'ring-2 ring-offset-2 ring-[#0369A1]' : '',
                          'h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center'
                        )}
                        aria-hidden="true"
                      >
                        <span className="rounded-full bg-white w-1.5 h-1.5" />
                      </span>
                      <div className="ml-3 flex flex-col">
                        <RadioGroup.Label
                          as="span"
                          className={classNames(
                            checked ? 'text-[#0369A1]' : 'text-gray-900',
                            'block text-sm font-medium'
                          )}
                        >
                          {setting.name}
                        </RadioGroup.Label>
                      </div>
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </StepsColumn>
      </div>
      <div className="text-right">
        <Button type="primary" className="!rounded-lg !h-10">
          Confirm
        </Button>
      </div>
    </div>
  );
};
