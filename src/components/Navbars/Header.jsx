import React from "react";
import { Navbar, NavbarBrand, Container } from "reactstrap";

import routes from "../../routes";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dropdownOpen: false,
      color: "transparent",
    };

    this.toggle = this.toggle.bind(this);
    this.dropdownToggle = this.dropdownToggle.bind(this);
    this.sidebarToggle = React.createRef();
  }

  toggle() {
    if (this.state.isOpen) {
      this.setState({ color: "transparent" });
    } else {
      this.setState({ color: "dark" });
    }
    this.setState({ isOpen: !this.state.isOpen });
  }

  dropdownToggle(e) {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  }

  getBrand() {
    let brandName;
    routes.map((prop, key) => {
      console.log("PATH",window.location.href.indexOf(prop.layout + prop.path))
      if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
        brandName = prop.name;
      }
      return null;
    });
    return brandName;
  }

  openSidebar() {
    document.documentElement.classList.toggle("nav-open");
    this.sidebarToggle.current.classList.toggle("toggled");
  }

  updateColor() {
    if (window.innerWidth < 993 && this.state.isOpen) {
      this.setState({ color: "dark" });
    } else {
      this.setState({ color: "transparent" });
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateColor.bind(this));
  }

  componentDidUpdate(e) {
    if (
      window.innerWidth < 993 &&
      e.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      this.sidebarToggle.current.classList.toggle("toggled");
    }
  }

  render() {
    return (
      <Navbar
        expand="lg"
        color={
          this.props.location.pathname.indexOf("full-screen-maps") !== -1
            ? "dark"
            : this.state.color
        }
        className={
          this.props.location.pathname.indexOf("full-screen-maps") !== -1
            ? "navbar-absolute fixed-top"
            : "navbar-absolute fixed-top " +
              (this.state.color === "transparent" ? "navbar-transparent " : "")
        }
      >
        <Container fluid>
          <div className="navbar-wrapper">
            <div className="navbar-toggle">
              <button
                type="button"
                ref={this.sidebarToggle}
                className="navbar-toggler"
                onClick={() => this.openSidebar()}
              >
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            <NavbarBrand href="/">{this.getBrand()}</NavbarBrand>
          </div>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
