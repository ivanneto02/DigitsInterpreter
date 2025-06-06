import React, { useState, useEffect } from "react";
import { TextBox } from "../styles/TextStyles";
import { Typography } from "@mui/material";

// drag drop file component
const ImagePrediction = (props) => {

    const ticking = true;
    const [count, setCount] = useState(0);

    const [predictions, setPredictions] = useState();
    const [indexes, setIndexes] = useState();
    const [labels, setLabels] = useState();

    useEffect(() => {
        //
        // function predict() {
        //     console.log("Attempting to predict image");
        //     var base64 = props.canvas.current.canvasContainer.childNodes[1].toDataURL("image/png");
        //
        //     var fetchBase = "http://localhost:8000/model/?data=";
        //
        //     // create a string to fetch using GET method
        //     var fetchString = fetchBase + base64;
        //
        //     const options = {
        //         method: "GET",
        //         headers: {
        //             'Content-Type': 'application/json',
        //             "Accept": "application/json",
        //         },
        //     };
        //
        //     fetch(fetchString, options)
        //         .then(response => {
        //             if (response.ok) {
        //                 return response.json();
        //             }
        //             else {
        //                 throw new Error("Server issue.");
        //             }
        //         })
        //         .then(response => {
        //             setPredictions(response.prediction);
        //             setIndexes(response.indexes);
        //             setLabels(response.labels);
        //             // console.log(response.prediction);
        //         })
        // }
        //
        // const timer = setTimeout(() => ticking && setCount(count + 1), 500)
        // predict();
        // return () => clearTimeout(timer)
    }, [count, ticking, props.canvas]);

    if (predictions === undefined) return <Typography variant="h4">No prediction engine</Typography>;
    return (
        <TextBox>
            {
                predictions.map((pred, index) => (
                    <div key={index}>
                        <Typography variant="h4">
                            {(index)}:
                            - {indexes[index].toString().padStart(3, "0")} -
                            {labels[index].padStart(3, " ").padEnd(2, "-")} - {parseFloat(pred * 100).toPrecision(4)}

                        </Typography>
                    </div>
                ))
            }
        </TextBox>
    );
};

export default ImagePrediction;
