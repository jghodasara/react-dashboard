import React from "react";

import { Link, NavLink } from "react-router-dom";
import { Nav, Collapse } from "reactstrap";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.activeRoute.bind(this);
    this.state = { collapse: false, routes: [] };
  }

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  componentDidMount() {
    let newRoutes = [];
    this.props.routes.map((route) => {
      if (newRoutes.length <= 2) {
        newRoutes.push(route);
      }
    });
    this.setState({ routes: newRoutes });
  }

  render() {
    return (
      <div className="sidebar">
        <div className="logo">
          <div class="container">
            <span class="react-logo">
              <span class="nucleo"></span>
            </span>
          </div>
        </div>
        <div className="sidebar-wrapper">
          <Nav>
            {this.state.routes.map((prop, key) => {
              return (
                <li
                  onClick={() => {
                    if (prop.name === "Dashboard") {
                      this.toggle();
                    }
                  }}
                  className={
                    this.activeRoute(prop.path)
                  }
                  key={key}
                >
                  <NavLink to={prop.layout + prop.path} className="nav-link">
                    <p>{prop.name}</p>
                  </NavLink>
                  {prop.name === "Dashboard" ? (
                    <Collapse isOpen={this.state.collapse}>
                      <ul>
                        <li className="nav-item">
                          <NavLink to="/admin/all-drinks">
                            <text>All Drinks</text>
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink to="/admin/all-memes">
                            <text>All Memes</text>
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink to="/admin/all-products">
                            <text>All Products</text>
                          </NavLink>
                        </li>
                      </ul>
                    </Collapse>
                  ) : null}
                </li>
              );
            })}
          </Nav>
        </div>
      </div>
    );
  }
}

export default Sidebar;
