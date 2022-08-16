import {
	Button,
	Container,
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
	TextField,
	Typography,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import "./Create.style.css";
const Create = () => {
	const [formField, setFormField] = useState({
		title: { value: "", error: "" },
		details: { value: "", error: "" },
		Category: "",
	});

	const textFieldHandler = useCallback((event) => {
		const { id, value } = event.target;
		setFormField((prevState) => ({
			...prevState,
			[id]: { value: value, error: "" },
		}));
	}, []);
	const radioButtonOnChangeHandler = useCallback((event) => {
		setFormField((prevState) => ({
			...prevState,
			Category: event.target.value,
		}));
	}, []);
	const submitHandler = (event) => {
		event.preventDefault();

		if (
			formField.title.value.length < 4 ||
			formField.title.value.length > 20 ||
			formField.details.value.length < 4 ||
			formField.details.value.length > 20
		) {
			if (!formField.details.value.trim() || !formField.title.value.trim()) {
				if (!formField.title.value.trim()) {
					setFormField((prevState) => ({
						...prevState,
						title: {
							value: prevState.title.value,
							error: "Title must be  Not Empty",
						},
					}));
				}
				if (!formField.details.value.trim()) {
					setFormField((prevState) => ({
						...prevState,
						details: {
							value: prevState.details.value,
							error: "Details must be  Not Empty",
						},
					}));
				}
				return;
			}
			if (
				formField.title.value.length < 4 ||
				formField.title.value.length > 20
			) {
				setFormField((prevState) => ({
					...prevState,
					title: {
						value: prevState.title.value,
						error:
							"Title must be more than 4 character and less than 20 character",
					},
				}));
			}
			if (
				formField.details.value.length < 4 ||
				formField.details.value.length > 20
			) {
				setFormField((prevState) => ({
					...prevState,
					details: {
						value: prevState.details.value,
						error:
							"details must be more than 4 character and less than 20 character",
					},
				}));
			}

			return;
		}
	};
	return (
		<Container>
			<Typography
				variant="h6"
				component="h2"
				color="textSecondary"
				align="center"
				gutterBottom>
				Create A New Note
			</Typography>
			<form noValidate autoComplete="off" onSubmit={submitHandler}>
				<TextField
					id="title"
					label="NoteTitle"
					className="field"
					variant="outlined"
					color="secondary"
					defaultValue={formField.title.value}
					error={!!formField.title.error}
					helperText={formField.title.error ? formField.title.error : ""}
					sx={{}}
					fullWidth
					required
					onChange={textFieldHandler}
				/>
				<TextField
					label="details"
					className="field"
					id="details"
					variant="outlined"
					color="secondary"
					defaultValue={formField.details.value}
					error={!!formField.details.error}
					helperText={formField.details.error ? formField.details.error : ""}
					multiline
					rows={4}
					fullWidth
					required
					onChange={textFieldHandler}
				/>
				<FormControl className="field" fullWidth>
					<FormLabel>Note Category</FormLabel>
					<RadioGroup onChange={radioButtonOnChangeHandler}>
						<FormControlLabel value="money" control={<Radio />} label="Money" />
						<FormControlLabel value="todos" control={<Radio />} label="Todos" />
						<FormControlLabel
							value="reminders"
							control={<Radio />}
							label="Reminders"
						/>
						<FormControlLabel value="work" control={<Radio />} label="Work" />
					</RadioGroup>
				</FormControl>
				<Button
					type="submit"
					color="secondary"
					variant="contained"
					endIcon={<KeyboardArrowRightOutlinedIcon />}>
					Submit
				</Button>
			</form>
		</Container>
	);
};

export default Create;
