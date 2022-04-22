import React, { useEffect } from 'react';
import MasterLayout from 'layouts/MasterLayout';
import { LayoutAdmin } from 'layouts/LayoutAdmin';
import { Tabs } from 'components/Tabs';
import { IdeasProjectAdmin } from 'admin/AdminIstrator/IdeasProjectAdmin';
import { MemberAdmin } from 'admin/AdminIstrator/MemberAdmin';
import { userSelector } from 'pages/user/userSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const menuList = [
  {
    title: 'Idea/Project',
  },
  {
    title: 'Member',
  },
];

const tabPane = [
  {
    content: <IdeasProjectAdmin />,
  },
  {
    content: <MemberAdmin />,
  },
];

const Administrator = () => {
  const { me } = useSelector(userSelector);
  const navigate = useNavigate();
  const rolesIdeasReview = { ideas_review: 'ideas_review' };
  const rolesProjectReview = { project_review: 'project_review' };
  const rolesProjectManage = { project_manage: 'project_manage' };
  const rolesAdmin = { admin: 'admin' };

  useEffect(() => {
    if (me?.data?.userAdvance?.roles?.includes(rolesAdmin?.admin)) navigate('/Administrator');
    else if (me?.data?.userAdvance?.roles?.includes(rolesIdeasReview?.ideas_review))
      navigate('/IdeaReview');
    else if (me?.data?.userAdvance?.roles?.includes(rolesProjectReview?.project_review))
      navigate('/ProjectReview');
    else if (me?.data?.userAdvance?.roles?.includes(rolesProjectManage?.project_manage))
      navigate('/ProjectManager');
  }, [me, navigate]);

  return (
    <MasterLayout>
      <LayoutAdmin>
        <Tabs
          colorBg
          isSmallWidth
          hasArrayContent
          justifyBetween
          listTab={menuList}
          tabPane={tabPane}
          borderTop={false}
        />
      </LayoutAdmin>
    </MasterLayout>
  );
};

export default Administrator;
