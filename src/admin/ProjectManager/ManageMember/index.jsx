import { AddGoal } from 'components/AddGoal';
import React, { useEffect, useState } from 'react';
import { Button, Modal, Tooltip } from 'antd';
import { ClickEdit } from './ClickEdit';
import {
  detailProjectMember,
  memberProjectSelector,
  UpdateProjectMembers,
} from 'pages/memberProject/memberProjectSlice';
import { useDispatch, useSelector } from 'react-redux';

export const ManageMember = ({ item, closeModal }) => {
  const dispatch = useDispatch();
  const { deProject, upMemberProject, upMemberProjectUserIds } = useSelector(memberProjectSelector);
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
        <ClickEdit
          item={item}
          closeModal={closeModal}
          onCancel={handleCancelClickEdit}
          showModalAllPosition={showModalModalClickEdit}
        />
      </Modal>
    );
  };

  useEffect(() => {
    renderDataPosition();
  });

  useEffect(() => {
    dispatch(detailProjectMember(item?.project.id));
  }, [dispatch, item, upMemberProject, upMemberProjectUserIds]);

  const renderDataPosition = () => {
    return (
      <Tooltip placement="bottom" className="grid grid-cols-6 gap-3">
        {detailProjectsMember?.members?.map((userPosition, index) => {
          return (
            <>
              {userPosition?.memberUser === null ? (
                <AddGoal
                  idPosition={userPosition?.memberUser?.id}
                  memberUserId={userPosition.id}
                  closeModal={closeModal}
                  board
                  item={item}
                  position={userPosition?.position}
                  text={userPosition?.position}
                />
              ) : (
                <>
                  {userPosition?.memberUser?.avatar_attachment?.thumb ? (
                    <div className="text-center px-1">
                      <div className="group h-[40px] mx-auto rounded-full relative  w-[40px] overflow-hidden bg-gray-300 px-1">
                        <img
                          className="h-[40px] w-[40px] object-cover rounded-full cursor-pointer"
                          alt=""
                          src={userPosition.memberUser?.avatar_attachment?.thumb}
                        />
                      </div>
                      {/* <div className="text-[10px]">{userPosition?.position}</div> */}
                      {userPosition?.position === 'project_manage' ? (
                        <div className="text-[10px]">pm</div>
                      ) : (
                        <>
                          {userPosition?.position === 'project_review' ? (
                            <div className="text-[10px]">pr</div>
                          ) : (
                            <div className="text-[10px]">{userPosition?.position}</div>
                          )}
                        </>
                      )}
                    </div>
                  ) : (
                    <div className="text-center px-1">
                      <div className="group h-[40px] mx-auto rounded-full relative  w-[40px] overflow-hidden bg-gray-300">
                        <img
                          className="h-[40px] w-[40px] object-cover rounded-full cursor-pointer"
                          src="/assets/images/smile-eye-default.png"
                          alt=""
                        />
                      </div>
                      {/* <div className="text-[10px]">{userPosition?.position}</div> */}
                      {userPosition?.position === 'project_manage' ? (
                        <div className="text-[10px]">pm</div>
                      ) : (
                        <>
                          {userPosition?.position === 'project_review' ? (
                            <div className="text-[10px]">pr</div>
                          ) : (
                            <div className="text-[10px]">{userPosition?.position}</div>
                          )}
                        </>
                      )}
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
      {/* <div className="flex space-x-2 mt-5"> */}
      <div className="flex mt-5 flex justify-center">{renderDataPosition()}</div>
      <div className="flex items-end justify-end mt-7">
        <Button
          className="!rounded-md !h-10 !Poppins"
          type="primary"
          // onClick={showModalModalClickEdit}
          onClick={() => {
            // closeModal();
            showModalModalClickEdit();
          }}
        >
          Edit
        </Button>
      </div>
    </div>
  );
};
