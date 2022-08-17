import React, { useEffect, useState } from "react";
import { Container, Grid, Paper, styled, Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	textAlign: "center",
	color: theme.palette.text.primary,
	backgroundColor: theme.palette.primary.main,
	height: 60,
	lineHeight: "60px",
}));

const Notes = () => {
	const [notes, setNotes] = useState([]);
	const getNotes = async () => {
		const response = await fetch("http://localhost:8000/notes");
		const responseData = await response.json();
		setNotes(responseData);
	};
	useEffect(() => {
		getNotes();
	}, []);
	return (
		<div className="notes">
			<Container>
				<Grid container spacing={2} alignItems="center">
					{notes.map((note) => (
						<Grid item key={note.id} xs={12} sm={6} md={4} xl={3}>
							<Item
								id={note.id}
								variant="outlined"
								square
								elevation={16}
								color="primary">
								{note.title}
							</Item>
						</Grid>
					))}
				</Grid>
			</Container>
		</div>
	);
};

export default Notes;
