import { useEffect, useState } from "react";

import { MovieCard } from "../components/movie-card";
import { fetchMovies } from "../services/api";
import { MovieDetails } from "@/lib/types";

export function Home() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const loadMovies = async () => {
			try {
				const data = await fetchMovies();
				setMovies(data.results);
			} catch (error) {
				console.error("Error getting the movie details:", error);
			}
		};

		loadMovies();
	}, []);

	if (!movies.length) return <p>Loading movies...</p>;

	return (
		<div>
			<header className="flex justify-center mb-4">
				<h1 className="font-bold text-4xl">Latest Top Movies</h1>
			</header>
			<main className="p-2">
				<div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
					{movies.map((movie: MovieDetails) => (
						<MovieCard
							key={movie.id}
							id={movie.id}
							title={movie.title}
							poster_path={movie.poster_path}
							overview={movie.overview}
							vote_average={movie.vote_average}
						/>
					))}
				</div>
			</main>
		</div>
	);
}
