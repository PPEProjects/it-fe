import { BoardItem } from 'components/BoardItem';
import { TitleItem } from 'components/TitleItem';
import { MyProject, projectSelector } from 'pages/project/projectSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const DoneIdeasProject = () => {
  const dispatch = useDispatch();
  const { mlMyProject, cProject } = useSelector(projectSelector);
  const [isLoad, setIsLoad] = useState(true);
  const [loadMore, setLoadMore] = useState(3);
  const onLoadMore = () => {
    setLoadMore(loadMore + 3);
  };
  const setOnLoad = () => {
    console.log('setOnLoad');
    setIsLoad(!isLoad);
  };

  useEffect(() => {
    dispatch(MyProject());
  }, [dispatch, cProject, isLoad]);

  const dataFillterProjects = (mlMyProject?.myProject ?? []).filter(item => item.status === 'done');

  return (
    <section>
      <div className="space-y-4 border-b p-4 pb-5">
        <TitleItem title="Project" number={dataFillterProjects?.length} />
        <div className="grid grid-cols-3 gap-4 px-3">
          {(dataFillterProjects ?? []).map((item, index) => {
            return (
              <div key={index}>
                <BoardItem
                  setOnLoad={setOnLoad}
                  item={item}
                  imgPage={item?.attachments?.main_picture?.file}
                  imgAvatar={item?.avatar_attachment?.file}
                  nameProject={item?.name}
                  linkViewDescription={`/ProjectDescription?id=${item?.id}`}
                  linkViewDetail={`/ProjectDescription?id=${item?.id}`}
                  link={`/ProjectDescription?id=${item?.id}`}
                  shadowNone
                  company
                  placement="bottomRight"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
