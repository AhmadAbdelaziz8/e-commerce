import { Outlet } from "react-router-dom";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";

const Layout = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet /> {/* This renders the matched route */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
