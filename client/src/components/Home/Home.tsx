import React from 'react';
import { Container } from "reactstrap";
import Footer from "../Footer/Footer";

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
        <div className="wrapper">
            <div className="page-header header-filter">
                <div className="squares square1" />
                <div className="squares square2" />
                <div className="squares square3" />
                <div className="squares square4" />
                <div className="squares square5" />
                <div className="squares square6" />
                <div className="squares square7" />
                <Container>
                    <div className="content-center brand">
                        <h1 className="h1-seo">32iQ</h1>
                        <h4 className="d-none d-sm-block">
                            is a computer vision + analytics platform bringing intelligence to dental x-ray diagnosis
                        </h4>
                    </div>
                </Container>
            </div>
                <div className="main">
                </div>
            <Footer />
        </div>
    </>
  );
}