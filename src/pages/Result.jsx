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

// function Result() {
//   return (
      
//       <h1>this is the result page</h1>
//   );
// }

// export default Result;

export default function ResultsPage() {
  React.useEffect(() => {
    document.body.classList.toggle("results-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("results-page");
    };
  }, []);
  return (
      <>
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
        <section className="section section-lg">
            <Container>
              <Row className="row-grid justify-content-between">
                <Col className="mt-lg-5" md="5">
                  <Row>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats upper bg-default">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-alert-circle-exc text-primary" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">Flagged</CardTitle>
                                <p />
                                <p className="card-category">Prediction</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-check-2 text-white" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">0.925 </CardTitle>
                                <p />
                                <p className="card-category">Confidence</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <h1>
                      Prediction Results
                    </h1>
                    <p>
                      Prediction: a binary classification on whether or not the image uploaded contains a dental abnormality 
                      (Flagged or Normal)
                    </p>
                    <br />
                    <p>
                      Confidence Score: this measures the degree of confidence 32iQ has in the prediction. (0 to 1 with 
                      0 being not certain and 1 being most certain)
                    </p>
                    <br />

                    <a
                      className="font-weight-bold text-info mt-5"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Save Result {" "}
                      <i className="tim-icons icon-minimal-right text-info" />
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

        {/* <div className="wrapper">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1>this is the result page</h1>
        <h1 class="display-5">Prediction</h1> */}
        {/* {% if predictions %} */}
        {/* <h2 class="display-4 text-dark font-weight-bold">{{predictions}}</h2> */}
        {/* {% else %} */}
        {/* <h2 class="display-4 text-dark font-weight-bold">{{err}}</h2> */}
        {/* {% endif %} */}
        {/* <h2 class="display-5">Confidence Score: </h2>
        <h3 class="display-4 font-weight-bold">0.895</h3>
          <div className="main">
          </div>
      </div> */}
    </>
  );
}

