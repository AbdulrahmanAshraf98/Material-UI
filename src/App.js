import "./App.css";
import { Route, Routes } from "react-router-dom";
import Notes from "./Pages/Notes";
import Create from "./Pages/Create";
import { createTheme, ThemeProvider } from "@mui/material";
import { orange } from "@mui/material/colors";
const globalTheme = createTheme({
	palette: {
		primary: {
			main: orange[500],
		},
	},
	typography: {
		fontFamily: "sans-serif",
		fontWeightLight: 400,
		fontWeightRegular: 500,
		fontWeightMedium: 600,
		fontWeightBold: 700,
	},
});
function App() {
	return (
		<ThemeProvider theme={globalTheme}>
			<Routes>
				<Route index element={<Notes />} />
				<Route path="/create" element={<Create />} />
			</Routes>
		</ThemeProvider>
	);
}

export default App;
