import { MovieDetails } from "@/lib/types";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }: MovieDetails) => {
	const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
	return (
		<div className="movie-card">
			<img src={posterUrl} alt={movie.title} />
			<h3>{movie.title}</h3>
			<p>Rating: {movie.vote_average}</p>
			<Link to={`/movie/${movie.id}`}>Ver detalles</Link>
		</div>
	);
};

export default MovieCard;
