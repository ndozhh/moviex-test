import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./routes/index";
import { MovieDetails } from "./routes/movie-details";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/movie/:id" element={<MovieDetails />} />
			</Routes>
		</Router>
	);
}

export default App;
