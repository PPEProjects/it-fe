import React, { useEffect, useState } from "react";
import { Input, Select } from "antd";

const { Option } = Select;
const CurrencyItem = ({ onChange, value }) => {
  const [price, setPrice] = useState(value);
  useEffect(() => {
    onChange(price);
  }, [price]);

  return (
    <div className="!mb-0 space-x-3 flex items-center w-full">
      <Input
        className="!rounded !w-[70%]"
        placeholder="$ 0.00"
        type='number'
        onChange={(e) => setPrice({ ...price, money: e.target.value })}
      />

      <Select
        className="!rounded !w-[30%]"
        defaultValue="USD"
        onChange={(val) => {
          return setPrice({ ...price, iso_code: val });
        }}
      >
        <Option value="USD">USD</Option>
        <Option value="VND">VND</Option>
      </Select>
    </div>
  );
};

export default CurrencyItem;
