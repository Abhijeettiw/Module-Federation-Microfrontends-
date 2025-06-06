import React from "react";
import { useNavigate } from "react-router";

function ChildHome() {
    const nav = useNavigate()
  return (
    <>
      <div>ChildHome</div>
      <button onClick={()=>nav('/child/dashboard')}>dashboard</button>
    </>
  );
}

export default ChildHome;
