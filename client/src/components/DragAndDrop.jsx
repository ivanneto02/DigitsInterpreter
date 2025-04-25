import React, { useState } from "react";

import { Typography, Paper } from "@mui/material";
import { styled } from "@mui/system";

const StyledForm = styled("form")(() => ({

}));

const StyledUploadBox = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    marginLeft: "auto",
    marginRight: "auto",
    boxShadow: theme.palette.custom.textbox.border,
    height: "100%",
    width: "50%",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
}));

// Credit: https://stackoverflow.com/questions/43692479/how-to-upload-an-image-in-react-js
// drag drop file component
function DragAndDrop(props) {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <StyledForm id="form-file-upload">
            <input
                type="file"
                id="input-file-upload"
                multiple={false}
                onChange={
                    (event) => {
                        props.setSelectedImage(event.target.files[0]);
                        setSelectedImage(event.target.files[0]);
                    }
                }
            />
            <label id="label-file-upload" htmlFor="input-file-upload">
                <div>
                    <p>Drag and drop your file here or press <b>Upload</b> below</p>
                </div>
                <StyledUploadBox>
                    {selectedImage ?
                        <div>
                            <img
                                alt=""
                                width={"100%"}
                                src={URL.createObjectURL(selectedImage)}
                            />
                            <br />
                        </div>
                        : <Typography
                            variant="h2">No image</Typography>
                    }
                </StyledUploadBox>
            </label>
        </StyledForm>
    );
};

export default DragAndDrop;
