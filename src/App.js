import React from "react";
import "./styles/app.scss";
import { Routes, Route, Navigate, BrowserRouter as Router } from "react-router-dom";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import FichLogement from "./pages/fichLogment/FichLogment";
import NoPage from "./pages/error/NoPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<FichLogement />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
};

export default App;

