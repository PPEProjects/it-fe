import React from 'react';
import { Button } from 'antd';
export const ChooseItem = nameButton => {
  return (
    <div className="rounder-lg">
      <Button className="bg-[#0369A1]" nameButton={nameButton}></Button>
    </div>
  );
};
