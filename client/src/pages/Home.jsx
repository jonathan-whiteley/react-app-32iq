import React from 'react';
import PageHeader from "../components/HomePageHeader.js";
import Footer from "../components/Footer.js";


// function Home() {
//     return (
//         <h1>this is the homepage</h1>
//     );
// }

// export default Home;

export default function Index() {
    React.useEffect(() => {
      document.body.classList.toggle("index-page");
      // Specify how to clean up after this effect:
      return function cleanup() {
        document.body.classList.toggle("index-page");
      };
    }, []);
    return (
      <>
        {/* <IndexNavbar /> */}
        <div className="wrapper">
          <PageHeader />
          <div className="main">
          </div>
        <Footer />
      </div>
    </>
  );
}