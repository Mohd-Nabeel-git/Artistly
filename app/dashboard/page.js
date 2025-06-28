"use client";
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";

// Dummy artist submissions (Indian names and cities)
const ARTISTS = [
	{ id: 1, name: "Aarav Sharma", category: ["Singer"], city: "Mumbai", fee: "Below ₹40,000" },
	{ id: 2, name: "Priya Verma", category: ["DJ"], city: "Delhi", fee: "₹40,000-₹80,000" },
	{ id: 3, name: "Rohan Patel", category: ["Dancer"], city: "Bangalore", fee: "Above ₹80,000" },
	{ id: 4, name: "Sneha Iyer", category: ["Speaker"], city: "Chennai", fee: "₹40,000-₹80,000" },
];

export default function ManagerDashboard() {
	const [artists, setArtists] = useState(ARTISTS);

	const handleRemove = (id) => {
		setArtists((prev) => prev.filter((a) => a.id !== id));
	};

	return (
		<div className="max-w-4xl mx-auto px-4 py-10">
			<Card>
				<CardHeader>
					<CardTitle className="text-2xl text-center">Manager Dashboard</CardTitle>
				</CardHeader>
				<Separator />
				<CardContent>
					<div className="overflow-x-auto">
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead className="font-bold">Name</TableHead>
									<TableHead className="font-bold">Category</TableHead>
									<TableHead className="font-bold">City</TableHead>
									<TableHead className="font-bold">Fee</TableHead>
									<TableHead className="font-bold">Action</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{artists.length ? (
									artists.map((artist) => (
										<TableRow key={artist.id}>
											<TableCell>{artist.name}</TableCell>
											<TableCell>
												{artist.category.map((cat) => (
													<Badge key={cat} variant="secondary" className="mr-1">
														{cat}
													</Badge>
												))}
											</TableCell>
											<TableCell>{artist.city}</TableCell>
											<TableCell>
												<Badge variant="outline">{artist.fee}</Badge>
											</TableCell>
											<TableCell>
												<Button
													variant="destructive"
													size="sm"
													onClick={() => handleRemove(artist.id)}
												>
													Remove
												</Button>
											</TableCell>
										</TableRow>
									))
								) : (
									<TableRow>
										<TableCell colSpan={5} className="text-center text-gray-500 py-10">
											No artist submissions yet.
										</TableCell>
									</TableRow>
								)}
							</TableBody>
						</Table>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}