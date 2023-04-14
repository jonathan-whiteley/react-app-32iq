import React, {useEffect, useState} from 'react';
import {Button, Container, Image} from "semantic-ui-react";
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
                <h1>Image Analysis</h1>
                {
                    fileDataURL ?
                    <Image className={"analysis-image"} src={fileDataURL} size='large' fluid/>:
                    <Image className={"analysis-image"} src={uploadImage} size='large' fluid/>
                }
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
                    <Button className={"analysis-buttons"}>Analyze</Button>
                </div>
            </Container>
        </div>
    )
}

export default AnalyzeImage;