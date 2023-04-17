import React from 'react';
import { Container } from "reactstrap";
import Footer from "../Footer/Footer";
import logo from '../../assets/img/tooth_logo.png';


import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    ListGroupItem,
    ListGroup,
    Row,
    Col
  } from "reactstrap";

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
        <Row className="modal-header-custom">
        
          <h1 className="h1-seo">
            32iQ 
            {/* &nbsp; • */}
          {/* <span> • </span> */}
          </h1>
        
        <img className="img" src={logo} alt="32iq logo"/>
        <br/>
    </Row>

          {/* <Badge color="primary"> </Badge> 
          <span> <Badge color="primary"> </Badge> 
          </span> <Badge color="primary"> </Badge> */}
          <br/>
          <h2 className="d-none d-md-block">
          <small> a computer vision + analytics platform 
          bringing intelligence to dental diagnosis 
          <br></br>
          <br></br>

          Click <b>Analyze Image </b> to begin
          </small>
          </h2>
        </div>
      </Container>
      </div>
            <div className="main">
                <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                {/* <h1 className="text-center">Differentiated Value</h1> */}
                <Row className="row-grid justify-content-center">
                  <Col lg="3">
                  <div className="info">
                      <div className="icon icon-primary">
                        <i className="tim-icons icon-cloud-upload-94" />
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
        {/* </section> */}
        </div>
          <br/><br/><br/><br/>
            <Footer />
        </div>
    </>
  );
}