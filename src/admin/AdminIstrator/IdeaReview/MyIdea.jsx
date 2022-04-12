import { LayoutAdmin } from 'layouts/LayoutAdmin';
import React, { useEffect } from 'react';
import MasterLayout from 'layouts/MasterLayout';
import { BoardItem } from 'components/BoardItem';
import { useDispatch, useSelector } from 'react-redux';
import { TitleItem } from '../AllAdmin/TitleItem';
import { projectSelector, MyIdeas } from 'pages/project/projectSlice';

export const MyIdea = () => {
  const dispatch = useDispatch();
  const { mlMyIdeas, cProject } = useSelector(projectSelector);

  useEffect(() => {
    dispatch(MyIdeas());
  }, [dispatch, cProject]);

  return (
    <MasterLayout>
      <LayoutAdmin>
        <div className="p-4">
          <TitleItem title="Idea Review" number={mlMyIdeas?.myIdeas?.length} />
        </div>
        <div className="grid grid-cols-2 gap-4 p-4">
          {(mlMyIdeas?.myIdeas ?? []).map((item, index) => {
            return (
              <div key={index}>
                <BoardItem
                  imgPage={item?.attachments?.main_picture?.file}
                  imgAvatar={item?.user?.avatar_attachment?.file}
                  nameProject={item?.name}
                  shadowNone
                  myIdea
                  placement="bottomRight"
                />
              </div>
            );
          })}
        </div>
      </LayoutAdmin>
    </MasterLayout>
  );
};
