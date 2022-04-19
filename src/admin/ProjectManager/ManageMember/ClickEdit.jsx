import { Button, Modal, Tooltip, Popconfirm } from 'antd';
import { AddGoal } from 'components/AddGoal';
import React, { useEffect, useState } from 'react';

import { HiUserAdd } from 'react-icons/hi';
import { ClickConfirm } from './ClickConfirm';
import { useDispatch, useSelector } from 'react-redux';
import { RiDeleteBin6Line } from 'react-icons/ri';
import {
  detailProjectMember,
  memberProjectSelector,
  deleteProjectMemberId,
} from '../../../pages/memberProject/memberProjectSlice';
export const ClickEdit = ({ closeModal, item, handleCancelClickEdit }) => {
  const dispatch = useDispatch();
  const { deProject } = useSelector(memberProjectSelector);
  const detailProjectsMember = deProject.detailProjectIds;

  const [idDelete, setIdDelete] = useState(null);
  const deleteProjectIdMember = id => {
    dispatch(deleteProjectMemberId(id));
  };
  useEffect(() => {
    dispatch(detailProjectMember(item?.project.id));
  }, [dispatch]);
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
        <ClickConfirm item={item} closeModal={handleCancelClickConfirm} />
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
        {/*
        <AddGoal done text="Leader" />
        <AddGoal running text="Tester" />
        <AddGoal board text="Qc" />
        <AddGoal board text="Dev" />
        <AddGoal board text="Pm" />
        <AddGoal board text="Techlead" /> */}
        {/* <Tooltip placement="bottom">*/}
        {/* <pre> {JSON.stringify(item.project, null, '')} </pre> */}
        {/* <AddGoal
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
        /> */}
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
