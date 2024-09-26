import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";  // Add this
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import NoPage from "./pages/error/NoPage";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />  {/* Changed path to root '/' */}
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoPage />} />  {/* For 404 page */}
      </Routes>
    </HashRouter>
  );
};

export default App;
