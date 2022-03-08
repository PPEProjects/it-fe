import React from 'react';
import { CommentItem } from './CommentItem';
import { Button } from 'antd';

export const TopComment = () => {
  return (
    <section>
      <p className="text-[18px]">Top Comment</p>
      <div className="space-y-2">
        <CommentItem
          time="6d ago"
          numberLike="6"
          iconClassName="!w-7 !rounded-md !h-7 !text-xl top-7"
          topComment
          containerClassName="space-y-1.5"
          imgAvatarClassName="!w-12 !h-12"
          nameUserClassName="pt-2 !text-[14px]"
          contentClassName="!text-[14px]"
          nameUser="Eduardo Benz"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus "
        />
        <CommentItem
          time="6d ago"
          numberLike="6"
          iconClassName="!w-7 !rounded-md !h-7 !text-xl top-7"
          topComment
          containerClassName="space-y-1.5"
          imgAvatarClassName="!w-12 !h-12"
          nameUserClassName="pt-2 !text-[14px]"
          contentClassName="!text-[14px]"
          nameUser="Eduardo Benz"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus "
        />
      </div>
      <div className="text-center">
        <Button className="!w-[245] !h-[34px] !text-gray-900 !font-[500] !rounded-lg">
          View all comment
        </Button>
      </div>
    </section>
  );
};
