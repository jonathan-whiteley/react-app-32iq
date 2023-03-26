// import "./index.css";
import "./assets/css/nucleo-icons.css";
import "./assets/scss/blk-design-system-react.scss";
import "./assets/demo/demo.css";
import IndexNavbar from "./components/Navbars/IndexNavbar.js";


import { init, AuthType } from "@thoughtspot/visual-embed-sdk";
import { BrowserRouter, Route, Routes, Switch, Redirect } from "react-router-dom";
import BurgerMenu from "./components/burger/burgermenu";
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
  <>
    <div className="App">
      <header>
        {/* <BurgerMenu /> */}
        <IndexNavbar />
      </header>
      <Routes>
        {/* <Route path="/" element={<h1>Home</h1>} /> */}
        <Route path="/search" element={<Search />} />
        <Route path="/liveboard" element={<Liveboard />} />
        <Route path="/uppy" element={<UppyComponent />} />
      </Routes>
    </div>
    </>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
