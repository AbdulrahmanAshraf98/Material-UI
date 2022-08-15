import { Button, ButtonGroup, Container, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";

const Create = () => {
	const [counter, setCounter] = useState(0);
	const incrementCounter = useCallback(() => {
		setCounter((prevState) => ++prevState);
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
			<Button type="submit" color="secondary" variant="contained">
				Submit
			</Button>
			{/* <ButtonGroup variant="contained" color="primary">
				<Button type="submit" onClick={incrementCounter}>
					Click me
				</Button>
				<Button color="secondary" onClick={() => setCounter(0)}>
					Click me
				</Button>
				<Button onClick={() => setCounter(1000)}>Click me</Button>
			</ButtonGroup> */}
		</Container>
	);
};

export default Create;
