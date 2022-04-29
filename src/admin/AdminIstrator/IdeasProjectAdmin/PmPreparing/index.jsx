import { BoardItem } from 'components/BoardItem';
import { TitleItem } from 'components/TitleItem';
import { MyProject, projectSelector } from 'pages/project/projectSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const PmPreparing = () => {
  const dispatch = useDispatch();
  const { mlMyProject, upStatusProject, cProject } = useSelector(projectSelector);
  const [loadMore, setLoadMore] = useState(3);
  const onLoadMore = () => {
    setLoadMore(loadMore + 3);
  };

  useEffect(() => {
    dispatch(MyProject());
  }, [dispatch, cProject, upStatusProject]);

  const dataPmProjects = (mlMyProject?.myProject ?? []).filter(item => item.status === 'preparing');

  return (
    <section>
      <div className="space-y-4 p-4 pb-5">
        <div className="space-y-4 p-4 pb-5">
          <TitleItem title="Pm preparing" number={dataPmProjects?.length} />
          <div className="grid grid-cols-3 gap-4 px-3">
            {(dataPmProjects ?? []).map((item, index) => {
              return (
                <div key={index}>
                  <BoardItem
                    item={item}
                    linkViewDescription={`/ProjectDescription?id=${item?.id}`}
                    linkViewDetail={`/ProjectDescription?id=${item?.id}`}
                    link={`/ProjectDescription?id=${item?.id}`}
                    imgPage={item?.attachments?.main_picture?.file}
                    imgAvatar={item?.avatar_attachment?.file}
                    nameProject={item?.name}
                    modalDraftProject
                    shadowNone
                    placement="bottomRight"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
