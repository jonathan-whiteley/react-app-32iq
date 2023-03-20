import React from "react";
import {
  LiveboardEmbed,
  useEmbedRef
} from '@thoughtspot/visual-embed-sdk/react';
import { EmbedEvent, Action } from "@thoughtspot/visual-embed-sdk";
// import { Spin } from "antd";
// import "antd/es/spin/style/css";

export default function Liveboard() {
  const [isLoading, setIsLoading] = React.useState(true);
  const embedRef = useEmbedRef();

  const onLoad = (e) => {
    console.log("Loading liveboard");
  };

  const onRendered = (e) => {
    console.log("Loading now rendered");
    setIsLoading(false);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {/* {isLoading ? (
        <div className="embedSpinner">
          <Spin size="large" />
        </div>
      ) : (
        ""
      )} */}

      <LiveboardEmbed
        frameParams={{ height: "200vw" }}
        liveboardId={"45ca48c2-9f9b-4c9b-9229-685f918a1823"}
        ref={embedRef}
        onLoad={onLoad}
        onLiveboardRendered={onRendered}
      />
    </div>
  );
}
