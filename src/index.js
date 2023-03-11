import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createMemoryHistory } from "history";
import App from "./App.js";
import SignIn from "./views/SignIn";
import Register from "./views/Register";

import "bootstrap/dist/css/bootstrap.css";

import "./assets/css/index.css";
import "./assets/css/App.css";
import "./assets/css/Header.css";
import "./assets/css/Sidebar.css";
import "./assets/css/Tools.css";
import "./assets/css/User.css";
import "./assets/css/AllDrinks.css";
import "./assets/css/AllMemes.css";
import "./assets/css/AllProducts.css";
import "./assets/css/SignIn.css";
import "./assets/css/Register.css";
import "./assets/css/MediaQueries.css";
import Dashboard from "./views/Dashboard.jsx";
import routes from "./routes.js";
import Tools from "./views/Tools.jsx";
import User from "./views/User.jsx";
import AllDrinks from "./views/AllDrinks.jsx";
import Allmemes from "./views/AllMemes.jsx";
import AllProducts from "./views/AllProducts.jsx";
const hist = createMemoryHistory();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router location={hist.location} navigator={hist}>
      <Routes>
        <Route path="/admin" element={<App location={hist.location} />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="tools" element={<Tools />} />
          <Route path="user-page" element={<User />} />
          <Route path="all-drinks" element={<AllDrinks />} />
          <Route path="all-memes" element={<Allmemes />} />
          <Route path="all-products" element={<AllProducts />} />
        </Route>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
