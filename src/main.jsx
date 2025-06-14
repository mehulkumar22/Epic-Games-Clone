// src/main.jsx (or index.jsx)
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";  // <-- import Router here
import App from "./App";
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>          {/* <-- Wrap your whole app here */}
    <App />
  </BrowserRouter>
);
