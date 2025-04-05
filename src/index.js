import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

// Enable service worker for PWA
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

// Root render method
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// Register service worker (for caching & offline support)
serviceWorkerRegistration.register();
