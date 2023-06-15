import Footer from "../components/Footer.jsx";
import NavBar from "../components/NavBar.jsx";

export default function AuthLayout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
