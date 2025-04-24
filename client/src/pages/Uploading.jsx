import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import { Title } from "@styles/TextStyles";
import { HeroBox } from "@styles/HeroBox";
import { Button, Typography } from "@mui/material";
import DragAndDrop from "@components/DragAndDrop";

const Uploading = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const [predictions, setPredictions] = useState(null);
    const [indexes, setIndexes] = useState(null);
    const [labels, setLabels] = useState(null);

    const handleUpload = () => {
        if (!selectedImage) {
            throw new Error("No image selected, cannot upload");
        }

        getBase64(selectedImage)
            .then(
                result => {
                    UploadDrawing(result);
                }
            )
            .catch(err => {
                console.log(err);
            });

    };

    // Credit: https://codesandbox.io/s/convert-file-to-base64-in-react-lqi1e?file=/src/App.js:118-641
    const getBase64 = file => {
        return new Promise(resolve => {
            let fileInfo;
            let baseURL = "";
            // Make new FileReader
            let reader = new FileReader();

            // Convert the file to base64 text
            reader.readAsDataURL(file);

            // on reader load somthing...
            reader.onload = () => {
                // Make a fileInfo Object
                console.log("Called", reader);
                baseURL = reader.result;
                // console.log(baseURL);
                resolve(baseURL);
            };
            console.log(fileInfo);
        });
    };

    const UploadDrawing = (result) => {
        console.log("Attempting to detecto a big image");

        var base64 = result;

        var fetchBase = "http://localhost:8000/modeld/?data=";

        // create a string to fetch using GET method
        var fetchString = fetchBase + base64;

        const options = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json",
            },
        };

        fetch(fetchString, options)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                else {
                    throw new Error("Server issue.");
                }
            })
            .then(response => {
                // do nothing here FOR NOW

                // maybe set predictions, indexes, etc here
                setPredictions(response.prediction);
                setIndexes(response.indexes);
                setLabels(response.labels);
                console.log(response);
            })
    };


    return (
        <Grid
            container
            textAlign="center"
            direction="column"
            spacing={3}
            columns={1}
            alignItems="stretch"
        >

            {/* This is for the UPLOAD box, will appear */}
            <Grid size={1}>
                <HeroBox>
                    <Title component="h1">
                        Uploading
                    </Title>
                </HeroBox>
            </Grid>
            <Grid size={1}>
                <DragAndDrop setSelectedImage={setSelectedImage} />
            </Grid>
            <Grid size={1}>
                <>
                    {/* In charge of sending GET request to model */}
                    <Button
                        variant="contained"
                        style={{
                            marginBottom: "1%",
                            width: "10%", height: "150%", fontSize: 25
                        }}
                        onClick={
                            () => {
                                handleUpload();
                            }
                        }
                    >
                        Upload
                    </Button>

                    {/* In charge of deleteing image from the box */}
                    <Button
                        variant="contained"
                        style={{
                            marginBottom: "1%",
                            width: "10%", height: "150%", fontSize: 25
                        }}
                        onClick={
                            () => {
                                setSelectedImage(null)
                            }
                        }
                    >
                        Remove
                    </Button>
                </>
            </Grid>

            {/* In charge of displaying the detection output */}
            <Grid size={1}>
                {predictions != null ?
                    <>
                        <Typography
                            style={{ marginTop: "5%" }}
                            variant="h4">Predictions</Typography>
                        {
                            predictions.map((pred, index) => (
                                <div key={index}>
                                    <Typography
                                        variant="h5">
                                        {(index)}.
                                        - {indexes[index].toString().padStart(3, "0")} -
                                        {labels[index].padStart(3, " ").padEnd(2, "-")} - {parseFloat(pred * 100).toPrecision(8)}

                                    </Typography>
                                </div>
                            ))
                        }
                    </>
                    : null
                }
            </Grid>


        </Grid>
    );
}

export default Uploading;

