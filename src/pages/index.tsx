import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState, useEffect } from "react";
import { getPosterUrl } from "@/lib/utils";
import { NavLink } from "react-router-dom";

const Index = () => {
  const [search, setSearch] = useState("");
  const [activeFilter, setFilter] = useState("now_playing");
  const [movies, setMovies] = useState([]);

  const FILTERS = [
    { id: "now_playing", label: "En cartelera" },
    { id: "popular", label: "Populares" },
    { id: "top_rated", label: "Mejor valoradas" },
    { id: "upcoming", label: "Próximamente" },
  ];

  useEffect(() => {
    fetchMovies();
  }, [activeFilter, search]);

  const fetchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${activeFilter}?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&language=es-ES`
    );
    const data = await response.json();
    setMovies(data.results);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center p-4 gap-4">
      <h1 className="text-3xl font-bold">Movies</h1>
      <Input
        placeholder="Search movies"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="flex gap-4">
        {FILTERS.map((filter) => (
          <Button
            className=""
            variant={filter.id === activeFilter ? "default" : "outline"}
            onClick={() => setFilter(filter.id)}
          >
            {filter.label}
          </Button>
        ))}
      </div>
      <div className="flex gap-2 flex-wrap justify-between">
        {movies
          ? movies.map((movie) => (
              <NavLink to={`/movies/${movie.id}`}>
                <Card className="w-80  cursor-pointer">
                  <CardHeader>
                    <CardTitle>{movie.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img
                      src={getPosterUrl(movie.poster_path)}
                      alt={movie.title}
                      className="w-full"
                    />
                    <span>
                      <p>Descripción:</p>
                      <p className="text-ellipsis">{movie.overview}</p>
                    </span>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-1 justify-between">
                    <div className="flex w-full justify-between">
                      <span className="flex gap-1">
                        <p>Año:</p>
                        <p>{new Date(movie.release_date).getFullYear()}</p>
                      </span>
                      <span className="flex gap-1">
                        <p>Calificación:</p>
                        <p>{movie.vote_average.toFixed(1)}</p>
                      </span>
                    </div>
                  </CardFooter>
                </Card>
              </NavLink>
            ))
          : null}
      </div>
    </div>
  );
};

export default Index;
