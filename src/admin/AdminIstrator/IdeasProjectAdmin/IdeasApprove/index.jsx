import { BoardItem } from 'components/BoardItem';
import { TitleItem } from 'components/TitleItem';
import { MyIdeas, MyProject, projectSelector } from 'pages/project/projectSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const IdeasApprove = () => {
  const dispatch = useDispatch();
  const { mlMyIdeas, cProject, upStatusProject } = useSelector(projectSelector);
  const [loadMore, setLoadMore] = useState(3);
  const onLoadMore = () => {
    setLoadMore(loadMore + 3);
  };

  useEffect(() => {
    dispatch(MyIdeas());
  }, [dispatch, cProject, upStatusProject]);

  const dataApproveIdeas = (mlMyIdeas?.myIdeas ?? []).filter(item => item.status === 'approve');

  return (
    <section>
      <div className="space-y-4 border-b p-4 pb-5">
        <div className="space-y-4 border-b p-4 pb-5">
          <TitleItem title="Approve" number={dataApproveIdeas?.length} />
          <div className="grid grid-cols-3 gap-4 px-3">
            {(dataApproveIdeas ?? []).map((item, index) => {
              return (
                <div key={index}>
                  <BoardItem
                    item={item}
                    imgPage={item?.attachments?.main_picture?.file}
                    imgAvatar={item?.avatar_attachment?.file}
                    nameProject={item?.name}
                    modalDraft
                    linkViewDescription={`/ProjectDescription?id=${item?.id}`}
                    linkViewDetail={`/ProjectDescription?id=${item?.id}`}
                    link={`/ProjectDescription?id=${item?.id}`}
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
