import React, { useEffect, useState } from 'react';
import { Input, Select, Form } from 'antd';

const { Option } = Select;

export const CurrencyItem = ({ onChange, value, name_money, name_iso_code }) => {
  const [price, setPrice] = useState(value);
  const [form] = Form.useForm();

  useEffect(() => {
    onChange(price);
  }, [price, onChange]);

  return (
    <Form form={form}>
      <div className="!mb-0 space-x-3 flex items-center w-full">
        <Form.Item className="!mb-0 !w-[70%]" name={name_money}>
          <Input
            className="!rounded"
            placeholder="$ 0.00"
            type="number"
            onChange={e => setPrice({ ...price, money: e.target.value })}
          />
        </Form.Item>
        <Form.Item className="!mb-0 !w-[30%]" name={name_iso_code}>
          <Select
            className="!rounded "
            defaultValue="USD"
            onChange={val => {
              return setPrice({ ...price, iso_code: val });
            }}
          >
            <Option value="USD">USD</Option>
            <Option value="VND">VND</Option>
          </Select>
        </Form.Item>
      </div>
    </Form>
  );
};
