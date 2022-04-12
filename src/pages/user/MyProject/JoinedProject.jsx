import React, { useEffect } from 'react';
import { LayoutProject } from 'layouts/LayoutMyProject';
import { ButtonSort } from 'components/ButtonSort';
import { TitleItem } from 'admin/AdminIstrator/AllAdmin/TitleItem';
import { BoardItem } from 'components/BoardItem';
import { Steps_OLD } from 'components/Steps_OLD';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector, listJoinProject } from 'pages/user/userSlice';

const dataStepsColumn = [
  {
    description: 'Vitae sed mi luctus laoreet.',
    name: 'Create idea SuCCESSFUL',
    href: '#',
    status: 'complete',
  },
  {
    description: 'Cursus semper viverra facilisis et.',
    name: 'WAITING for approval',
    href: '#',
    status: 'current',
  },
];
const MyIdeas = () => {
  const dispatch = useDispatch();
  const { mlPJoinProject, cProject } = useSelector(userSelector);

  useEffect(() => {
    dispatch(listJoinProject());
  }, [dispatch, cProject]);
  return (
    <LayoutProject>
      <section className="px-4 py-6 space-y-3">
        <div className="border rounded-md p-3 bg-white space-y-3">
          <ButtonSort />
          <TitleItem
            title="Joined Project"
            number={mlPJoinProject?.listJoinProject?.length}
            className="text-lg font-semibold"
          />
          <div className="grid grid-cols-3 gap-4 px-3">
            {(mlPJoinProject?.listJoinProject ?? []).map((item, index) => {
              return (
                <div key={index}>
                  <BoardItem
                    imgPage={item?.attachments?.main_picture?.file}
                    nameProject={item?.name}
                    imgAvatar={item?.avatar_attachment?.file}
                    linkViewDescription={`/ProjectDescription?id=${item?.id}`}
                    linkViewDetail={`/ProjectDescription?id=${item?.id}`}
                    link={`/ProjectDescription?id=${item?.id}`}
                    shadowNone
                    numberLike="3"
                    numberComment="6"
                    modalJoinProject
                    numberHeart="8"
                    placement="bottomRight"
                  >
                    <div className="px-2 -mt-4">
                      <Steps_OLD dataSteps={dataStepsColumn} stepsColumn uppercase borderNone />
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
