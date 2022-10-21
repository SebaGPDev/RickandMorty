import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Navbar from "./components/Navbar";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar brand="Rick and Morty" />
    <App />
  </React.StrictMode>
);
