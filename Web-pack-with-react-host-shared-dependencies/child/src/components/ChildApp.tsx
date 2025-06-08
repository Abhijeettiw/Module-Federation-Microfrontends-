import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router";
import ChildHome from "./ChildHome";
import ChildDashboard from "./ChildDashboard";

function ChildApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChildHome />} />
        <Route path="/child" element={<ChildHome />} />
        <Route path="/child/dashboard" element={<ChildDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default ChildApp;
