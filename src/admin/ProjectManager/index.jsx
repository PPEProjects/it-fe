import React, { useState, useEffect } from 'react';
import MasterLayout from 'layouts/MasterLayout';
import { LayoutAdmin } from 'layouts/LayoutAdmin';
import { BoardItem } from 'components/BoardItem';
import { getMyProjects, memberProjectSelector } from '../../pages/memberProject/memberProjectSlice';
import { useDispatch, useSelector } from 'react-redux';
import StepsView from '../../components/StepsView';
import { StepsColumn } from 'components/StepsColumn';

export const StepsEnum = ['Preparing', 'Onboard', 'Running', 'Done'];

const avatarAttachment = attachment => {
  return attachment.thumb;
};

const ProjectManager = () => {
  const dispatch = useDispatch();

  const { projects } = useSelector(memberProjectSelector);

  useEffect(async () => {
    await dispatch(getMyProjects());
  }, [dispatch]);

  return (
    <MasterLayout>
      <LayoutAdmin>
        <div className="grid grid-cols-2 gap-4 p-4">
          {Object.values(projects)
            .filter(item => !!item.project)
            .map((item, index) => {
              // console.log('item', item);
              return (
                <div key={index}>
                  <BoardItem
                    imgPage={item?.imgPage}
                    imgAvatar={avatarAttachment(item.project.user.avatar_attachment)}
                    nameProject={item?.project.name}
                    shadowNone
                    linkViewDetail={`/ProjectDescription?id=${item?.id}`}
                    linkViewDescription={`/ProjectDescription?id=${item?.id}`}
                    projectManager
                    link={`/ProjectDescription?id=${item?.id}`}
                    placement="bottomRight"
                    item={item}
                  >
                    <div className="p-2 space-y-4">
                      <StepsView StepsEnum={StepsEnum} current={item.project.status} />
                      {/* <StepsColumn current={item.project.status} /> */}
                      {/* <StepsView StepsEnum={StepsEnum} current={item.project.status} /> */}
                    </div>
                  </BoardItem>
                </div>
              );
            })}
        </div>
      </LayoutAdmin>
    </MasterLayout>
  );
};

export default ProjectManager;
