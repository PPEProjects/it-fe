import React from 'react';
import { Select, Button } from 'antd';
import { FormAssign } from './FormAssign';

import { HiOutlineUserGroup } from 'react-icons/hi';

export const AssignReviewer = () => {
  const dataAssign = [
    {
      nameAssign: 'July',
      goalAssign: 'Leader',
      imgAssign: 'https://i.pravatar.cc/100?img=2',
    },
    {
      nameAssign: 'July',
      goalAssign: 'Leader',
      imgAssign: 'https://i.pravatar.cc/100?img=2',
    },
    {
      nameAssign: 'July',
      goalAssign: 'Leader',
      imgAssign: 'https://i.pravatar.cc/100?img=2',
    },
    {
      nameAssign: 'July',
      goalAssign: 'Leader',
      imgAssign: 'https://i.pravatar.cc/100?img=2',
    },
    {
      nameAssign: 'July',
      goalAssign: 'Leader',
      imgAssign: 'https://i.pravatar.cc/100?img=2',
    },
    {
      nameAssign: 'July',
      goalAssign: 'Leader',
      imgAssign: 'https://i.pravatar.cc/100?img=2',
    },
  ];
  const { Option } = Select;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <div>
      <span className="flex items-center justify-center text-3xl text-[#9CA3AF]">
        <HiOutlineUserGroup className="!w-[40px] !h-[32px] stroke-0" />
      </span>
      <h4 className="text-lg text-center pt-2">Assign Reviewer</h4>
      <div className="w-80% flex py-6 ">
        <Select
          mode="multiple"
          style={{ width: '100%' }}
          placeholder="select"
          defaultValue={['china']}
          onChange={handleChange}
          optionLabelProp="label"
        >
          <Option value="china" label="China">
            <div className="demo-option-label-item">
              <span role="img" aria-label="China"></span>
            </div>
          </Option>
          <Option value="usa" label="USA">
            <div className="demo-option-label-item">
              <span role="img" aria-label="USA"></span>
            </div>
          </Option>
          <Option value="japan" label="Japan">
            <div className="demo-option-label-item">
              <span role="img" aria-label="Japan"></span>
            </div>
          </Option>
          <Option value="korea" label="Korea">
            <div className="demo-option-label-item">
              <span role="img" aria-label="Korea"></span>
            </div>
          </Option>
        </Select>

        <Button type="primary " className="pl-5">
          Primary Button
        </Button>
      </div>
      <p className="text-xs">RECOMMENDED TEAM MEMBERS</p>
      <div className="grid grid-cols-2 gap-3">
        {(dataAssign ?? []).map((item, index) => {
          return (
            <div key={index}>
              <FormAssign
                nameAssign={item?.nameAssign}
                goalAssign={item?.goalAssign}
                imgAssign={item?.imgAssign}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
