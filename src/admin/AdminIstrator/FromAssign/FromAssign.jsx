import { BoardItem } from 'components/BoardItem';
import React from 'react';

export const FromAssign = () => {
  return (
    <div>
      <BoardItem imgAvatar="https://i.pravatar.cc/100?img=2" className="border-2">
        <span>nameUser</span>
        <span>content</span>
      </BoardItem>
    </div>
  );
};
