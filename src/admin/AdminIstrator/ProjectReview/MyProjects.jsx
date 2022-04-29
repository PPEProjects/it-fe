import React, { useEffect } from 'react';
import MasterLayout from 'layouts/MasterLayout';
import { LayoutAdmin } from 'layouts/LayoutAdmin';
import { TitleItem } from 'components/TitleItem';
import { BoardItem } from 'components/BoardItem';
import { useDispatch, useSelector } from 'react-redux';
import { projectSelector, detailProjectMemberByPosition } from 'pages/project/projectSlice';

export const MyProjects = () => {
  const dispatch = useDispatch();
  const { mlMyIdeaProject, upStatusProject } = useSelector(projectSelector);

  useEffect(() => {
    dispatch(detailProjectMemberByPosition('project_review'));
  }, [dispatch, upStatusProject]);

  const filterIdeas = (mlMyIdeaProject?.myIdeaProject ?? []).filter(
    item => item?.project?.type === 'project'
  );

  return (
    <div>
      <MasterLayout>
        <LayoutAdmin>
          <div className="p-4">
            <TitleItem title="Project Review" number={filterIdeas?.length} />
          </div>
          <div className="grid grid-cols-2 gap-4 p-4">
            {(filterIdeas ?? []).map((item, index) => {
              return (
                <div key={index}>
                  <BoardItem
                    approve
                    ReviewProject
                    item={item}
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
    </div>
  );
};
