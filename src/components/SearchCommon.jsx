import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

const onSearch = value => console.log(value);

export const SearchCommon = ({ placeholder, enterButton, prefix }) => {
  return (
    <div>
      <Search
        placeholder={placeholder}
        enterButton={enterButton}
        size="middle"
        prefix={prefix}
        onSearch={onSearch}
      />
    </div>
  );
};
