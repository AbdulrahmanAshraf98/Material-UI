import "./App.css";
import { Route, Routes } from "react-router-dom";
import Notes from "./Pages/Notes";
import Create from "./Pages/Create";

function App() {
	return (
		<Routes>
			<Route index element={<Notes />} />
			<Route path="/create" element={<Create />} />
		</Routes>
	);
}

export default App;
