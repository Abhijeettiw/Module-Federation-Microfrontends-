import React from "react";
import ChildApp from "./ChildApp";
import { BrowserRouter, Route, Routes } from "react-router";
import HostLayout from "./HostLayout";

function HostApp() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HostLayout />}>
            <Route path="/child/*" element={<ChildApp/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default HostApp;
