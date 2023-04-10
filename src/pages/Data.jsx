import React from 'react';
import PageHeader from "../components/HomePageHeader.js";
import Footer from "../components/Footer.js";
import table from '../assets/img/table.png';
import compute from '../assets/img/compute.png';
import modeling1 from '../assets/img/modeling1.png';



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
  // {
  //   src: require("../assets/img/tufts_folders.png"),
  //   altText: "Slide 1",
  //   caption: "Folder structure of the multi-modal Tufts dental database"
  // },
  {
    src: require("../assets/img/tufts1.png"),
    altText: "Slide 3",
    caption: "Panoramic radiograph"
  },
  {
    src: require("../assets/img/tufts2.png"),
    altText: "Slide 3",
    caption: "Teeth mask overlaid on the panoramic radiograph"
  },
  {
    src: require("../assets/img/tufts6.png"),
    altText: "Slide 3",
    caption: "Maxillomandibular region of interest"
  },
  {
    src: require("../assets/img/tufts_images2.gif"),
    altText: "Slide 2",
    caption: "Panoramic radiograph labeled"
  },
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
        {/* <div className="page-header"> */}

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
                {/* <h5 className="text-on-back">02</h5> */}
                <h3 className="profile-description text-left">
                  Here is where we describe the datset, with links to original paper
                </h3>
                <div className="btn-wrapper pt-3">
                
                  <Button
                    className="btn-simple"
                    // className="nav-link d-none d-lg-block"
                    color="primary"
                    target="_blank"
                    href="https://ieeexplore.ieee.org/document/9557804"
                  >
                    <i className="tim-icons icon-book-bookmark" /> Tufts Dental Database
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <Container className="align-items-center">
            <Row>
              <Col lg="6" md="6">
                <h1 className="profile-title text-left">Modeling Process</h1>
                {/* <h5 className="text-on-back">01</h5> */}
                <h4 className="profile-description">
                Here is where we describe the modeling process & approach
                <br/>        <br/>


                <b>Data cleaning:</b> Removed noisy images from original dataset 
                <br/>        <br/>


                <b>Data Augmentation:</b> Increased dataset by 5x
                <br/>        <br/>

                </h4>


              </Col>
            </Row>
            <h2>Training Data Structure</h2>
            <img className="img" src={table} alt="data table"/>
            <br/>        <br/>
            <h2> Compute Resources</h2>
            <img className="img" src={compute} alt="compute table"/>
            <br/>        <br/>
            <h2> Modeling</h2>
            <img className="img" src={modeling1} alt="compute table"/>
            <br/>        <br/>
            
          </Container>
          
          </div>

      {/* </div> */}
    </>
  );
}