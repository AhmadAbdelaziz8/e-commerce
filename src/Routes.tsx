import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/homePage";
import NotFound from "./pages/notFoundPage"; // Example of a 404 page
import Layout from "./components/layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="*" element={<NotFound />} />{" "}
        {/* Catch-all route for 404 */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
