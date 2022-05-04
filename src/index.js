import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { lightTheme, Provider } from "@adobe/react-spectrum";
import { Provider } from "@adobe/react-spectrum";
import { theme } from "./theme/customTheme";
import "./index.css";
import SignIn from "./SignIn";
import ForgotPassword from "./ForgotPassword";
import Success from "./Success";

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider theme={lightTheme}> */}
    <Provider theme={theme}>
      <BrowserRouter basename="/spectrum-hackathon">
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
