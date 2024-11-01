import { getPosterUrl } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { SearchResultMovie } from "@/lib/types";

export function MovieCard({
  poster_path,
  title,
  overview,
  vote_average,
}: Pick<
  SearchResultMovie,
  "title" | "overview" | "poster_path" | "vote_average"
>) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
      <div className="overflow-hidden">
        <img
          src={poster_path ? getPosterUrl(poster_path, 500) : ""}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader className="flex-1">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{overview}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          <span className="text-yellow-500">★</span>
          <span className="font-medium">{vote_average.toFixed(1)}/10</span>
        </div>
      </CardContent>
    </Card>
  );
}
