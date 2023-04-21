import React from 'react';
import Footer from "../Footer/Footer";
import table from '../assets/img/table.png';
import compute from './../../assets/img/compute.png';
import modeling1 from './../../assets/img/modeling1.png';
import modeling3 from './../../assets/img/modeling3.png';



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
    src: require("./../../assets/img/tufts1.png"),
    altText: "Slide 3",
    caption: "Panoramic radiograph"
  },
  {
    src: require("./../../assets/img/tufts2.png"),
    altText: "Slide 3",
    caption: "Teeth mask overlaid on the panoramic radiograph"
  },
  {
    src: require("./../../assets/img/tufts6.png"),
    altText: "Slide 3",
    caption: "Maxillomandibular region of interest"
  },
  {
    src: require("./../../assets/img/tufts_images2.gif"),
    altText: "Slide 2",
    caption: "Panoramic radiograph labeled"
  },
  {
    src: require("./../../assets/img/labels.png"),
    altText: "Slide 2",
    caption: "Five categories of abnormality"
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
                <h4 className="profile-description text-left">
                
                <li>1000 de-identified panoramic radiographs in .jpg file format</li>                
                <li>Randomly selected from the patient database at the 
                Tufts University School of Dental Medicine</li>
                <li>Captured by OP100 Orthopantomograph( Kavo Kerr) and 
                  Plammeca Promax 2D (Henry Schein) radiographic units </li>
                <li>Annotated by both an Expert + Student across 
                  five main classes of abnormality</li>

                 
                </h4>
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
                We used the Expert labels as our ground truth. 
                Initial modeling results showed the model was not learning and naively predicting each image as "none" given this was the majority class. 
                This led us to uncover issues with how the image files were being resized when read in from cloud object storage. No variations existed with respect to size, quality, but there differences in the level of zoom on the teeth. These challenges were overcome in the preprocessing step. 
                However 
                <br/>        <br/>
                Major changes to the original dataset included:
                <br/>        <br/>
                <li> <b>Data cleaning and balancing:</b> We removed noisy images from original dataset as variations in contrast, samples with no teeth or large numbers of implants were making it difficult for our model to learn the relevant features</li>
                <li><b>Data augmentation:</b> Increased dataset by 5x with flips and minimal rotations 10 degrees or less  </li>
                <br/>        <br/>

                </h4>


              </Col>
            </Row>
            {/* <h2>Training Data Structure</h2>
            <img className="img" src={table} alt="data table"/> */}
            <br/>        <br/>
            <h2> Compute Resources</h2>
            <img className="img" src={compute} alt="compute table"/>
            <br/>        <br/>
            <h2> Model Structure + HyperParameters</h2>
            <img className="img" src={modeling1} alt="model"/>
            <br/>        <br/>
            <img className="img" src={modeling3} alt="model parameters"/>
            <br/>        <br/>
            
          </Container>
          <Footer />

          </div>
          

      {/* </div> */}
    </>
  );
}