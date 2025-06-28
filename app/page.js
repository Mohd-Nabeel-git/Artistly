import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Removed images, now using emojis directly in the code
const categories = [
	{ name: "Singers", emoji: "🎤" },
	{ name: "Dancers", emoji: "💃" },
	{ name: "Speakers", emoji: "🎙️" },
	{ name: "DJs", emoji: "🎧" },
];

export default function HomePage() {
	return (
		<section className="flex flex-col items-center px-2 sm:px-4 py-8 sm:py-10">
			{/* Hero Section */}
			<div className="max-w-2xl text-center mb-8 sm:mb-10 px-2">
				<h1 className="text-3xl sm:text-4xl font-bold mb-4">
					Book Top Performing Artists Effortlessly
				</h1>
				<p className="text-base sm:text-lg text-gray-600 mb-6">
					Artistly.com connects event planners with talented artists and
					managers. Discover, shortlist, and book the perfect talent for your
					next event.
				</p>
				<Button asChild size="lg" className="font-semibold">
					<Link href="/artists">Explore Artists</Link>
				</Button>
			</div>

			{/* Categories */}
			<div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl mb-10 px-2">
				{categories.map((cat) => (
					<Link
						key={cat.name}
						href={`/artists?category=${encodeURIComponent(cat.name.slice(0, -1))}`}
						className="block"
					>
						<Card className="flex flex-col items-center p-4 sm:p-6 hover:shadow-lg transition cursor-pointer">
							<CardContent className="flex flex-col items-center">
								<div className="text-4xl sm:text-5xl mb-2 sm:mb-3">{cat.emoji}</div>
								<span className="text-base sm:text-lg font-medium">{cat.name}</span>
							</CardContent>
						</Card>
					</Link>
				))}
			</div>

			{/* Navigation Links */}
			<div className="flex flex-wrap gap-3 sm:gap-4 justify-center text-gray-600 text-sm sm:text-base">
				<Link href="/artists" className="hover:underline">
					Browse Artists
				</Link>
				<Link href="/onboard" className="hover:underline">
					Onboard Artist
				</Link>
				<Link href="/dashboard" className="hover:underline">
					Manager Dashboard
				</Link>
			</div>
		</section>
	);
}
