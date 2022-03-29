import React, { useEffect } from 'react';
import MasterLayout from 'layouts/MasterLayout';
import { LayoutAdmin } from 'layouts/LayoutAdmin';
import { TitleItem } from 'components/TitleItem';
import { BoardItem } from 'components/BoardItem';
import { useDispatch, useSelector } from 'react-redux';
import { projectSelector, MyProject } from 'pages/project/projectSlice';

export const MyProjects = () => {
  const dispatch = useDispatch();
  const { mlMyProject, cProject } = useSelector(projectSelector);

  useEffect(() => {
    dispatch(MyProject());
  }, [dispatch, cProject]);

  return (
    <div>
      <MasterLayout>
        <LayoutAdmin>
          <div className="p-4">
            <TitleItem title="My Project" number={mlMyProject?.myProject?.length} />
          </div>
          <div className="grid grid-cols-2 gap-4 p-4">
            {(mlMyProject?.myProject ?? []).map((item, index) => {
              return (
                <div key={index}>
                  <BoardItem
                    imgPage={item?.attachments?.main_picture?.file}
                    imgAvatar={item?.user?.avatar_attachment?.file}
                    nameProject={item?.name}
                    shadowNone
                    placement="bottomRight"
                  />
                </div>
              );
            })}
          </div>
        </LayoutAdmin>
      </MasterLayout>
      ;
    </div>
  );
};
