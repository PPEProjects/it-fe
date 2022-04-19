import React, { useState, useEffect } from 'react';
import { Table, Modal } from 'antd';
import { StatusManage } from './StatusManage';
import {
  detailMemberByIdProject,
  memberProjectSelector,
} from 'pages/memberProject/memberProjectSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Stars } from 'components/Stars';
import { thumbImage } from 'services/convert';
import { feedBackSelector } from 'pages/feedBack/feedBackSlice';

export const UpdateInformation = ({ item, closeModal, openModal }) => {
  const dispatch = useDispatch();
  const { deMemberByIdProject } = useSelector(memberProjectSelector);
  const [isModalEdit, setIsModalEdit] = useState(false);
  const [dataDetailMemberProject, setDataDetailMemberProject] = useState();
  const { upFeedBack } = useSelector(feedBackSelector);

  useEffect(() => {
    dispatch(detailMemberByIdProject(item?.project?.id));
  }, [dispatch, item, upFeedBack]);

  const columns = [
    {
      title: 'NAME',
      dataIndex: 'memberUser',
      key: 'memberUser',
      render: memberUser => {
        return (
          <div className="flex items-center space-x-2">
            <img
              src={thumbImage(memberUser?.avatar_attachment?.file)}
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <div className="">
              <h6>{memberUser?.name}</h6>
              <h6 className="-mt-3  text-gray-500">{memberUser?.email}</h6>
            </div>
          </div>
        );
      },
    },
    {
      title: () => {
        return <div className="text-center">RATING</div>;
      },
      dataIndex: 'userFeedback',
      key: 'userFeedback',
      render: userFeedback => {
        return <Stars containerClassName="!text-xl" numberStartActive={userFeedback?.grate} />;
      },
    },

    {
      title: 'FEEDBACK',
      dataIndex: 'userFeedback',
      key: 'userFeedback',
      render: userFeedback => {
        return (
          <span className="text-sm text-gray-500 font-medium overflow-hidden line-clamp-2 max-h-10">
            {userFeedback?.content}
          </span>
        );
      },
    },
    {
      title: 'POSITION',
      dataIndex: 'position',
      key: 'position',
      render: position => (
        <span className="text-sm font-[400] flex items-center justify-center text-gray-500">
          {position}
        </span>
      ),
    },

    {
      title: '',
      dataIndex: 'change',
      key: 'change',
      render: () => {
        return (
          <button className="text-blue-600" onClick={showModalEdit}>
            Edit
          </button>
        );
      },
    },
  ];
  const showModalEdit = () => {
    setIsModalEdit(true);
    closeModal();
  };
  const handelCancelModalEdit = () => {
    setIsModalEdit(false);
  };
  const renderModalEdit = () => {
    return (
      <div>
        <Modal
          className="!w-[1045px]"
          visible={isModalEdit}
          onCancel={handelCancelModalEdit}
          footer={null}
        >
          <StatusManage
            openModal={openModal}
            isCloseModal={handelCancelModalEdit}
            dataDetailMemberProject={dataDetailMemberProject}
          />
        </Modal>
      </div>
    );
  };

  return (
    <div>
      {renderModalEdit()}
      <h5 className="font-semibold text-lg pb-3">Review Members</h5>
      <div>
        <Table
          pagination={false}
          columns={columns}
          dataSource={deMemberByIdProject?.detailMemberByIdProject ?? []}
          className="border-2 rounded-lg"
          onRow={record => {
            return {
              onClick: () => {
                setDataDetailMemberProject(record);
              },
            };
          }}
        />
      </div>
    </div>
  );
};
