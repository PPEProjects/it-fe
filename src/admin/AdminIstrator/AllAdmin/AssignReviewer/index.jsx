import React, { useEffect, useState } from 'react';
import { Select, Button, Input } from 'antd';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector, myListUser } from 'pages/user/userSlice';
import { thumbImage } from '../../../../services/convert';
import { GrFormAdd } from 'react-icons/gr';
import {
  UpdateProjectMembers,
  UpsertProjectMembersUserIds,
  detailProjectMember,
  memberProjectSelector,
} from '../../../../pages/memberProject/memberProjectSlice';
import _ from 'lodash';

const { Option } = Select;

export const AssignReviewer = ({
  item,
  closeModal,
  handleCancelAddGoal,
  position,
  submitDataModal,
  handleCancelDraftIdeasProject,
  memberUserId,
  idPosition,
  type,
  role,
  itemMember,
}) => {
  const dispatch = useDispatch();
  const { mlUser } = useSelector(userSelector);
  const { deProject } = useSelector(memberProjectSelector);
  useEffect(() => {
    dispatch(myListUser());
  }, [dispatch]);
  const OPTIONS = mlUser?.myListUser;
  const [selectedItems, setSelectedItems] = useState([]);
  const filteredOptions = OPTIONS?.filter(item => !selectedItems?.includes(item.id));
  const handlerChangeUser = item => {
    setSelectedItems([...selectedItems, item?.id]);
  };

  useEffect(() => {
    const ids = _.map(item?.members ?? [], 'memberUserId');
    setSelectedItems(ids);
  }, [item]);

  const hrefLocation = window?.location?.pathname;

  return (
    <div>
      <span className="flex items-center justify-center text-3xl text-[#9CA3AF]">
        <HiOutlineUserGroup className="!w-[40px] !h-[32px] stroke-0" />
      </span>
      <h4 className="text-lg text-center pt-2">Assign {role} </h4>

      <pre> {JSON.stringify(item, null, ' ')} </pre>

      <div className="w-80% flex py-6">
        {/* {userValue} */}
        <Select
          mode="multiple"
          placeholder="Inserted are removed"
          value={selectedItems}
          style={{ width: '100%' }}
          onChange={setSelectedItems}
        >
          {OPTIONS?.map(item => (
            <Option value={item?.id}>{item?.name}</Option>
          ))}
        </Select>
        {type ? (
          <Button
            type="primary"
            className="pl-5"
            onClick={() => {
              dispatch(
                UpdateProjectMembers({
                  data: { id: memberUserId, memberUserId: selectedItems?.toString() },
                })
              );
              handleCancelDraftIdeasProject();
            }}
          >
            Send invite
          </Button>
        ) : (
          <Button
            type="primary"
            className="pl-5"
            onClick={() => {
              dispatch(
                UpsertProjectMembersUserIds({
                  data: { projectId: item?.id, memberUserId: selectedItems, position: position },
                })
              );
              handleCancelDraftIdeasProject();
            }}
          >
            Send invite
          </Button>
        )}
      </div>
      <p className="text-xs">RECOMMENDED TEAM MEMBERS</p>
      {/* {JSON.stringify(item, null, ' ')} */}

      {hrefLocation === '/ProjectManager' ? (
        <div className="grid grid-cols-2 gap-3">
          {selectedItems?.length !== 0 ? null : (
            <>
              {filteredOptions?.map((item, index) => {
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
          {filteredOptions?.map((item, index) => {
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
