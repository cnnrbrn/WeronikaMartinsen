import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import { store } from "../src/Stores/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode store={store}>
    <App />
  </StrictMode>
);
