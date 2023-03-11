import React from "react";

import { Outlet, Route, Routes } from "react-router-dom";

import Header from "./components/Navbars/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";

import routes from "./routes.js";

class App extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <Sidebar location={this.props.location} routes={routes} />
        <div className="main-panel">
          <Header location={this.props.location} />
          <Outlet />  {/* Here we need the sidebar and header for all the screens after the user gets into the dashboard so we are using outlet. */}
          <hr />
        </div>
      </div>
    );
  }
}

export default App;
