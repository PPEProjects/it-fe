import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { JoinPosition } from 'pages/home/AllPage/JoinPosition';

import { IoMdAdd } from 'react-icons/io';

export const BoardPosition = ({ text, board, running, imgAvatar, done }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const renderModalJoinPosition = () => {
    return (
      <Modal
        className="!w-[800px]"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <JoinPosition />
      </Modal>
    );
  };

  return (
    <section>
      <div className="text-center">
        {renderModalJoinPosition()}
        {board && (
          <Button onClick={showModal} type="dashed" shape="circle" className="!w-[32px] !h-[32px]">
            <div className="flex items-center justify-center">
              <IoMdAdd className="text-gray-400" />
            </div>
          </Button>
        )}
        {running && (
          <img
            className="h-[32px] w-[32px] object-cover rounded-full cursor-pointer"
            src={imgAvatar}
            alt=""
          />
        )}
        {done && (
          <img
            className="h-[32px] w-[32px] object-cover rounded-full cursor-pointer"
            src={imgAvatar}
            alt=""
          />
        )}
        <div className="text-[10px]">{text}</div>
      </div>
    </section>
  );
};
