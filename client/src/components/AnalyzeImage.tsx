import React from 'react';
import {Button, Container, Image} from "semantic-ui-react";
import uploadImage from "./../assets/img/upload-image.png";
import "./AnalyzeImage.css";

function AnalyzeImage() {
    return (
        <div>
            <Container className={"analysis-container"}>
                <h1>Image Analysis</h1>
                <Image className={"analysis-image"}>
                    <Image src={uploadImage} size='large' fluid />
                </Image>
                <div>
                    <Button className={"analysis-buttons"}>Upload Image</Button>
                    <Button className={"analysis-buttons"}>Analyze</Button>
                </div>
            </Container>
        </div>
    )
}

export default AnalyzeImage;