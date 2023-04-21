import React from "react";
// import {Button} from "semantic-ui-react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Search from "./components/Integrations/Search";
import Liveboard from "./components/Integrations/Liveboard";
// import {Menu} from "semantic-ui-react";
import AnalyzeImage from "./components/AnalyzeImage/AnalyzeImage";
import About from "./components/About/About";
import Data from "./components/Data/Data";


import {
    Button,
    Collapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
    UncontrolledTooltip
  } from "reactstrap";


function displayGrid(menuComponent: JSX.Element, applicationComponent: JSX.Element) {
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <div style={{width: "100%"}}>
                {menuComponent}
            </div>
            <div style={{width: "100%", overflowY: "auto"}}>
                {applicationComponent}
            </div>
        </div>
    )
}

function getMenu(activeItem: string) {

    return (
<Navbar className={"fixed-top "} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/home" tag={Link} id="navbar-brand">
            <span>32iQ • </span>
            Panoramic X-ray Assistant
          </NavbarBrand>
          <button
            className="navbar-toggler navbar-toggler"
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end "}
          navbar
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  32iQ•
                </a>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  className="navbar-toggler"
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar>
            <NavItem>
              <NavLink 
              to="/" 
              tag={Link}>
              Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/about-us"
                tag={Link} >
                About
              </NavLink>
           </NavItem>
           <NavItem>
              <NavLink
                to="/data-page"
                tag={Link} >
                Data
              </NavLink>
           </NavItem>
           
            <UncontrolledDropdown nav>
              <DropdownToggle
                caret
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                nav
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-cogs d-lg-none d-xl-none" />
                Demo
              </DropdownToggle>
              <DropdownMenu className="dropdown-with-icons">
                <DropdownItem href="/patient-dashboard">
                <i className="tim-icons icon-image-02" />
                  PatientiQ
                </DropdownItem>
                <DropdownItem href="/patient-search">
                  <i className="tim-icons icon-zoom-split" />
                  SearchiQ
                </DropdownItem>
                <DropdownItem 
                href="https://www.youtube.com/"
                target="_blank">
                  <i className="tim-icons icon-video-66" />
                  Video Demo
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem> 
            <Button 
            className="nav-link d-none d-lg-block"
            color="primary"
            href="/analyze-image">
            <i className="tim-icons icon-cloud-upload-94" /> Analyze Image
         </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>


    //*** */

        // <Menu className={"header-menu"}>
        //     <div>
        //        <Link to="/home">
        //             <Menu.Item
        //                 className="title-button"
        //                 name="home"
        //                 active={activeItem === "home"}
        //             >
        //                 <h1 className="title">32iQ • Panoramic X-Ray Assistant</h1>
        //             </Menu.Item>
        //         </Link>
        //     </div>

        //     <div className={"header-buttons"}>
        //         <Link className="header-button" to="/analyze-image">
        //             <Menu.Item
        //                 name="analyze-image"
        //                 active={activeItem === "analyze-image"}
        //             >
        //                 <Button
        //                     className="header-button"
        //                 >
        //                     Analyze Image
        //                 </Button>
        //             </Menu.Item>
        //         </Link>

        //         <Link className="header-button" to="/patient-dashboard">
        //             <Menu.Item
        //                 name="patient-dashboard"
        //                 active={activeItem === "patient-dashboard"}
        //             >
        //                 <Button
        //                     className="header-button"
        //                 >
        //                     Patient Dashboard
        //                 </Button>
        //             </Menu.Item>
        //         </Link>

        //         <Link className="header-button" to="/patient-search">
        //             <Menu.Item
        //                 name="patient-search"
        //                 active={activeItem === "patient-search"}
        //             >
        //                 <Button
        //                     className="header-button"
        //                 >
        //                     Patient Search
        //                 </Button>
        //             </Menu.Item>
        //         </Link>
        //     </div>
        // </Menu>


    )
}

const Application32IQ = () => {

    return (
        <Router>
            <Switch>
                <Route exact path="/" children={() =>
                    displayGrid(
                        getMenu("home"),
                        <Home />,
                    )} />
                <Route path="/home" component={() =>
                    displayGrid(
                        getMenu("home"),
                        <Home />,
                    )} />
                <Route path="/analyze-image" children={() =>
                    displayGrid(
                        getMenu("analyze-image"),
                        <AnalyzeImage />,
                    )} />
                <Route path="/patient-search" children={() =>
                    displayGrid(
                        getMenu("patient-search"),
                        <Search />,
                    )} />
                <Route path="/patient-dashboard" children={() =>
                    displayGrid(
                        getMenu("patient-dashboard"),
                        <Liveboard />,
                    )} />
                <Route path="/about-us" children={() =>
                    displayGrid(
                        getMenu("about-us"),
                        <About />,
                    )} />

                <Route path="/data-page" children={() =>
                    displayGrid(
                        getMenu("data-page"),
                        <Data />,
                    )} />
            </Switch>
        </Router>
    )
}

export default Application32IQ;