import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";

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
		<div className="notes-container">
			{notes.map((note) => (
				<p key={note.id}>{note.title}</p>
			))}
		</div>
	);
};

export default Notes;
