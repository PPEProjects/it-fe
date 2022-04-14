import React from 'react';
import { Button } from 'antd';
import { StepsColumn } from 'components/StepsColumn';

export const StepsEnum = [
  'created',
  'reviewing & improving',
  'approve',
  'pm preparing',
  'onboard',
  'running',
  'done',
  'stuck',
  'in use',
];

export const UpdateStatusProject = ({ item, closeModal }) => {
  return (
    <div className="space-y-3">
      <span className="text-lg font-semibold text-gray-800">Project Update</span>
      <div>
        <StepsColumn
          item={item}
          current={item.status}
          uppercase
          StepsEnum={StepsEnum}
          closeModal={closeModal}
        />
      </div>
      <div className="text-right">
        <Button type="primary" className="!rounded-lg !h-10">
          Confirm
        </Button>
      </div>
    </div>
  );
};
