import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import NoteCard from "../Components/NoteCard/NoteCard";

const Notes = () => {
	const [notes, setNotes] = useState([]);
	const getNotes = async () => {
		const response = await fetch("http://localhost:8000/notes");
		const responseData = await response.json();
		setNotes(responseData);
	};
	const deleteNoteHandler = async (noteId) => {
		const response = await fetch(`http://localhost:8000/notes/${noteId}`, {
			method: "DELETE",
			headers: { "content-type": "application/json" },
		});
	};
	useEffect(() => {
		getNotes();
	}, [notes]);
	return (
		<div className="notes">
			<Container>
				<Grid container spacing={3} alignItems="center">
					{notes.map((note) => (
						<Grid item key={note.id} xs={12} sm={6}>
							<NoteCard note={note} deleteNoteHandler={deleteNoteHandler} />
						</Grid>
					))}
				</Grid>
			</Container>
		</div>
	);
};

export default Notes;
