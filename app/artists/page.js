"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import ArtistCard from "@/components/ArtistCard";
import FilterBlock from "@/components/FilterBlock";

// Dummy artist data
const ARTISTS = [
	{ id: 1, name: "Aarav Sharma", category: "Singer", price: 500, location: "Mumbai" },
	{ id: 2, name: "Priya Verma", category: "DJ", price: 800, location: "Delhi" },
	{ id: 3, name: "Rohan Patel", category: "Dancer", price: 400, location: "Bangalore" },
	{ id: 4, name: "Sneha Iyer", category: "Speaker", price: 600, location: "Chennai" },
	{ id: 5, name: "Vikram Singh", category: "Singer", price: 700, location: "Kolkata" },
];

export default function ArtistListingPage() {
	const searchParams = useSearchParams();
	const initialCategory = searchParams.get("category") || "";
	const [filters, setFilters] = useState({ category: initialCategory, location: "", price: "" });

	useEffect(() => {
		// Update filter if query param changes (e.g., via browser navigation)
		setFilters((f) => ({
			...f,
			category: searchParams.get("category") || "",
		}));
	}, [searchParams]);

	// Filtering logic
	const filtered = ARTISTS.filter((a) => {
		const cat = !filters.category || a.category === filters.category;
		const loc = !filters.location || a.location === filters.location;
		const price =
			!filters.price ||
			(filters.price === "low" && a.price < 600) ||
			(filters.price === "mid" && a.price >= 600 && a.price < 800) ||
			(filters.price === "high" && a.price >= 800);
		return cat && loc && price;
	});

	return (
		<div className="w-full max-w-4xl mx-auto mt-6 sm:mt-10 bg-card/80 rounded-2xl shadow-xl border border-border p-4 sm:p-8 backdrop-blur-lg">
			<h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-primary">Browse Artists</h2>
			<FilterBlock filters={filters} setFilters={setFilters} artists={ARTISTS} />
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-6">
				{filtered.length ? (
					filtered.map((artist) => <ArtistCard key={artist.id} artist={artist} />)
				) : (
					<div className="col-span-full text-center text-muted-foreground">No artists found.</div>
				)}
			</div>
		</div>
	);
}