import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ArtistCard({ artist }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{artist.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-gray-600">{artist.category}</div>
        <div className="text-gray-500 text-sm">Location: {artist.location}</div>
        <div className="text-gray-700 font-medium">From ${artist.price}</div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Ask for Quote</Button>
      </CardFooter>
    </Card>
  );
}