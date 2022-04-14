import React from 'react';
import { Button } from 'antd';
import { StepsColumn } from 'components/StepsColumn';

export const StepsEnum = ['created', 'reviewing & improving', 'approve', 'close'];

export const UpdateStatusIdea = ({ item, closeModal }) => {
  return (
    <div className="space-y-3">
      <span className="text-lg font-semibold text-gray-800">Project Update</span>
      <div>
        <StepsColumn
          item={item}
          closeModal={closeModal}
          uppercase
          StepsEnum={StepsEnum}
          current={item.status}
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
