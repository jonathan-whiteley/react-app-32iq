import React from 'react';
import PageHeader from "../components/HomePageHeader";
// import Footer from "../components/Footer.tsx";
import Footer from "../components/Footer";

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