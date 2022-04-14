import { AddGoal } from 'components/AddGoal';
import React, { useState } from 'react';
import { Button, Modal, Tooltip } from 'antd';
import { ClickEdit } from './ClickEdit';

export const ManageMember = ({ item, closeModal }) => {
  // const { item } = props.item;
  const texts = <span>prompt text</span>;

  const [isModalClickEdit, setIsModalClickEdit] = useState(false);

  const showModalModalClickEdit = () => {
    setIsModalClickEdit(true);
  };
  const handleCancelClickEdit = () => {
    setIsModalClickEdit(false);
  };
  // console.log('items', item);
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
        <Tooltip placement="bottom">
          <AddGoal
            item={item?.project}
            closeModal={closeModal}
            board
            position="leader"
            text="Leader"
          />
          <div></div>
        </Tooltip>
        <Tooltip placement="bottom">
          <AddGoal item={item?.project} closeModal={closeModal} position="qc" board text="QC" />
          <div></div>
        </Tooltip>
        <Tooltip placement="bottom">
          <AddGoal item={item?.project} closeModal={closeModal} position="dev" board text="Dev" />
          <div></div>
        </Tooltip>
        <Tooltip placement="bottom">
          <AddGoal item={item?.project} closeModal={closeModal} position="dev" board text="Dev" />
          <div></div>
        </Tooltip>
        <Tooltip placement="bottom">
          <AddGoal
            item={item?.project}
            closeModal={closeModal}
            position="tester"
            board
            text="Tester"
          />
          <div></div>
        </Tooltip>
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
