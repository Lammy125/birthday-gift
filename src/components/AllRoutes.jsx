import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "./Container";
import About from "./About";

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default AllRoutes;
