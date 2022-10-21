import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar brand="Rick and Morty" />
    <Pagination />
    <App />
    <Pagination />
  </React.StrictMode>
);
