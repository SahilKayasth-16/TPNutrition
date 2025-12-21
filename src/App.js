import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Form from './components/Form';
import Transformation from './components/Transformation';
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/Transformation" element={<Transformation />} />  
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>  
  );
}

export default App;
