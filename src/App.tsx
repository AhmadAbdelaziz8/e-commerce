import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes";

const App = () => {
  return (
    <Router basename="e-commerce">
      <AppRoutes />
    </Router>
  );
};

export default App;
