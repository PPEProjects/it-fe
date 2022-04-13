import React, { useEffect, useState } from 'react';
import { Select, Button, Input } from 'antd';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector, myListUser } from 'pages/user/userSlice';
import { thumbImage } from '../../../../services/convert';
import { GrFormAdd } from 'react-icons/gr';
import { UpsertProjectMembersUserIds } from '../../../../pages/memberProject/memberProjectSlice';

export const AssignReviewer = ({ item, closeModal }) => {
  const dispatch = useDispatch();
  const { mlUser } = useSelector(userSelector);
  useEffect(() => {
    dispatch(myListUser());
  }, [dispatch]);
  const OPTIONS = mlUser?.myListUser;
  const [selectedItems, setSelectedItems] = useState([]);
  const filteredOptions = OPTIONS.filter(item => !selectedItems.includes(item.id));
  const handlerChangeUser = item => {
    setSelectedItems([...selectedItems, item.id]);
  };
  const hrefLocation = window.location.pathname;
  return (
    <div>
      <span className="flex items-center justify-center text-3xl text-[#9CA3AF]">
        <HiOutlineUserGroup className="!w-[40px] !h-[32px] stroke-0" />
      </span>
      <h4 className="text-lg text-center pt-2">Assign Reviewer</h4>
      <div className="w-80% flex py-6">
        <Input value={selectedItems} />

        <Button
          type="primary"
          className="pl-5"
          // onClick={() => closeModal()}
          onClick={() => {
            const values = {
              data: {
                projectId: item.id,
                memberUserId: selectedItems,
                position: 'pr',
              },
            };
            dispatch(UpsertProjectMembersUserIds(values));
            closeModal();
          }}
        >
          Send invite
        </Button>
      </div>
      <p className="text-xs">RECOMMENDED TEAM MEMBERS</p>

      {hrefLocation === '/ProjectManager' ? (
        <div className="grid grid-cols-2 gap-3">
          {selectedItems.length !== 0 ? null : (
            <>
              {filteredOptions.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="h-[58px] border rounded-full px-3 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img
                          src={thumbImage(item?.avatar_attachment?.file)}
                          alt=""
                          className="rounded-full w-[40px] h-[40px]"
                        />
                        <div>
                          <h6 className="-mb-1">{item?.name}</h6>
                          <h7 className="-mt-5">{item?.userAdvance?.goal}</h7>
                        </div>
                      </div>
                      <GrFormAdd
                        onClick={() => handlerChangeUser(item)}
                        className="flex items-center justify-center text-3xl cursor-pointer"
                      />
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          {filteredOptions.map((item, index) => {
            return (
              <div key={index}>
                <div className="h-[58px] border rounded-full px-3 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={thumbImage(item?.avatar_attachment?.file)}
                      alt=""
                      className="rounded-full w-[40px] h-[40px]"
                    />
                    <div>
                      <h6 className="-mb-1">{item?.name}</h6>
                      <h7 className="-mt-5">{item?.userAdvance?.goal}</h7>
                    </div>
                  </div>
                  <GrFormAdd
                    onClick={() => handlerChangeUser(item)}
                    className="flex items-center justify-center text-3xl cursor-pointer"
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
