import React, { useEffect } from 'react';
import MasterLayout from 'layouts/MasterLayout';
import { LayoutAdmin } from 'layouts/LayoutAdmin';
import { TitleItem } from 'components/TitleItem';
import { BoardItem } from 'components/BoardItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  projectSelector,
  MyProject,
  detailProjectMemberByPosition,
} from 'pages/project/projectSlice';

export const MyProjects = () => {
  const dispatch = useDispatch();
  const { mlMyProject, cProject, mlMyIdeaProject } = useSelector(projectSelector);

  // useEffect(() => {
  //   dispatch(MyProject());
  // }, [dispatch, cProject]);

  useEffect(() => {
    dispatch(detailProjectMemberByPosition('pr'));
  }, [dispatch]);

  const filterIdeas = (mlMyIdeaProject?.myIdeaProject ?? []).filter(
    item => item?.project?.type === 'project'
  );

  return (
    <div>
      <MasterLayout>
        <LayoutAdmin>
          <div className="p-4">
            <TitleItem title="My Project" number={filterIdeas?.length} />
          </div>
          <div className="grid grid-cols-2 gap-4 p-4">
            {(filterIdeas ?? []).map((item, index) => {
              return (
                <div key={index}>
                  <BoardItem
                    imgPage={item?.project?.attachments?.main_picture?.file}
                    imgAvatar={item?.project?.user?.avatar_attachment?.file}
                    nameProject={item?.project?.name}
                    shadowNone
                    linkViewDescription={`/ProjectDescription?id=${item?.id}`}
                    linkViewDetail={`/ProjectDescription?id=${item?.id}`}
                    link={`/ProjectDescription?id=${item?.id}`}
                    placement="bottomRight"
                  />
                </div>
              );
            })}
          </div>
        </LayoutAdmin>
      </MasterLayout>
      {/* <MasterLayout>
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
                    linkViewDescription={`/ProjectDescription?id=${item?.id}`}
                    linkViewDetail={`/ProjectDescription?id=${item?.id}`}
                    link={`/ProjectDescription?id=${item?.id}`}
                    placement="bottomRight"
                  />
                </div>
              );
            })}
          </div>
        </LayoutAdmin>
      </MasterLayout> */}
      ;
    </div>
  );
};
