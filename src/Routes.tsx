import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/homePage";
import NotFound from "./pages/NotFoundPage";
import Layout from "./components/Layout/Layout";
import ShopCartPage from "./pages/ShopCart/ShopCartPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import AboutPage from "./pages/aboutPage";
import ContactPage from "./pages/ContactPage";
import ExplorePage from "./pages/ExplorePage";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Parent route with Layout */}
      <Route element={<Layout />}>
        {/* Child routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about-page" element={<AboutPage />} />
        <Route path="/contact-page" element={<ContactPage />} />
        <Route path="/explore-page" element={<ExplorePage />} />
        <Route path="/shop-cart" element={<ShopCartPage />} />
        <Route path="/login-page" element={<AuthPage />} />{" "}
        <Route path="*" element={<NotFound />} />{" "}
        {/* Catch-all route for 404 */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
