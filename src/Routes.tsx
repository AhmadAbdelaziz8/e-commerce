import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/homePage";
import NotFound from "./pages/NotFoundPage";
import Layout from "./components/Layout/Layout";
import ShopCartPage from "./pages/ShopCart/ShopCartPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/shop-cart" element={<ShopCartPage />}></Route>
        <Route path="*" element={<NotFound />} />{" "}
        {/* Catch-all route for 404 */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
