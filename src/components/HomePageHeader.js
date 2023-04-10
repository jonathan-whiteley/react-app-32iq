/*!

=========================================================
* BLK Design System React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import logo from '../assets/img/tooth_logo.png';



// reactstrap components
import { Badge, 
        Container,   
        Row,
        Col 
    } from "reactstrap";

export default function PageHeader() {
  return (
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
            {/* &nbsp;
            &nbsp; */}
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
          bringing intelligence to dental diagnosis. 
          Click <b>Analyze Image </b> to begin.
          </small>
          </h2>
        </div>
      </Container>
    </div>
  );
}