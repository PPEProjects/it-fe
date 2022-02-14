import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Example({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
