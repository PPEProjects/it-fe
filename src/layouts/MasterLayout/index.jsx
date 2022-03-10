import Header from './components/Header';
import Footer from './components/Footer';
import { ProfileRight } from 'pages/user/ProfileRight';

export default function Example({ children }) {
  return (
    <>
      <Header />
      {/* <ProfileRight /> */}
      {children}
      <Footer />
    </>
  );
}
