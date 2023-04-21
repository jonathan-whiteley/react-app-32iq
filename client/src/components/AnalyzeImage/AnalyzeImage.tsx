import React, {useEffect, useState} from 'react';
// import 'semantic-ui-css/semantic.min.css'
import {Button, Container, Divider, Header, Icon, Image, Loader} from "semantic-ui-react";
import { Link } from "react-router-dom";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    ListGroupItem,
    ListGroup,
    NavLink,
    Row,
    Col
  } from "reactstrap";


import {apiServer} from "../../utils/api";
import "./AnalyzeImage.css";

const allowedFileTypes = ["image/png", "image/jpeg", "image/jpg"];

const ConfidenceIcon = (props: {
    confidence: number,
}) => {
    const {confidence} = props;

    if (confidence >= 0.9) {
        return <Icon name={"checkmark"} size={"big"}/>
    }

    if (confidence >= 0.8) {
        return <Icon name={"question"} size={"big"}/>
    }

    return <Icon name={"x"} size={"big"}/>
}

function AnalyzeImage() {
    const [file, setFile] = React.useState<File | null>(null);
    const [fileDataURL, setFileDataURL] = useState(null);
    const [prediction, setPrediction] = useState<string>();
    const [confidence, setConfidence] = useState<number>();
    const [isLoading, setIsLoading] = useState(false);

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

    const getPrediction = async () => {
        const formData = new FormData();
        formData.append("file", file as Blob);
        return await apiServer.post(
            "/detect_abnormality",
            formData
        ).then((response) => {
            console.log(response.data);
            const {abnormality, conf} = response.data;

            if (abnormality) {
                setPrediction("Flagged");
            } else {
                setPrediction("Normal");
            }

            setConfidence(
                conf.toPrecision(3) * 100
            );
            setIsLoading(false);
        }).catch((error) => {
            console.log(error);
        });
    }

    const onAnalyzeClick = () => {
        setIsLoading(true);
        getPrediction().then(r => console.log(r));
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
        <br></br><br></br>
            <Container className={"analysis-container"}>
                <div className={"image-container"}>
                    {
                        fileDataURL ?
                        <Image className={"analysis-image"} src={fileDataURL} size='large' fluid/>:
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
                    <Button
                        className={"analysis-buttons"}
                        disabled={file === null}
                        onClick={onAnalyzeClick}
                    >
                        <Icon name={"rss"}/>
                        Analyze
                    </Button>
                </div>
            </Container>
            <Divider/>
            <Container className={"results-container"}>
                <div className={"results"}>
                    <div className={"prediction-result"}>
                        {
                            isLoading ?
                                <Loader active inline={"centered"} size={"medium"}/>
                                :
                                <>
                                    {
                                        prediction ?
                                            prediction === "Flagged" ?
                                                <Icon name={"warning circle"} size={"big"} color={"purple"}/>:
                                                <Icon name={"check circle"} size={"big"} color={"green"}/>
                                            :
                                            undefined
                                    }
                                    <div className={"prediction-label"}>
                                        <Header as={"h3"} className={"prediction-label-header"}>{prediction ? String(prediction) : "--"}</Header>
                                        <p className={"prediction-label-text"}>Prediction</p>
                                    </div>
                                </>
                        }
                    </div>
                    <div className={"prediction-confidence"}>
                        {
                            isLoading ?
                                <Loader active inline={"centered"} size={"medium"}/>
                                :
                                <>
                                    {confidence ? <ConfidenceIcon confidence={confidence}/> : undefined}
                                    <div className={"confidence-label"}>
                                        <Header as={"h3"} className={"prediction-label-header"}>{confidence ? String(confidence) + "%" : "--"}</Header>
                                        <p className={"prediction-label-text"}>Confidence</p>
                                    </div>
                                </>
                        }
                    </div>
                </div>
                <div className={"results-header-div"}>
                    <Header as={"h2"} className={"results-header"}>Prediction Results</Header>
                    <br/>
                    <h3>
                        <b>Prediction</b>: a binary classification on whether or not the image uploaded contains a dental abnormality (Flagged or Normal).
                    </h3>
                    <br/>
                    <h3>
                        <b>Confidence Score</b>: 
                        this measures the degree of confidence 32iQ has in the prediction: (0 to 1 with 0 being not certain and 1 being most certain).
                    </h3>
                    <br/>
                    <Button className={"save-results-button"} href="/patient-dashboard" > <Icon name={"chevron right"}/> Save Result</Button>
                </div>
            </Container>
        </div>
    )
}

export default AnalyzeImage;