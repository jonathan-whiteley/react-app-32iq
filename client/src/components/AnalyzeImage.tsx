import React, {useEffect, useState} from 'react';
import {Button, Container, Divider, Header, Icon, Image} from "semantic-ui-react";
import uploadImage from "./../assets/img/upload-image.png";
import "./AnalyzeImage.css";

const allowedFileTypes = ["image/png", "image/jpeg", "image/jpg"];

function AnalyzeImage() {
    const [file, setFile] = React.useState<File | null>(null);
    const [fileDataURL, setFileDataURL] = useState(null);

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0] as File);
        }

        if (file) {
            let fileType = file?.type || "";

            if (fileType) {
                if (allowedFileTypes.includes(fileType)) {
                    console.log("File type is allowed");
                } else {
                    console.log("File type is not allowed");
                }
            }
        }
    }

    useEffect(() => {
        let fileReader: any = false
        let isCancel: any = false

        if (file) {
            fileReader = new FileReader();
            fileReader.onload = (e: any) => {
                if (e.target && !isCancel) {
                    setFileDataURL(e.target.result);
                }
            }
            fileReader.readAsDataURL(file);
        }
        return () => {
            isCancel = true;
            if (fileReader && fileReader.readyState === 1) {
                fileReader.abort();
            }
        }
    },
        [file]
    )

    return (
        <div>
            <Container className={"analysis-container"}>
                {/*<h1>Image Analysis</h1>*/}
                <div className={"image-container"}>
                    {
                        fileDataURL ?
                        <Image className={"analysis-image"} src={fileDataURL} size='large' fluid/>:
                        // <Image className={"analysis-image"} src={uploadImage} size='large' fluid/>
                        <Icon name={"file outline"} size={"massive"} color={"grey"}/>
                    }
                </div>
                <div>
                    <Button
                        className={"analysis-buttons"}
                        content={"Upload Image"}
                        as={"label"}
                        labelPosition={"left"}
                        htmlFor={"file"}
                        type={"button"}
                        icon={"file"}
                    />
                    <input
                        id={"file"}
                        type={"file"}
                        accept={"image/*"}
                        hidden
                        onChange={onFileChange}
                    />
                    <Button className={"analysis-buttons"}><Icon name={"rss"}/> Analyze</Button>
                </div>
            </Container>
            <Divider/>
            <Container className={"results-container"}>
                <div className={"results"}>
                    <div className={"prediction-result"}>
                        <Icon name={"warning circle"} size={"big"} color={"purple"}/>
                        <div className={"prediction-label"}>
                            <Header as={"h3"} className={"prediction-label-header"}>Flagged</Header>
                            <p className={"prediction-label-text"}>Prediction</p>
                        </div>
                    </div>
                    <div className={"prediction-confidence"}>
                        <Icon name={"checkmark"} size={"big"} />
                        <div className={"confidence-label"}>
                            <Header as={"h3"} className={"prediction-label-header"}>0.925</Header>
                            <p className={"prediction-label-text"}>Confidence</p>
                        </div>
                    </div>
                </div>
                <div className={"results-header-div"}>
                    <Header as={"h2"} className={"results-header"}>Prediction Results</Header>
                    <br/>
                    <p>
                        <b>Prediction</b>: a binary classification on whether or not the image uploaded contains a dental abnormality (Flagged or Normal).
                    </p>
                    <br/>
                    <p>
                        <b>Confidence Score</b>: this measures the degree of confidence 32iQ has in the prediction: (p to 1 with 0 being not certain and 1 being most certain).
                    </p>
                    <br/>
                    <Button className={"save-results-button"}><Icon name={"chevron right"}/> Save Result</Button>
                </div>
            </Container>
        </div>
    )
}

export default AnalyzeImage;