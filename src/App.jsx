import React from "react";
import Home from "./home/Index";
import About from "./components/about/Index";
import Header from "./components/header/Index";
import Footer from "./components/footer/Index";
import SinglePage from "./components/single-page/Index";
import Error from "./components/error/Index";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/home/:id" element={<SinglePage />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
