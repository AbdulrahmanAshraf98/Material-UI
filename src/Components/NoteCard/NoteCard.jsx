import { DeleteOutlined } from "@mui/icons-material";
import {
	Card,
	CardContent,
	CardHeader,
	IconButton,
	Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
const NoteItem = styled(Card)(({ theme }) => ({
	...theme.typography.body2,
	textAlign: "center",
	color: theme.palette.text.primary,
	backgroundColor: theme.palette.secondary.main,
	height: "30vh",
}));
const NoteCard = ({ note, deleteNoteHandler }) => {
	return (
		<div className="note-card">
			<NoteItem elevation={1}>
				<CardHeader
					action={
						<IconButton onClick={() => deleteNoteHandler(note.id)}>
							<DeleteOutlined />
						</IconButton>
					}
					title={note.title}
					subHeader={note.category}
				/>
				<CardContent>
					<Typography variant="body-2" color="textSecondary">
						{note.details}
					</Typography>
				</CardContent>
			</NoteItem>
		</div>
	);
};

export default NoteCard;
