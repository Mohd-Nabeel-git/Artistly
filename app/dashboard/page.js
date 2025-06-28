"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import artistsData from "@/data/artists.json"; // <-- Import the JSON

export default function ManagerDashboard() {
	const [artists, setArtists] = useState(artistsData);

	const handleRemove = (id) => {
		setArtists((prev) => prev.filter((a) => a.id !== id));
	};

	return (
		<div className="w-full max-w-4xl mx-auto mt-6 sm:mt-10 bg-card/80 rounded-2xl shadow-xl border border-border p-4 sm:p-8 backdrop-blur-lg">
			<div>
				<h2 className="text-2xl font-bold text-primary mb-2 text-center sm:text-left">
					Manager Dashboard
				</h2>
				<Separator className="mb-4" />
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Name</TableHead>
							<TableHead>Category</TableHead>
							<TableHead>Location</TableHead>
							<TableHead>Fee</TableHead>
							<TableHead>Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{artists.map((artist) => (
							<TableRow key={artist.id}>
								<TableCell>{artist.name}</TableCell>
								<TableCell>
									<Badge>{artist.category}</Badge>
								</TableCell>
								<TableCell>{artist.location}</TableCell>
								<TableCell>
									{artist.price < 600
										? "Below ₹40,000"
										: artist.price < 800
										? "₹40,000-₹80,000"
										: "Above ₹80,000"}
								</TableCell>
								<TableCell>
									<Button
										size="sm"
										variant="destructive"
										onClick={() => handleRemove(artist.id)}
									>
										Remove
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
				{artists.length === 0 && (
					<div className="text-center text-muted-foreground mt-6">
						No artists available.
					</div>
				)}
			</div>
		</div>
	);
}