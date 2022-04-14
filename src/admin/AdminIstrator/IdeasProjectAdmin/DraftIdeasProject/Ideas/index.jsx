import { BoardItem } from 'components/BoardItem';
import { TitleItem } from 'components/TitleItem';
import { MyIdeas, MyProject, projectSelector } from 'pages/project/projectSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const Ideas = () => {
  const dispatch = useDispatch();
  const { mlMyIdeas, cProject, upStatusProject } = useSelector(projectSelector);
  const [loadMore, setLoadMore] = useState(3);
  const onLoadMore = () => {
    setLoadMore(loadMore + 3);
  };

  useEffect(() => {
    dispatch(MyIdeas());
  }, [dispatch, cProject, upStatusProject]);

  const dataCreatedIdeas = (mlMyIdeas?.myIdeas ?? []).filter(item => item.status === 'created');
  const dataReviewingIdeas = (mlMyIdeas?.myIdeas ?? []).filter(
    item => item.status === 'reviewing & improving'
  );
  const dataApproveIdeas = (mlMyIdeas?.myIdeas ?? []).filter(item => item.status === 'approve');
  const dataCloseIdeas = (mlMyIdeas?.myIdeas ?? []).filter(item => item.status === 'close');

  return (
    <section>
      <div className="space-y-4 border-b p-4 pb-5">
        <TitleItem title="Created" number={dataCreatedIdeas?.length} />
        <div className="grid grid-cols-3 gap-4 px-3">
          {(dataCreatedIdeas ?? []).map((item, index) => {
            return (
              <div key={index}>
                <BoardItem
                  item={item}
                  imgPage={item?.attachments?.main_picture?.file}
                  imgAvatar={item?.avatar_attachment?.file}
                  nameProject={item?.name}
                  modalDraft
                  shadowNone
                  placement="bottomRight"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="space-y-4 border-b p-4 pb-5">
        <TitleItem title="Reviewing & improving" number={dataReviewingIdeas?.length} />
        <div className="grid grid-cols-3 gap-4 px-3">
          {(dataReviewingIdeas ?? []).map((item, index) => {
            return (
              <div key={index}>
                <BoardItem
                  item={item}
                  imgPage={item?.attachments?.main_picture?.file}
                  imgAvatar={item?.avatar_attachment?.file}
                  nameProject={item?.name}
                  modalDraft
                  shadowNone
                  placement="bottomRight"
                />
              </div>
            );
          })}
        </div>
      </div>
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
                  shadowNone
                  placement="bottomRight"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="space-y-4 border-b p-4 pb-5">
        <TitleItem title="Close" number={dataCloseIdeas?.length} />
        <div className="grid grid-cols-3 gap-4 px-3">
          {(dataCloseIdeas ?? []).map((item, index) => {
            return (
              <div key={index}>
                <BoardItem
                  item={item}
                  imgPage={item?.attachments?.main_picture?.file}
                  imgAvatar={item?.avatar_attachment?.file}
                  nameProject={item?.name}
                  modalDraft
                  shadowNone
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
