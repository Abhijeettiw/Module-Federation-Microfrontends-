import React from "react";
import { createRoot } from "react-dom/client";
import ChildApp from "./components/ChildApp";

const root = createRoot(document.getElementById("root")!);
root.render(<ChildApp />);