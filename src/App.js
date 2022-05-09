import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path='/' exact />
      </Routes>
      <Routes>
        <Route element={<About />} path='/about' exact />
      </Routes>
      <Routes>
        <Route element={<Contact />} path='/contact' exact />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
