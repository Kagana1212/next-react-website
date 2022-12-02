import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Hero from "components/Hero/Hero.jsx";

export default function Layout({ children }) {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
}
