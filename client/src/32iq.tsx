import React from "react";
import {Button} from "semantic-ui-react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Search from "./components/Integrations/Search";
import Liveboard from "./components/Integrations/Liveboard";
import {Menu} from "semantic-ui-react";
import AnalyzeImage from "./components/AnalyzeImage/AnalyzeImage";
import About from "./components/About/About";


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
        <Menu className={"header-menu"}>
            <div>
               <Link to="/home">
                    <Menu.Item
                        className="title-button"
                        name="home"
                        active={activeItem === "home"}
                    >
                        <h1 className="title">32iQ • Panoramic X-Ray Assistant</h1>
                    </Menu.Item>
                </Link>
            </div>

            <div className={"header-buttons"}>
                <Link className="header-button" to="/analyze-image">
                    <Menu.Item
                        name="analyze-image"
                        active={activeItem === "analyze-image"}
                    >
                        <Button
                            className="header-button"
                        >
                            Analyze Image
                        </Button>
                    </Menu.Item>
                </Link>

                <Link className="header-button" to="/patient-dashboard">
                    <Menu.Item
                        name="patient-dashboard"
                        active={activeItem === "patient-dashboard"}
                    >
                        <Button
                            className="header-button"
                        >
                            Patient Dashboard
                        </Button>
                    </Menu.Item>
                </Link>

                <Link className="header-button" to="/patient-search">
                    <Menu.Item
                        name="patient-search"
                        active={activeItem === "patient-search"}
                    >
                        <Button
                            className="header-button"
                        >
                            Patient Search
                        </Button>
                    </Menu.Item>
                </Link>
            </div>
        </Menu>
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
            </Switch>
        </Router>
    )
}

export default Application32IQ;