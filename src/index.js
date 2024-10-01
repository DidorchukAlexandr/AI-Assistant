import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="962572299063-isfa6rjr698ldi5elpbef4dcmafdkfh4.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
