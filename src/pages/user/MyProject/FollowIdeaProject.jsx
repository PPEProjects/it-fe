import React, { useEffect } from 'react';
import { LayoutProject } from 'layouts/LayoutMyProject';
import { ButtonSort } from 'components/ButtonSort';
import { TitleItem } from 'admin/AdminIstrator/AllAdmin/TitleItem';
import { BoardItem } from 'components/BoardItem';
import { ButtonFollow } from 'components/ButtonFollow';
import { CommentItem } from 'pages/home/AllPage/CommentItem';
import { myProjectInterested, projectSelector } from 'pages/project/projectSlice';
import { useDispatch, useSelector } from 'react-redux';

const dataIdeas = [
  {
    imgPage: 'https://i.pravatar.cc/100?img=2',
    imgAvatar: 'https://i.pravatar.cc/100?img=2',
    nameProject: '12345',
  },
  {
    imgPage: 'https://i.pravatar.cc/100?img=2',
    imgAvatar: 'https://i.pravatar.cc/100?img=2',
    nameProject: '12345',
  },
];

const FollowIdeaProject = () => {
  const dispatch = useDispatch();
  const { mlProjectInterested } = useSelector(projectSelector);

  useEffect(() => {
    dispatch(myProjectInterested());
  }, [dispatch]);

  return (
    <LayoutProject>
      <section className="px-4 py-6 space-y-3">
        <div className="border rounded-md p-3 bg-white space-y-3">
          <ButtonSort />
          <TitleItem
            title="Interested Idea/Project"
            number={mlProjectInterested?.myProjectInterested?.length}
            className="text-lg font-semibold"
          />
          <div className="grid grid-cols-3 gap-4 px-3">
            {(mlProjectInterested?.myProjectInterested ?? []).map((item, index) => {
              return (
                <div key={index}>
                  <BoardItem
                    imgPage={item?.project?.attachments?.main_picture?.file}
                    nameProject={item?.project?.name}
                    imgAvatar={item?.project?.user?.avatar_attachment?.file}
                    shadowNone
                    modalJoinProject
                    numberLike="3"
                    numberComment="6"
                    numberHeart="8"
                    placement="bottomRight"
                  >
                    <div className="px-3">
                      <CommentItem
                        itemsCenter
                        nameUser="Join"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                      />
                      <div className="p-2">
                        <ButtonFollow />
                      </div>
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

export default FollowIdeaProject;
