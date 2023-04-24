import React from "react";

import Application32IQ from "./32iq";
import "./assets/css/nucleo-icons.css";
import "./assets/scss/blk-design-system-react.scss";
import "./assets/demo/demo.css";
// import 'semantic-ui-css/semantic.min.css'
import { init, AuthType } from "@thoughtspot/visual-embed-sdk";

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
          <Application32IQ />
    );
}

export default App;