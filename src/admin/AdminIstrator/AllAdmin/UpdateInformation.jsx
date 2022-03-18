import React, { useState } from 'react';
import { Table, Space, Modal } from 'antd';
import { StatusManage } from './StatusManage';

import { AiOutlineStar } from 'react-icons/ai';

const data = [
  {
    key: '1',
    name: 'Jhon',
    feedback: 'New York No. 1 Lake Park',
    positon: 'Dev',
  },
  {
    key: '2',
    name: 'Jim Green',
    feedback: 'London No. 1 Lake Park',
    positon: 'Dev',
  },
  {
    key: '3',
    name: 'Joe Black',
    feedback: 'Sidney No. 1 Lake Park',
    positon: 'Dev',
  },
  {
    key: '4',
    name: 'Joe Black',
    feedback: 'Sidney No. 1 Lake Park',
    positon: 'Dev',
  },
  {
    key: '5',
    name: 'Joe Black',
    feedback: 'Sidney No. 1 Lake Park',
    positon: 'Dev',
  },
  {
    key: '6',
    name: 'Joe Black',
    feedback: 'Sidney No. 1 Lake Park',
    positon: 'Dev',
  },
];
export const UpdateInformation = () => {
  const [isModalEdit, setIsModalEdit] = useState(false);

  const columns = [
    {
      title: 'NAME',
      dataIndex: 'name',
      key: 'name',
      render: name => (
        <div className="flex items-center space-x-2">
          <img src="https://i.pravatar.cc/100?img=2" alt="" className="w-10 h-10 rounded-full" />
          <div className="">
            <h6>{name}</h6>
            <h6 className="-mt-3  text-gray-500">jane.cooper@example.com</h6>
          </div>
        </div>
      ),
    },
    {
      title: 'RATING',
      dataIndex: 'rating',
      key: 'rating',
      render: rating => (
        <div className="flex items-center justify-center space-x-1 text-xl">
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
      ),
    },

    {
      title: 'FEEDBACK',
      dataIndex: 'feedback',
      key: 'feedback',
    },
    {
      title: 'POSITION',
      dataIndex: 'positon',
      key: 'positon',
      render: action => <span>{action}</span>,
    },

    {
      title: '',
      dataIndex: 'change',
      key: 'change',
      render: () => (
        <button className="text-blue-600" onClick={showModalEdit}>
          Edit
        </button>
      ),
    },
  ];
  const showModalEdit = () => {
    setIsModalEdit(true);
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
          <StatusManage />
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
          dataSource={data}
          className="border-2 rounded-lg "
        />
      </div>
    </div>
  );
};
