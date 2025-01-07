import { Outlet } from "react-router-dom";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet /> {/* This renders the matched route */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
