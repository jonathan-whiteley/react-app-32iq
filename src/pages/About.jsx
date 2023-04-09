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

export default function AboutPage() {
  React.useEffect(() => {
    document.body.classList.toggle("about-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("about-page");
    };
  }, []);
  return (
      <>
        {/* <IndexNavbar /> */}
        
        <div className="wrapper">
        <h1>this is the ABOUT page</h1>
        <h1>Project Motivation</h1>
        <h1>Our Team</h1>
        <h1>Acknowledgments</h1>

          <div className="main">
          </div>
      </div>
    </>
  );
}