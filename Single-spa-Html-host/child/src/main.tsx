import React from "react";
import ReactDOM, { Root } from "react-dom/client";
import Home from "./components/Home";

interface MountProps {
  domElement: HTMLElement;
}

let root: Root | null = null;

export function bootstrap(): Promise<void> {
  return Promise.resolve();
}

export function mount(props: MountProps): Promise<void> {
  root = ReactDOM.createRoot(props.domElement);
  root.render(<Home />);
  return Promise.resolve();
}

export function unmount(): Promise<void> {
  if (root) {
    root.unmount();
    root = null;
  }
  return Promise.resolve();
}

mount({'domElement':document.getElementById('root') as HTMLElement})