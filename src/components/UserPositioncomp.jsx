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

const UserPositionComp = ({ detailProjects, dataPostion }) => {
  const { upMemberProject } = useSelector(memberProjectSelector);
  const dispatch = useDispatch();
  const [dataPosition, setDataPosition] = useState('');
  const [dataLinkTest, setDataLinkTest] = useState('');

  const renderModalJoinPosition = () => {
    return (
      <Modal
        className="!w-[800px]"
        visible={upMemberProject?.isOpen}
        onCancel={() => dispatch(setMemberProjectMerge('upMemberProject', { isOpen: false }))}
        footer={null}
      >
        <JoinPosition dataPosition={dataPosition} dataLinkTest={dataLinkTest} />
      </Modal>
    );
  };

  return (
    <div>
      {renderModalJoinPosition()}
      <Tooltip placement="bottom" className="flex">
        {(detailProjects?.detailMemberByIdProject ?? []).map((userPosition, index) => {
          return (
            <>
              {userPosition?.memberUser === null ? (
                // <AddGoal
                //   idPosition={userPosition?.memberUser?.id}
                //   memberUserId={userPosition.id}
                //   // closeModal={closeModal}
                //   board
                //   position={userPosition?.position}
                //   text={userPosition?.position}
                // />
                <BoardPosition
                  userPosition={userPosition}
                  setDataPosition={setDataPosition}
                  setDataLinkTest={setDataLinkTest}
                  role={userPosition?.position}
                  board
                  text={userPosition?.position}
                />
              ) : (
                <>
                  {userPosition?.memberUser?.avatar_attachment?.thumb ? (
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
    </div>
  );
};

export default UserPositionComp;
