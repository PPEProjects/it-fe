import React from 'react';
import { Button } from 'antd';
import { StepsColumn } from 'components/StepsColumn';

export const StepsEnum = ['preparing', 'onboard', 'running', 'done'];

export const UpdateProjectStatus = ({ item, closeModal, openModal }) => {
  return (
    <div className="space-y-3">
      <span className="text-lg font-semibold text-gray-800">Project Update</span>
      <div>
        <StepsColumn
          item={item?.project}
          // item={item?.project}
          closeModal={closeModal}
          dataStuck={item}
          uppercase
          StepsEnum={StepsEnum}
          current={item?.project?.status}
        />
      </div>
      {/* <div className="text-right">
        <Button type="primary" className="!rounded-lg !h-10">
          Confirm
        </Button>
      </div> */}
    </div>
  );
};
