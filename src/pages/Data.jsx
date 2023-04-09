import React from 'react';
import PageHeader from "../components/HomePageHeader.js";
import Footer from "../components/Footer.js";


// function Home() {
//     return (
//         <h1>this is the homepage</h1>
//     );
// }

// export default Home;

// function Result() {
//   return (
      
//       <h1>this is the result page</h1>
//   );
// }

// export default Result;

export default function DataPage() {
  React.useEffect(() => {
    document.body.classList.toggle("data-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("data-page");
    };
  }, []);
  return (
      <>
        {/* <IndexNavbar /> */}
        
        <div className="wrapper">
        <h1>this is the DATA page</h1>
          <div className="main">
          </div>
      </div>
    </>
  );
}