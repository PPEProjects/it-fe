import { Button } from 'antd';
import { Steps_OLD } from 'components/Steps_OLD';
import React from 'react';
const dataStepsColumn = [
  {
    name: 'created',
    href: '#',
    status: 'complete',
  },
  {
    name: 'reviewing & improving',
    href: '#',
    status: 'current',
  },
  {
    name: 'approve',
    href: '#',
    status: 'upcoming',
  },
];
export const UpdateStatusIdea = () => {
  return (
    <div>
      <span className="text-lg font-semibold text-gray-800">Project Idea Update</span>
      <div>
        <Steps_OLD stepsColumn uppercase stepsName borderNone dataSteps={dataStepsColumn} />
      </div>
      <div className="text-right">
        <Button type="primary" className="!rounded-lg">
          Confirm
        </Button>
      </div>
    </div>
  );
};
