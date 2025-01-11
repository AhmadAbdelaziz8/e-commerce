import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/homePage";
import NotFound from "./pages/NotFoundPage";
import Layout from "./components/Layout/Layout";
import ShopCartPage from "./pages/ShopCart/ShopCartPage";
import LoginPage from "./pages/Login/LoginPage";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Parent route with Layout */}
      <Route element={<Layout />}>
        {/* Child routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login-signup" element={<LoginPage />} />
        <Route path="/shop-cart" element={<ShopCartPage />} />
        <Route path="*" element={<NotFound />} />{" "}
        {/* Catch-all route for 404 */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
