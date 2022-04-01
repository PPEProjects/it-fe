import React, { useEffect } from 'react';
import { LayoutProject } from 'layouts/LayoutMyProject';
import { ButtonSort } from 'components/ButtonSort';
import { TitleItem } from 'admin/AdminIstrator/AllAdmin/TitleItem';
import { BoardItem } from 'components/BoardItem';
import { Steps } from 'components/Steps';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector, myProject } from 'pages/user/userSlice';

const dataStepsNameColumn = [
  {
    key: 1,
    name: 'Created',
    href: '#',
    status: 'complete',
  },
  {
    key: 2,
    name: 'Creviewing & Improving',
    href: '#',
    status: 'complete',
  },
  {
    key: 3,
    name: 'Approve',
    href: '#',
    status: 'complete',
  },
  {
    key: 4,
    name: 'PM Preparing',
    href: '#',
    status: 'complete',
  },
  {
    key: 5,
    name: 'OnBoard',
    href: '#',
    status: 'complete',
  },
  {
    key: 6,
    name: 'Running',
    href: '#',
    status: 'complete',
  },
  {
    key: 7,
    name: 'Done/Stuck/InUse',
    href: '#',
    status: 'current',
  },
];
const MyIdeas = () => {
  const dispatch = useDispatch();
  const { mlMyProject, cProject, upProject, dProject } = useSelector(userSelector);

  useEffect(() => {
    dispatch(myProject());
  }, [dispatch, cProject, upProject, dProject]);

  return (
    <LayoutProject>
      <section className="px-4 py-6 space-y-3">
        <div className="border rounded-lg p-3  bg-white space-y-3 ">
          <ButtonSort />
          <TitleItem
            title="My Project"
            number={mlMyProject?.myProject?.length}
            className="text-lg font-semibold"
          />
          <div className="grid grid-cols-2 gap-4 px-3">
            {(mlMyProject?.myProject ?? []).map((item, index) => {
              return (
                <div key={index}>
                  <BoardItem
                    imgPage={item?.attachments?.main_picture?.file}
                    nameProject={item?.name}
                    imgAvatar={item?.avatar_attachment?.file}
                    linkViewDescription={`/ProjectDescription?id=${item?.id}`}
                    linkViewDetail={`/ProjectDescription?id=${item?.id}`}
                    link={`/ProjectDescription?id=${item?.id}`}
                    borderRounded={false}
                    item={item}
                    clickNode
                    placement="bottomRight"
                  >
                    <div className="px-2 -mt-4">
                      <Steps dataSteps={dataStepsNameColumn} stepsRow StepsNameColumn stepsName />{' '}
                    </div>
                  </BoardItem>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </LayoutProject>
  );
};

export default MyIdeas;
