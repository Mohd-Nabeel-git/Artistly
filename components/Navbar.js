"use client";
import Link from "next/link";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/theme-btn";

export default function Navbar() {
  return (
    <nav className="w-full sticky top-0 z-30 bg-background/80 backdrop-blur border-b border-border shadow-md transition dark:border-b-[2.5px] dark:border-b-accent">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-3 gap-2 w-full">
        <div className="flex flex-col items-start">
          <Link
            href="/"
            className="text-3xl font-extrabold tracking-tight text-primary drop-shadow-sm"
            style={{
              letterSpacing: "0.05em",
              fontFamily: "'Pacifico', 'Comic Sans MS', cursive, sans-serif",
            }}
          >
            Artistly
          </Link>
          <span className="text-sm text-muted-foreground font-medium mt-1 ml-1 tracking-wide">
            where visions turn into reality
          </span>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className="px-4 py-2 rounded-lg hover:bg-accent/60 hover:text-accent-foreground transition font-medium">
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className="px-4 py-2 rounded-lg hover:bg-accent/60 hover:text-accent-foreground transition font-medium">
                <Link href="/artists">Artists</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className="px-4 py-2 rounded-lg hover:bg-accent/60 hover:text-accent-foreground transition font-medium">
                <Link href="/onboard">Onboard Artist</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className="px-4 py-2 rounded-lg hover:bg-accent/60 hover:text-accent-foreground transition font-medium">
                <Link href="/dashboard">Manager Dashboard</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <ModeToggle />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
