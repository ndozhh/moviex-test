import { getPosterUrl } from "@/lib/utils";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { SearchResultMovie } from "@/lib/types";
import { Link } from "react-router-dom";

export function MovieCard({
	poster_path,
	title,
	overview,
	vote_average,
	id,
	release_date,
	isFromDetailsView = false,
}: Pick<
	SearchResultMovie,
	"title" | "overview" | "poster_path" | "vote_average" | "id" | "release_date"
> & { isFromDetailsView?: boolean }) {
	return (
		<Card
			className={`overflow-hidden hover:shadow-lg transition-shadow flex flex-col ${
				isFromDetailsView ? "m-4 p-2 shadow-lg" : ""
			}`}
		>
			<div className="overflow-hidden flex justify-center">
				<img
					src={poster_path ? getPosterUrl(poster_path, 500) : ""}
					alt={title}
					className={`transition-transform ${
						isFromDetailsView
							? "max-w-[500px] object-contain"
							: "w-full h-full hover:scale-105 object-cover"
					}`}
				/>
			</div>
			<CardHeader className="flex-1">
				<CardTitle>{title}</CardTitle>
				<CardDescription>{overview}</CardDescription>
				{isFromDetailsView ? <p>Release date: {release_date}</p> : null}
			</CardHeader>
			<CardContent>
				<div className="flex items-center gap-2">
					<span className="text-yellow-500">★</span>
					<span className="font-medium">{vote_average.toFixed(1)}/10</span>
				</div>
			</CardContent>
			<Link
				className="pl-6 pb-2 hover:underline"
				to={isFromDetailsView ? "/" : `/movie/${id}`}
			>
				{isFromDetailsView ? "Back to home" : "See details"}
			</Link>
		</Card>
	);
}
