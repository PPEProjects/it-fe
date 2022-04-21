import Header from './components/Header';
import Footer from './components/Footer';
import { ProfileRight } from 'pages/user/ProfileRight';
import { useSelector } from 'react-redux';
import { userSelector } from 'pages/user/userSlice';
import { apolloBuilder, AppNotifyContext, NotifyWrapper, ToastView } from 'ppe-notify';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function Example({ children }) {
  const { isOpenMyProfileRight, me } = useSelector(userSelector);
  const rolesAdmin = { admin: 'admin' };
  const rolesProjectManage = { project_manage: 'project_manage' };
  const rolesIdeasReview = { ideas_review: 'ideas_review' };
  const rolesProjectReview = { project_review: 'project_review' };
  const [notifyContext, setNotifyContext] = useState({
    avatar: '',
    user: {},
  });

  const apolloClient = apolloBuilder({
    httpLink: 'https://notify.foodmix.xyz/graphql',
    wsLink: 'wss://notify.foodmix.xyz/graphql',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTdkYWQ5ZDZhZTVmZmRjNWViZjFjMiIsImFwcElEIjoiaW9zLW5hdGl2ZSIsImlwQWRtaW4iOiI6OmZmZmY6MTI3LjAuMC4xIiwiaWF0IjoxNjQ5OTI1MzAyLCJleHAiOjE2ODE0NjEzMDJ9.ylQ7FNdnFeJ8fKmahtvBOVd1bfIVoFvNF3mYIOQN3dU',
    onError: (message, extensions) => {},
  });

  useEffect(() => {
    if (me?.data) {
      setNotifyContext(prevState => {
        prevState.user = {
          id: '',
          avatar: me?.data?.avatar_attachment?.file,
          specialID: me?.data?.id,
          name: me?.data?.name,
        };
        return prevState;
      });
    }
  }, [me]);

  return (
    <>
      <NotifyWrapper apollo={apolloClient} context={notifyContext}>
        <div className="max-w-screen-2xl m-auto">
          <Header />
          <div className="flex">
            {children}
            {isOpenMyProfileRight && <ProfileRight />}
          </div>
          <Footer />
        </div>
      </NotifyWrapper>
    </>
  );
}
