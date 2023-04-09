import React from 'react';
import PageHeader from "../components/HomePageHeader.js";
import Footer from "../components/Footer.js";

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    ListGroupItem,
    ListGroup,
    Container,
    Row,
    Col
  } from "reactstrap";


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
          <section className="section section-lg">
          {/* <img
            alt="..."
            className="path"
            src={require("./src/assets/img/path4.png")}
          />
          <img
            alt="..."
            className="path2"
            src={require("../src/assets/img/path5.png")}
          />
          <img
            alt="..."
            className="path3"
            src={require("../src/assets/img/path2.png")}
          /> */}
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                {/* <h1 className="text-center">Differentiated Value</h1> */}
                <Row className="row-grid justify-content-center">
                  <Col lg="3">
                  <div className="info">
                      <div className="icon icon-primary">
                        <i className="tim-icons icon-sound-wave" />
                      </div>
                      <h4 className="info-title">Deep Learning + Analytics</h4>
                      <hr className="line-primary" />
                      <p>
                        A single platform for detecting potential abnormalities and taking action on those insights
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                  <div className="info">
                      <div className="icon icon-primary">
                        <i className="tim-icons icon-map-big" />
                      </div>
                      <h4 className="info-title">Purpose-Built</h4>
                      <hr className="line-primary" />
                      <p>
                        Where other tools on the market require more invasive, intra-oral x-rays like bitewings, 
                        32iQ is optimized for analysis of panoramic x-ray images, trained on a large, expertly annotated dataset
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-primary">
                        <i className="tim-icons icon-single-02" />
                      </div>
                      <h4 className="info-title">User Experience</h4>
                      <hr className="line-primary" />
                      <p>
                      Created in partnership with subject matter experts to deliver 
                      an intuitive front-end application
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
          </div>
        <Footer />
      </div>
    </>
  );
}