import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Textarea } from "./ui/textarea";

export function RatingForm() {
	const [username, setUsername] = useState<string>("");
	const [rating, setRating] = useState<string | null>(null);
	const [comment, setComment] = useState<string>("");

	console.log("🚀 ~ RatingForm ~ rating:", rating);
	console.log("🚀 ~ RatingForm ~ comment:", comment);
	console.log("🚀 ~ RatingForm ~ username:", username);

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
	};

	return (
		<div className="m-4 p-2 rounded-md shadow-lg">
			<h2 className="text-center font-bold mb-2">
				Let us know what you think about this movie
			</h2>
			<form className="grid gap-3" onSubmit={handleSubmit}>
				<div>
					<label className="block text-sm font-medium  mb-1">
						What's your name or nickname
					</label>
					<Input onChange={(e) => setUsername(e.target.value)} required />
				</div>
				<div>
					<label className="block text-sm font-medium  mb-1">
						Rate this movie from 1 to 10
					</label>
					<RadioGroup
						className="flex items-center"
						onChange={(e) => setRating(e.target.value)}
					>
						1<RadioGroupItem value="1" />
						2<RadioGroupItem value="2" />
						3<RadioGroupItem value="3" />
						4<RadioGroupItem value="4" />
						5<RadioGroupItem value="5" />
						6<RadioGroupItem value="6" />
						7<RadioGroupItem value="7" />
						8<RadioGroupItem value="8" />
						9<RadioGroupItem value="9" />
						10
						<RadioGroupItem value="10" />
					</RadioGroup>
				</div>
				<div>
					<label className="block text-sm font-medium mb-1">
						Tell us why this movie deserves that rate
					</label>
					<Textarea onChange={(e) => setComment(e.target.value)} />
				</div>
				<Button type="submit">Submit your review</Button>
			</form>
		</div>
	);
}
