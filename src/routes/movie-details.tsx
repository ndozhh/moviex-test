import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../services/api";
import type { TempMovieDetails } from "@/lib/types";
import { MovieCard } from "@/components/movie-card";
import { RatingForm } from "@/components/rating-form";

export function MovieDetails() {
	const { id } = useParams();
	const [movie, setMovie] = useState<TempMovieDetails>(null);

	useEffect(() => {
		const loadMovies = async () => {
			try {
				const data = await fetchMovieDetails(id as string);
				setMovie(data);
			} catch (error) {
				console.error("Error getting the movie details:", error);
			}
		};

		loadMovies();
	}, [id]);

	if (!movie) return <p>Loading details...</p>;

	return (
		<div className="grid md:grid-cols-[2fr_1fr]">
			<div className="flex max-h-screen justify-center">
				<MovieCard
					key={movie.id}
					id={movie.id}
					title={movie.title}
					poster_path={movie.poster_path}
					overview={movie.overview}
					vote_average={movie.vote_average}
					release_date={movie.release_date}
					isFromDetailsView
				/>
			</div>
			<div className="flex flex-col justify-center">
				<RatingForm />
			</div>
		</div>
	);
}
