import React from "react";
import { defaultTheme, Provider } from "@adobe/react-spectrum";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./SignIn";
import ForgotPassword from "./ForgotPassword";
import Success from "./Success";

ReactDOM.render(
  <React.StrictMode>
    <Provider theme={defaultTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
