const BASE_URL = "https://api.themoviedb.org/3/movie";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const fetchMovies = async () => {
	try {
		const response = await fetch(`${BASE_URL}/popular?api_key=${API_KEY}`);
		if (!response.ok) throw new Error("Error getting the movies");
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error getting the movies:", error);
		throw error;
	}
};

export const fetchMovieDetails = async (id: string) => {
	try {
		const response = await fetch(
			`${BASE_URL}/${id}?api_key=${API_KEY}&language=en-US`
		);
		if (!response.ok) {
			throw new Error("Error getting the movie details");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error getting the movie details:", error);
		throw error;
	}
};
