import Header from './components/Header';
import Footer from './components/Footer';
import { ProfileRight } from 'pages/user/ProfileRight';
import { useSelector } from 'react-redux';
import { userSelector } from 'pages/user/userSlice';
import {apolloBuilder, AppNotifyContext, NotifyWrapper, ToastView} from "ppe-notify";
import {message} from "antd";
import {useEffect, useState} from "react";

export default function Example({ children }) {
  const { isOpenMyProfileRight, me } = useSelector(userSelector);

  const [notifyContext, setNotifyContext] = useState({
      avatar: '',
      user: {}
    }
  )

  const apolloClient = apolloBuilder({
    httpLink: 'https://notify.foodmix.xyz/graphql',
    wsLink: 'wss://notify.foodmix.xyz/graphql',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTdkYWQ5ZDZhZTVmZmRjNWViZjFjMiIsImFwcElEIjoiaW9zLW5hdGl2ZSIsImlwQWRtaW4iOiI6OmZmZmY6MTI3LjAuMC4xIiwiaWF0IjoxNjQ5OTI1MzAyLCJleHAiOjE2ODE0NjEzMDJ9.ylQ7FNdnFeJ8fKmahtvBOVd1bfIVoFvNF3mYIOQN3dU',
    onError: (message, extensions) => {
      console.log(message)
    }
  })

  const onToast = (_message) => {
    if(_message.error) {
      message.error(_message.message)
    } else {
      message.success(_message.message)
    }
  }

  useEffect(()=> {

    if(me?.data) {

      setNotifyContext((prevState) => {
        prevState.user = {
          id: '',
          avatar: me?.data?.avatar_attachment?.file,
          specialID: me?.data?.id,
          name: me?.data?.name
        }
        return prevState
      })

    }

  }, [me])

  return (
    <NotifyWrapper apollo={apolloClient} context={notifyContext}>

      <AppNotifyContext.Consumer>
        { ctx => Object.keys(ctx.user).length > 0 ? <ToastView onReceived={onToast} /> :null }
      </AppNotifyContext.Consumer>

      <div className="max-w-screen-2xl m-auto">
        <Header />
        <div className="flex">
          {children}
          {isOpenMyProfileRight && <ProfileRight />}
        </div>
        <Footer />
      </div>
    </NotifyWrapper>
  );
}
