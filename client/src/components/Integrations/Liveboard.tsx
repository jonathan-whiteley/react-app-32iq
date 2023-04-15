import React from "react";
import {
  LiveboardEmbed,
  useEmbedRef
} from '@thoughtspot/visual-embed-sdk/react';

function Liveboard() {
  const embedRef = useEmbedRef();

  const onLoad = (e: any) => {
    console.log("Loading liveboard");
  };

  const onRendered = (e: any) => {
    console.log("Loading now rendered");
  };

  return (
    <div>
        <LiveboardEmbed
          frameParams={{width: "100vw" , height: "100vh"}}
            // fullHeight= "true"
          liveboardId={"8ae61128-68d4-4c72-8dc3-b56998535850"}
          ref={embedRef}
          onLoad={onLoad}
          onLiveboardRendered={onRendered}
        />
    </div>
  );
}

export default Liveboard;
