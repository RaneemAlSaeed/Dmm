import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <AnimatedRoutes />
      </Router>
    </>
  );
}
