import Header from './components/Header';
import Footer from './components/Footer';
import { ProfileRight } from 'pages/user/ProfileRight';

export default function Example({ children }) {
  return (
    <div className="max-w-screen-2xl m-auto">
      <Header />
      {/* <ProfileRight /> */}
      {children}
      <Footer />
    </div>
  );
}
