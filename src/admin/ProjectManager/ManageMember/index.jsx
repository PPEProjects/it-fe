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
        <ClickEdit item={item} closeModal={closeModal} />
      </Modal>
    );
  };
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
              {userPosition.memberUser === null ? (
                <AddGoal
                  idPosition={userPosition?.memberUser?.id}
                  memberUserId={userPosition.id}
                  closeModal={closeModal}
                  board
                  position={userPosition?.position}
                  text={userPosition?.position}
                />
              ) : (
                <>
                  {userPosition.memberUser?.avatar_attachment?.thumb ? (
                    <div className="text-center">
                      <div className="group h-[40px] m-auto rounded-full relative  w-[40px] overflow-hidden bg-gray-300 mx-1">
                        <img
                          className="h-[40px] w-[40px] object-cover rounded-full cursor-pointer"
                          alt=""
                          src={userPosition.memberUser?.avatar_attachment?.thumb}
                        />
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
                      </div>
                      <div className="text-[10px]">{userPosition?.position}</div>
                    </div>
                  )}
                </>
              )}
            </>
          );
        })}
      </Tooltip>
    );
  };
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
        {/* <Tooltip placement="bottom " className="flex">
          {detailProjectsMember?.members?.map((userPosition, index) => {
            return (
              <>
                <div className="text-center mx-1">
                  <AddGoal
                    item={item?.project}
                    closeModal={closeModal}
                    board
                    position={userPosition?.position}
                    text={userPosition?.position}
                  />
                </div>
              </>
            );
          })}
        </Tooltip> */}

        {/* <Tooltip placement="bottom">
          <AddGoal
            item={item?.project}
            closeModal={closeModal}
            board
            position="leader"
            text="Leader"
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
