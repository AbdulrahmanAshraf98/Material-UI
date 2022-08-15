import {
	Button,
	ButtonGroup,
	Container,
	createTheme,
	ThemeProvider,
	Typography,
	useTheme,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
let theme = createTheme({
	palette: {
		primary: {
			main: "#0052cc",
		},
		secondary: {
			main: "#000",
		},
	},
});
const Create = () => {
	const [counter, setCounter] = useState(0);
	const incrementCounter = useCallback(() => {
		setCounter((prevState) => ++prevState);
		console.log(theme);
	}, []);
	return (
		<Container>
			<Typography
				variant="h6"
				component="h2"
				color="textSecondary"
				align="center"
				gutterBottom>
				{counter ? `Note Number ${counter}` : "Create A New Note"}
			</Typography>
			<Button
				type="submit"
				color="secondary"
				variant="contained"
				endIcon={<KeyboardArrowRightOutlinedIcon />}
				onClick={incrementCounter}>
				Submit
			</Button>
			<br />
			<ThemeProvider theme={theme}>
				<AcUnitOutlinedIcon color="secondary" fontSize="large" />
				<AcUnitOutlinedIcon color="primary" fontSize="medium" />
				<AcUnitOutlinedIcon color="secondary" fontSize="small" />
				<AcUnitOutlinedIcon color="action" fontSize="small" />
				<AcUnitOutlinedIcon color="error" fontSize="small" />
				<AcUnitOutlinedIcon color="disabled" fontSize="small" disable />
			</ThemeProvider>
		</Container>
	);
};

export default Create;
