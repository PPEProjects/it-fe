import React, { useState } from 'react';
import { thumbImage } from 'services/convert';
import { Button, Modal } from 'antd';
import { AssignReviewer } from 'admin/AdminIstrator/AllAdmin/AssignReviewer';

import { IoMdAdd } from 'react-icons/io';

export const AddGoal = ({
  board,
  running,
  imgAvatar,
  done,
  text,
  item,
  position,
  submitDataModal,
  memberUserId,
  idPosition,
}) => {
  const [isModalAddGoal, setIsModalAddGoal] = useState(false);
  const showModelAddGoal = () => {
    setIsModalAddGoal(true);
  };
  const handleOkAddGoal = () => {
    setIsModalAddGoal(false);
  };
  const handleCancelAddGoal = () => {
    setIsModalAddGoal(false);
  };
  const renderModalAddGoal = () => {
    return (
      <Modal
        visible={isModalAddGoal}
        onCancel={handleCancelAddGoal}
        onOk={handleOkAddGoal}
        footer={null}
      >
        <AssignReviewer
          role="Project Manage"
          item={item}
          type
          memberUserId={memberUserId}
          idPosition={idPosition}
          position={position}
          closeModal={handleOkAddGoal}
          submitDataModal={submitDataModal}
        />
      </Modal>
    );
  };

  return (
    <section>
      <div className="text-center mx-1">
        {renderModalAddGoal()}
        {board && (
          <Button
            onClick={showModelAddGoal}
            // onClick={() => console.log('item from me', item)}
            type="dashed"
            shape="circle"
            className="!w-[40px] !h-[40px]"
          >
            <div className="flex items-center justify-center">
              <IoMdAdd className="text-gray-400" />
            </div>
          </Button>
        )}
        {running && (
          <img
            className="h-[40px] w-[40px] object-cover rounded-full cursor-pointer"
            src={thumbImage(imgAvatar)}
            alt=""
          />
        )}
        {done && (
          <img
            className="h-[40px] w-[40px] object-cover rounded-full cursor-pointer"
            src={thumbImage(imgAvatar)}
            alt=""
          />
        )}
        <div className="text-[10px]">{text}</div>
      </div>
    </section>
  );
};
