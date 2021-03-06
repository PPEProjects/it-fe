import React, { useEffect, useState } from 'react';
import { thumbImage } from 'services/convert';
import { Button, Modal } from 'antd';
import { AssignReviewer } from 'admin/AdminIstrator/AllAdmin/AssignReviewer';

import { IoMdAdd } from 'react-icons/io';
import {
  detailMemberByIdProject,
  memberProjectSelector,
} from 'pages/memberProject/memberProjectSlice';
import { useSelector, useDispatch } from 'react-redux';
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
  closeModal,
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
  const dispatch = useDispatch();
  const { deMemberByIdProject } = useSelector(memberProjectSelector);

  useEffect(() => {
    dispatch(detailMemberByIdProject(item?.project?.id));
  }, [item, dispatch]);

  // console.log('asdasdasdaaaaaaaaaaaaaaa,', item);

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
          item={deMemberByIdProject?.detailMemberByIdProject}
          type
          memberUserId={memberUserId}
          idPosition={idPosition}
          position={position}
          // handleCancelAddGoal={handleCancelAddGoal}
          // handercloseGoal={handleCancelAddGoal}
          handleOkAddGoal={handleOkAddGoal}
          handleCancelAddGoal={handleCancelAddGoal}
          closeModal={closeModal}
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
            onClick={() => {
              showModelAddGoal();
              closeModal();
            }}
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
