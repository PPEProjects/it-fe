import { BoardItem } from 'components/BoardItem';
import { TitleItem } from 'components/TitleItem';
import { MyIdeas, MyProject, projectSelector } from 'pages/project/projectSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const Project = () => {
  const dispatch = useDispatch();
  const { mlMyProject, upStatusProject, cProject } = useSelector(projectSelector);
  const [loadMore, setLoadMore] = useState(3);
  const onLoadMore = () => {
    setLoadMore(loadMore + 3);
  };

  useEffect(() => {
    dispatch(MyProject());
  }, [dispatch, cProject, upStatusProject]);

  const dataCreatedProjects = (mlMyProject?.myProject ?? []).filter(
    item => item.status === 'created'
  );
  const dataReviewingProjects = (mlMyProject?.myProject ?? []).filter(
    item => item.status === 'reviewing & improving'
  );
  const dataApproveProjects = (mlMyProject?.myProject ?? []).filter(
    item => item.status === 'approve'
  );
  const dataPmProjects = (mlMyProject?.myProject ?? []).filter(item => item.status === 'preparing');
  const dataOnboardProjects = (mlMyProject?.myProject ?? []).filter(
    item => item.status === 'onboard'
  );
  const dataRunningProjects = (mlMyProject?.myProject ?? []).filter(
    item => item.status === 'running'
  );
  const dataDoneProjects = (mlMyProject?.myProject ?? []).filter(item => item.status === 'done');
  const dataStuckProjects = (mlMyProject?.myProject ?? []).filter(item => item.status === 'stuck');
  const dataUseProjects = (mlMyProject?.myProject ?? []).filter(item => item.status === 'in use');

  return (
    <section>
      <div className="space-y-4 p-4 pb-5">
        <TitleItem title="Created" number={dataCreatedProjects?.length} />
        <div className="grid grid-cols-3 gap-4 px-3">
          {(dataCreatedProjects ?? []).map((item, index) => {
            return (
              <div key={index}>
                <BoardItem
                  approve
                  item={item}
                  imgPage={item?.attachments?.main_picture?.file}
                  imgAvatar={item?.avatar_attachment?.file}
                  nameProject={item?.name}
                  modalDraftProject
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
      </div>
      <div className="space-y-4 p-4 pb-5">
        <TitleItem title="Reviewing & improving" number={dataReviewingProjects?.length} />
        <div className="grid grid-cols-3 gap-4 px-3">
          {(dataReviewingProjects ?? []).map((item, index) => {
            return (
              <div key={index}>
                <BoardItem
                  approve
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
      <div className="space-y-4 p-4 pb-5">
        <TitleItem title="Approve" number={dataApproveProjects?.length} />
        <div className="grid grid-cols-3 gap-4 px-3">
          {(dataApproveProjects ?? []).map((item, index) => {
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
      {/* <div className="space-y-4 p-4 pb-5">
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
      </div> */}
      {/* <div className="space-y-4 p-4 pb-5">
        <TitleItem title="Onboard" number={dataOnboardProjects?.length} />
        <div className="grid grid-cols-3 gap-4 px-3">
          {(dataOnboardProjects ?? []).map((item, index) => {
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
      </div> */}
      {/* <div className="space-y-4 p-4 pb-5">
        <TitleItem title="Running" number={dataRunningProjects?.length} />
        <div className="grid grid-cols-3 gap-4 px-3">
          {(dataRunningProjects ?? []).map((item, index) => {
            return (
              <div key={index}>
                <BoardItem
                  item={item}
                  imgPage={item?.attachments?.main_picture?.file}
                  imgAvatar={item?.avatar_attachment?.file}
                  nameProject={item?.name}
                  modalDraftProject
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
      </div> */}
      {/* <div className="space-y-4 p-4 pb-5">
        <TitleItem title="Done" number={dataDoneProjects?.length} />
        <div className="grid grid-cols-3 gap-4 px-3">
          {(dataDoneProjects ?? []).map((item, index) => {
            return (
              <div key={index}>
                <BoardItem
                  item={item}
                  imgPage={item?.attachments?.main_picture?.file}
                  imgAvatar={item?.avatar_attachment?.file}
                  nameProject={item?.name}
                  modalDraftProject
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
      </div> */}
      {/* <div className="space-y-4 p-4 pb-5">
        <TitleItem title="Stuck" number={dataStuckProjects?.length} />
        <div className="grid grid-cols-3 gap-4 px-3">
          {(dataStuckProjects ?? []).map((item, index) => {
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
      </div> */}
      {/* <div className="space-y-4 p-4 pb-5">
        <TitleItem title="In use" number={dataUseProjects?.length} />
        <div className="grid grid-cols-3 gap-4 px-3">
          {(dataUseProjects ?? []).map((item, index) => {
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
      </div> */}
    </section>
  );
};
