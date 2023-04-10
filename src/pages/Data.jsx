import React from 'react';
import PageHeader from "../components/HomePageHeader.js";
import Footer from "../components/Footer.js";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel
} from "reactstrap";

const carouselItems = [
  {
    src: require("../assets/img/chester-wade.jpg"),
    altText: "Slide 1",
    caption: "Big City Life, United States"
  },
  {
    src: require("../assets/img/mark-finn.jpg"),
    altText: "Slide 2",
    caption: "Somewhere Beyond, United States"
  },
  {
    src: require("../assets/img/james.jpg"),
    altText: "Slide 3",
    caption: "Stocks, United States"
  }
];

let ps = null;
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
             

        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
        <div className="wrapper">
        <div className="page-header">

        <Container className="align-items-center">
            <Row>
              <Col lg="6" md="6">
                <h1 className="profile-title text-left">Process</h1>
                <h5 className="text-on-back">01</h5>
                <p className="profile-description">
                Here is where we describe the modeling process & approach, with links to original paper

                </p>
              </Col>
            </Row>
          </Container>
          </div>

{/* Dataset */}
          <div className="section">
          <Container>
            <Row className="justify-content-between">
              <Col md="6">
                <Row className="justify-content-between align-items-center">
                  <UncontrolledCarousel items={carouselItems} />
                </Row>
              </Col>
              <Col md="5">
                <h1 className="profile-title text-left">Dataset</h1>
                <h5 className="text-on-back">02</h5>
                <p className="profile-description text-left">
                  Here is where we describe the datset, with links to original paper
                </p>
                <div className="btn-wrapper pt-3">
                  <Button
                    className="btn-simple"
                    color="primary"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="tim-icons icon-book-bookmark" /> Bookmark
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}