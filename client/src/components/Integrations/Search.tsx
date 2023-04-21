import React from "react";
import { SearchEmbed } from '@thoughtspot/visual-embed-sdk/react';

function Search() {
  return (
    
    <div>
      <br></br>
      <br></br>
      <br></br>
        <SearchEmbed
          frameParams={{width: "100vw" , height: "100vh"}}
          collapseDataSources={true}
          answerId={"ee5cf121-f013-4243-917a-f8171bbc0b99"}
        />
    </div>
  );
}

export default Search;