import React from "react";
import { Outlet, useNavigate } from "react-router";

function HostLayout() {
    const nav = useNavigate();
  return (
    <>
    <button onClick={()=> nav('/child')}>Child</button>
      <Outlet />
    </>
  );
}

export default HostLayout;
