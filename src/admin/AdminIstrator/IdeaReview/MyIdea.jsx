import { LayoutAdmin } from 'layouts/LayoutAdmin';
import React, { useEffect } from 'react';
import MasterLayout from 'layouts/MasterLayout';
import { BoardItem } from 'components/BoardItem';
import { useDispatch, useSelector } from 'react-redux';
import { TitleItem } from '../AllAdmin/TitleItem';
import {
  projectSelector,
  MyIdeas,
  detailProjectMemberByPosition,
} from 'pages/project/projectSlice';

export const MyIdea = () => {
  const dispatch = useDispatch();
  const { mlMyIdeas, cProject, mlMyIdeaProject } = useSelector(projectSelector);

  // useEffect(() => {
  //   dispatch(MyIdeas());
  // }, [dispatch, cProject]);
  console.log('mlMyIdeaProject', mlMyIdeaProject);

  useEffect(() => {
    dispatch(detailProjectMemberByPosition('pr'));
  }, [dispatch]);

  const filterIdeas = (mlMyIdeaProject?.myIdeaProject ?? []).filter(
    item => item?.project?.type === 'ideas'
  );

  return (
    <MasterLayout>
      <LayoutAdmin>
        <div className="p-4">
          <TitleItem title="Idea Review" number={filterIdeas?.length} />
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
    // <MasterLayout>
    //   <LayoutAdmin>
    //     <div className="p-4">
    //       <TitleItem title="Idea Review" number={mlMyIdeas?.myIdeas?.length} />
    //     </div>
    //     <div className="grid grid-cols-2 gap-4 p-4">
    //       {(mlMyIdeas?.myIdeas ?? []).map((item, index) => {
    //         return (
    //           <div key={index}>
    //             <BoardItem
    //               imgPage={item?.attachments?.main_picture?.file}
    //               imgAvatar={item?.user?.avatar_attachment?.file}
    //               nameProject={item?.name}
    //               shadowNone
    //               linkViewDescription={`/ProjectDescription?id=${item?.id}`}
    //               linkViewDetail={`/ProjectDescription?id=${item?.id}`}
    //               link={`/ProjectDescription?id=${item?.id}`}
    //               myIdea
    //               placement="bottomRight"
    //             />
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </LayoutAdmin>
    // </MasterLayout>
  );
};
