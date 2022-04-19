import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Assets/Styles/global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROOT } from "./Constants/routes";
import Landing from "./Pages/Landing";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={ROOT} element={<App />}>
          <Route index element={<Landing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
