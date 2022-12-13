import React from "react";

import {BrowserRouter,Routes,Route} from "react-router-dom"

import Home from "./pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import CVs from "./pages/CVs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cvs" element={<CVs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
