import React from "react";
import { SearchEmbed } from '@thoughtspot/visual-embed-sdk/react';

export default function Search() {
  return (
    <div>
      <h1>Search</h1>
      <SearchEmbed
        frameParams={{ hideDataSources: "true", height: "80vw" }}
        answerId={"ee5cf121-f013-4243-917a-f8171bbc0b99"}
      />
    </div>
  );
}
