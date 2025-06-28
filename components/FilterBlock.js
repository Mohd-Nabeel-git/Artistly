import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export default function FilterBlock({ filters, setFilters, artists }) {
  const categories = [...new Set(artists.map((a) => a.category))];
  const locations = [...new Set(artists.map((a) => a.location))];

  return (
    <div className="flex flex-wrap gap-4 justify-center bg-card/80 p-6 rounded-xl border border-border shadow transition">
      <select
        className="bg-background text-foreground border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-ring transition"
        value={filters.category}
        onChange={e => setFilters(f => ({ ...f, category: e.target.value }))}
      >
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <select
        className="bg-background text-foreground border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-ring transition"
        value={filters.location}
        onChange={e => setFilters(f => ({ ...f, location: e.target.value }))}
      >
        <option value="">All Locations</option>
        {locations.map((loc) => (
          <option key={loc} value={loc}>{loc}</option>
        ))}
      </select>
      <select
        className="bg-background text-foreground border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-ring transition"
        value={filters.price}
        onChange={e => setFilters(f => ({ ...f, price: e.target.value }))}
      >
        <option value="">All Prices</option>
        <option value="low">Low (&lt; $600)</option>
        <option value="mid">Mid ($600 - $799)</option>
        <option value="high">High (&ge; $800)</option>
      </select>
    </div>
  );
}