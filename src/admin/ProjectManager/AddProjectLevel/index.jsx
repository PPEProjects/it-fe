import { Button } from 'antd';
import React, { useState } from 'react';
import { Radio } from 'antd';
import { RadioGroup } from '@headlessui/react';
import classNames from 'classnames';

const settings = [
  {
    name: 'Public',
    description: 'This project will be visible to public.',
  },
  {
    name: 'Protected ',
    description: 'Only project members can see.',
  },
  {
    name: 'Protected ',
    description: 'Only project members can see.',
  },
];
export const AddProjectLevel = () => {
  const [selected, setSelected] = useState(settings[0]);

  return (
    <div>
      <p className="text-lg font-semibold ">Add project levels</p>
      <p className="text-sm font-medium text-gray-500 -mt-4">
        Choose a level suitable for the project.
      </p>
      <RadioGroup value={selected} onChange={setSelected}>
        <RadioGroup.Label className="sr-only">Privacy setting</RadioGroup.Label>
        <div className="bg-white rounded-md -space-y-px">
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
                    <RadioGroup.Description
                      as="span"
                      className={classNames(
                        checked ? 'text-[#0369A1]' : 'text-gray-500',
                        'block text-sm'
                      )}
                    >
                      {setting.description}
                    </RadioGroup.Description>
                  </div>
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
      <div className="flex items-end justify-end mt-7">
        <Button className="!rounded-md !h-10 !Poppins" type="primary">
          Edit
        </Button>
      </div>
    </div>
  );
};
