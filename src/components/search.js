import React from "react";
import { SearchEmbed } from '@thoughtspot/visual-embed-sdk/react';

export default function Search() {
  return (
    <div>
      <h1>Search</h1>
      <SearchEmbed
        frameParams={{ hideDataSources: "true", height: "80vw" }}
        answerId={"825b2344-5dde-4b60-b7c6-45aa10098a3f"}
      />
    </div>
  );
}
