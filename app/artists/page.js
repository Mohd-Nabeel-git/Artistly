"use client";
import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ArtistCard from "@/components/ArtistCard";
import FilterBlock from "@/components/FilterBlock";
import artistsData from "@/data/artists.json";

// Child component that uses useSearchParams
function ArtistsContent() {
    const searchParams = useSearchParams();
    const initialCategory = searchParams.get("category") || "";
    const [filters, setFilters] = useState({ category: initialCategory, location: "", price: "" });

    useEffect(() => {
        setFilters((f) => ({
            ...f,
            category: searchParams.get("category") || "",
        }));
    }, [searchParams]);

    // Filtering logic
    const filtered = artistsData.filter((a) => {
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
            <FilterBlock filters={filters} setFilters={setFilters} artists={artistsData} />
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

export default function ArtistListingPage() {
    return (
        <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
            <ArtistsContent />
        </Suspense>
    );
}