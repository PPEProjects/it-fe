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
  {
    name: 'pm preparing',
    href: '#',
    status: 'upcoming',
  },
  {
    name: 'onboard',
    href: '#',
    status: 'upcoming',
  },
  {
    name: 'running',
    href: '#',
    status: 'upcoming',
  },
  {
    name: 'done/stuck/in use',
    href: '#',
    status: 'upcoming',
  },
];
export const UpdateStatusProject = () => {
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
