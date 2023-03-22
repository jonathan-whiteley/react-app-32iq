import "./index.css";
import { init, AuthType } from "@thoughtspot/visual-embed-sdk";
import { Route, Routes } from "react-router-dom";
import BurgerMenu from "./components/burger/burgermenu";
import Search from "./components/search";
import Liveboard from "./components/liveboard";
import {UppyComponent} from "./components/uppy";

// import {UppyComponent} from "./components/uppy";

init({
  thoughtSpotHost: "https://my3.thoughtspot.cloud/",
  authType: AuthType.None
});

function App() {
  return (
    <div className="App">
      <header>
        <BurgerMenu />
      </header>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/search" element={<Search />} />
        <Route path="/liveboard" element={<Liveboard />} />
        <Route path="/uppy" element={<UppyComponent />} />
      </Routes>
      32iQ TEST
    </div>
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
