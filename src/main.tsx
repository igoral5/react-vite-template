import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./components/App/App.tsx";
import { makeLoggable } from 'mobx-log';
import { todoStore } from "./store/TodoStore.ts";

if (import.meta.env.DEV) {
 makeLoggable(todoStore)
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
