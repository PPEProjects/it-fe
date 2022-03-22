import { BoardItem } from 'components/BoardItem';
import { TitleItem } from 'components/TitleItem';
import { MyIdeas, MyProject, projectSelector } from 'pages/project/projectSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const OnBoardIdeasProject = () => {
  const dispatch = useDispatch();
  const { mlMyProject, mlMyIdeas, cProject } = useSelector(projectSelector);
  const [loadMore, setLoadMore] = useState(3);
  const onLoadMore = () => {
    setLoadMore(loadMore + 3);
  };

  useEffect(() => {
    dispatch(MyProject());
  }, [dispatch, cProject]);

  useEffect(() => {
    dispatch(MyIdeas());
  }, [dispatch, cProject]);

  return (
    <section>
      <div className="space-y-4 border-b p-4 pb-5">
        <TitleItem title="OnBoard" number={mlMyIdeas?.myIdeas?.length} />
        <div className="grid grid-cols-3 gap-4 px-3">
          {(mlMyIdeas?.myIdeas ?? []).map((item, index) => {
            return (
              <div key={index}>
                <BoardItem
                  imgPage={item?.attachments?.main_picture?.file}
                  imgAvatar={item?.avatar_attachment?.file}
                  nameProject={item?.name}
                  shadowNone
                  clickNode
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
