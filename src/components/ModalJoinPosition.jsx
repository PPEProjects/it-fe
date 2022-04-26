import { BoardPosition } from 'pages/home/AllPage/BoardPosition';
import React, { useEffect } from 'react';
import { Modal, Tooltip } from 'antd';
import { JoinPosition } from 'pages/home/AllPage/JoinPosition';
import {
  setMemberProjectMerge,
  memberProjectSelector,
} from 'pages/memberProject/memberProjectSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

const ModalJoinPosition = () => {
  const { upMemberProject } = useSelector(memberProjectSelector);
  const dispatch = useDispatch();
  const [dataPosition, setDataPosition] = useState('');
  const [dataLinkTest, setDataLinkTest] = useState('');
  return (
    <div>
      <Modal
        className="!w-[800px]"
        visible={upMemberProject?.isOpen}
        onCancel={() => dispatch(setMemberProjectMerge('upMemberProject', { isOpen: false }))}
        footer={null}
      >
        <JoinPosition dataPosition={dataPosition} dataLinkTest={dataLinkTest} />
      </Modal>
    </div>
  );
};

export default ModalJoinPosition;
