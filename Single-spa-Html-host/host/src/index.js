import { registerApplication, start } from "single-spa";

registerApplication({
  name: "child",
  activeWhen: (location) => location.pathname === "/",
  app: () => import("child/App"),
  customProps: {
    domElement: document.getElementById("root"),
  },
});

start();
