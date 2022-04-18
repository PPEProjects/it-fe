import { Button, Modal, Tooltip } from 'antd';
import { AddGoal } from 'components/AddGoal';
import React, { useState } from 'react';

import { HiUserAdd } from 'react-icons/hi';
import { ClickConfirm } from './ClickConfirm';

export const ClickEdit = ({ closeModal, item }) => {
  const [isModalClickConfirm, setIsModalClickClickConfirm] = useState(false);

  const showModalModalClickConfirm = () => {
    setIsModalClickClickConfirm(true);
  };
  const handleCancelClickConfirm = () => {
    setIsModalClickClickConfirm(false);
  };
  const renderModalClickConfirm = () => {
    return (
      <Modal
        className="!w-[800px]"
        visible={isModalClickConfirm}
        onCancel={handleCancelClickConfirm}
        footer={null}
      >
        <ClickConfirm />
      </Modal>
    );
  };
  return (
    <div>
      {renderModalClickConfirm()}
      <p className="text-lg font-semibold ">All Position</p>
      <p className="text-sm font-medium text-gray-500">
        All members participating in the project will be displayed here. You can add, remove, update
        each position.
      </p>
      <div className="flex space-x-2 mt-5">
        {/*
        <AddGoal done text="Leader" />
        <AddGoal running text="Tester" />
        <AddGoal board text="Qc" />
        <AddGoal board text="Dev" />
        <AddGoal board text="Pm" />
        <AddGoal board text="Techlead" /> */}
        {/* <Tooltip placement="bottom">*/}
        {/* <pre> {JSON.stringify(item.project, null, '')} </pre> */}
        <AddGoal
          item={item?.project}
          closeModal={closeModal}
          board
          position="leader"
          text="Leader"
        />
        <AddGoal item={item?.project} closeModal={closeModal} board position="qc" text="QC" />
        <AddGoal item={item?.project} closeModal={closeModal} board position="dev" text="Dev" />
        <AddGoal item={item?.project} closeModal={closeModal} board position="dev" text="Dev" />
        <AddGoal
          item={item?.project}
          closeModal={closeModal}
          board
          position="tester"
          text="Tester"
        />
        {/* </Tooltip> */}
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
