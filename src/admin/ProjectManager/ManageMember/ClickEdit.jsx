import { Button, Modal } from 'antd';
import { AddGoal } from 'components/AddGoal';
import React, { useState } from 'react';

import { HiUserAdd } from 'react-icons/hi';
export const ClickEdit = () => {
  const [isModalClickConfirm, setIsModalClickClickConfirm] = useState(false);

  const showModalModalClickConfirm = () => {
    setIsModalClickClickConfirm(true);
  };
  const handleCancelClickConfirm = () => {
    setIsModalClickClickConfirm(false);
  };
  const renderModalClickConfirm = () => {
    return (
      <Modal visible={isModalClickConfirm} onCancel={handleCancelClickConfirm} footer={null}>
        <ClickEdit />
      </Modal>
    );
  };
  return (
    <div>
      {renderModalClickConfirm()}
      <p className="text-lg font-semibold ">All Position</p>
      <p className="text-sm font-medium text-gray-500 -mt-4">
        All members participating in the project will be displayed here. You can add, remove, update
        each position.
      </p>
      <div className="flex space-x-2 mt-5">
        <AddGoal board text="Leader" />
        <AddGoal board text="Leader" />
        <AddGoal board text="Leader" />
        <AddGoal board text="Leader" />
        <AddGoal board text="Leader" />
        <AddGoal board text="Leader" />
        <HiUserAdd className="text-4xl text-gray-400" onClick={showModalModalClickConfirm} />
      </div>
      <div className="flex items-end justify-end mt-7">
        <Button className="!rounded-md !h-10 !Poppins" type="primary">
          Confirm
        </Button>
      </div>
    </div>
  );
};
