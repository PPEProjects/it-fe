import { AddGoal } from 'components/AddGoal';
import React, { useEffect, useState } from 'react';
import { Button, Modal, Tooltip, Popconfirm } from 'antd';
import { ClickEdit } from './ClickEdit';
import { thumbImageBg } from 'services/convert';
import {
  detailProjectMember,
  memberProjectSelector,
  deleteProjectMemberId,
} from '../../../pages/memberProject/memberProjectSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RiDeleteBin6Line } from 'react-icons/ri';

export const ManageMember = ({ item, closeModal }) => {
  const dispatch = useDispatch();
  const { deProject } = useSelector(memberProjectSelector);
  const detailProjectsMember = deProject.detailProjectIds;
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
  const [idDelete, setIdDelete] = useState(null);
  const deleteProjectIdMember = id => {
    dispatch(deleteProjectMemberId(id));
  };
  useEffect(() => {
    dispatch(detailProjectMember(item?.project.id));
  }, [dispatch]);

  const renderDataPosition = () => {
    return (
      <Tooltip placement="bottom" className="flex">
        {detailProjectsMember?.members?.map((userPosition, index) => {
          return (
            <>
              {userPosition.memberUser?.avatar_attachment?.thumb ? (
                <div className="text-center">
                  <div className="group h-[40px] m-auto rounded-full relative  w-[40px] overflow-hidden bg-gray-300 mx-1">
                    <img
                      className="h-[40px] w-[40px] object-cover rounded-full cursor-pointer"
                      alt=""
                      src={userPosition.memberUser?.avatar_attachment?.thumb}
                    />
                    <Popconfirm
                      title={
                        <div>
                          Do you want to remove this user{' '}
                          <span className="font-bold"> {userPosition?.position}</span> from the
                          project?
                        </div>
                      }
                      okText="Yes"
                      onConfirm={() => {
                        deleteProjectIdMember(userPosition?.id);
                        setIdDelete(userPosition?.id);
                      }}
                      cancelText="No"
                    >
                      <div className="invisible rounded-md opacity-0 transition group-hover:!visible group-hover:opacity-100">
                        <button className="absolute top-0 left-0 cursor-pointer right-0 flex space-x-2 h-full bg-black !bg-opacity-40 items-center justify-center text-white">
                          <RiDeleteBin6Line className="text-lg" />
                        </button>
                      </div>
                    </Popconfirm>
                  </div>
                  <div className="text-[10px]">{userPosition?.position}</div>
                </div>
              ) : (
                <div className="text-center">
                  <div className="group h-[40px] m-auto rounded-full relative  w-[40px] overflow-hidden bg-gray-300 mx-1">
                    <img
                      className="h-[40px] w-[40px] object-cover rounded-full cursor-pointer"
                      src="/assets/images/smile-eye-default.png"
                      alt=""
                    />
                    <Popconfirm
                      title={
                        <div>
                          Do you want to remove this user{' '}
                          <span className="font-bold"> {userPosition?.position}</span> from the
                          project?
                        </div>
                      }
                      okText="Yes"
                      onConfirm={() => deleteProjectIdMember(userPosition?.id)}
                      cancelText="No"
                    >
                      <div className="invisible rounded-md opacity-0 transition group-hover:!visible group-hover:opacity-100">
                        <button className="absolute top-0 left-0 cursor-pointer right-0 flex space-x-2 h-full bg-black !bg-opacity-40 items-center justify-center text-white">
                          <RiDeleteBin6Line className="text-lg" />
                        </button>
                      </div>
                    </Popconfirm>
                  </div>
                  <div className="text-[10px]">{userPosition?.position}</div>
                </div>
              )}
            </>
          );
        })}
      </Tooltip>
    );
  };

  useEffect(() => {
    renderDataPosition();
    console.log('renderDataPosition');
  }, [idDelete]);

  return (
    <div>
      {renderModalClickEdit()}
      <p className="text-lg font-semibold ">Manage member</p>
      <p className="text-sm font-medium text-gray-500">
        All members participating in the project will be displayed here. You can add, remove, update
        each position.
      </p>
      <div className="flex space-x-2 mt-5">
        {renderDataPosition()}
        {/* <Tooltip placement="bottom">
          <AddGoal
            item={item?.project}
            closeModal={closeModal}
            board
            position="leader"
            text="Leader"
          />
        </Tooltip>
        <Tooltip placement="bottom">
          <AddGoal item={item?.project} closeModal={closeModal} position="qc" board text="QC" />
        </Tooltip>
        <Tooltip placement="bottom">
          <AddGoal item={item?.project} closeModal={closeModal} position="dev" board text="Dev" />
        </Tooltip>
        <Tooltip placement="bottom">
          <AddGoal item={item?.project} closeModal={closeModal} position="dev" board text="Dev" />
        </Tooltip>
        <Tooltip placement="bottom">
          <AddGoal
            item={item?.project}
            closeModal={closeModal}
            position="tester"
            board
            text="Tester"
          />
        </Tooltip> */}
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
