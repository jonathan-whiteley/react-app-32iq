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



// reactstrap components
import { Badge, Container } from "reactstrap";

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
          <h1 className="h1-seo">32iQ</h1>
          <Badge color="primary"> </Badge> 
          <span> <Badge color="primary"> </Badge> 
          </span> <Badge color="primary"> </Badge>
          <h2 className="d-none d-md-block">
          <small>is a computer vision + analytics platform 
          bringing intelligence to dental diagnosis. 
          Click <b>Analyze Image </b> to begin.
          </small>
          </h2>
        </div>
      </Container>
    </div>
  );
}