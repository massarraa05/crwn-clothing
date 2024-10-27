import React from "react";
import ReactDOM from 'react-dom/client'; // Note the updated import here
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { UserProvider } from "./contexts/user.context";

import "./index.scss";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render( // Use root.render instead of render
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
