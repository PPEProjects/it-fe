import { AddGoal } from 'components/AddGoal';
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { ClickEdit } from './ClickEdit';

export const ManageMember = () => {
  const [isModalClickEdit, setIsModalClickEdit] = useState(false);

  const showModalModalClickEdit = () => {
    setIsModalClickEdit(true);
  };
  const handleCancelClickEdit = () => {
    setIsModalClickEdit(false);
  };
  const renderModalClickEdit = () => {
    return (
      <Modal visible={isModalClickEdit} onCancel={handleCancelClickEdit} footer={null}>
        <ClickEdit />
      </Modal>
    );
  };
  return (
    <div>
      {renderModalClickEdit()}
      <p className="text-lg font-semibold ">Manage member</p>
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
      </div>
      <div className="flex items-end justify-end mt-7">
        <Button
          className="!rounded-md !h-10 !Poppins"
          type="primary"
          onClick={showModalModalClickEdit}
        >
          Edit
        </Button>
      </div>
    </div>
  );
};