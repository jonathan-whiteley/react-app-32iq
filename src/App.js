// import "./index.css";
import "./assets/css/nucleo-icons.css";
import "./assets/scss/blk-design-system-react.scss";
import "./assets/demo/demo.css";
import IndexNavbar from "./components/IndexNavbar.js";
import Footer from "./components/Footer.js";

import Home from "./pages/Home";
import Result from "./pages/Result";
import About from "./pages/About";





import { init, AuthType } from "@thoughtspot/visual-embed-sdk";
import { BrowserRouter, Route, Routes, Switch, Redirect } from "react-router-dom";
import Search from "./components/search";
import Liveboard from "./components/liveboard";
import {UppyComponent} from "./components/uppy";

// import {UppyComponent} from "./components/uppy";

init({
  thoughtSpotHost: "https://my3.thoughtspot.cloud/",
  authType: AuthType.None,
  // customCssUrl:"cdn.jsdelivr.net/gh/thoughtspot/custom-css-demo/aapl4.css",
  customizations: {
    style: {
      customCSSUrl: "https://cdn.jsdelivr.net/gh/thoughtspot/custom-css-demo/css-variables.css", // location of your style sheet

      // To apply overrides for your style sheet in this init, provide variable values below, eg
      customCSS: {
        variables: {
          "--ts-var-button--secondary-background": "#F0EBFF",
          "--ts-var-button--secondary--hover-background": "#E3D9FC",
          "--ts-var-root-background": "#F7F5FF",
        },
      },
    },
  },
});

function App() {
  return (
    <div className="App">
      <header>
        <IndexNavbar />
      </header>
      <Routes>
        {/* <Route path="/" element={<h1>Home</h1>} /> */}
        <Route index element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/liveboard" element={<Liveboard />} />
        <Route path="/uppy" element={<UppyComponent />} />
        <Route path="/results-page" element={<Result />} />
        <Route path="/about-page" element={<About />} />


      </Routes>
      {/* <footer>
        <Footer />
      </footer> */}
    </div>
  );
}

export default App;

