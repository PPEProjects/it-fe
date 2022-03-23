import Header from './components/Header';
import Footer from './components/Footer';
import { ProfileRight } from 'pages/user/ProfileRight';
import { useSelector } from 'react-redux';
import { userSelector } from 'pages/user/userSlice';

export default function Example({ children }) {
  const { isOpenMyProfileRight } = useSelector(userSelector);

  return (
    <div className="max-w-screen-2xl m-auto">
      <Header />
      <div className="flex">
        {children}
        {isOpenMyProfileRight && <ProfileRight />}
      </div>
      <Footer />
    </div>
  );
}
