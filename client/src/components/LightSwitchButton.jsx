import { FormGroup, Switch, FormControlLabel } from "@mui/material";
import { useContext } from "react";
import ColorModeContext from "./ColorModeContext";

const LightSwitchButton = () => {

	/* Needs to use context to access toggle */
	const colorMode = useContext(ColorModeContext);

	/* Calling Context's toggle */
	const handleChange = () => {
		colorMode.toggleColorMode();
	}

	return (
		<FormGroup>
			<FormControlLabel
				label="Dark Mode"
				control={
					<Switch
						onChange={handleChange}
						checked={colorMode.color === "dark"}
					/>
				}
			/>
		</FormGroup>
	);
}

export default LightSwitchButton;
