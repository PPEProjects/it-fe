import React from 'react';
import { Modal } from 'antd';
import { UpdateProject } from 'pages/user/MyProject/UpdateProject';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector, setUserMerge } from 'pages/user/userSlice';

export const ModalProject = () => {
  const { upProject, dataProject } = useSelector(userSelector);
  const dispatch = useDispatch();

  const renderModalUpdateProject = () => {
    return (
      <Modal
        className="!w-[1280px]"
        visible={upProject?.isOpen}
        onCancel={() => dispatch(setUserMerge('upProject', { isOpen: false }))}
        footer={null}
      >
        <UpdateProject updateMyProject={dataProject} />
      </Modal>
    );
  };
  return <div>{renderModalUpdateProject()}</div>;
};
