import React from "react";
import { Outlet, useNavigate } from "react-router";

function ChildDashboard() {
  const nav = useNavigate();
  return (
    <>
      <button onClick={() => nav("/")}>Home</button>
    </>
  );
}

export default ChildDashboard;
