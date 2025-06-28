import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t border-border py-6 text-center text-foreground shadow-inner dark:border-t-[2.5px] dark:border-t-accent">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 px-4">
        <span className="font-semibold tracking-wide">
          © {new Date().getFullYear()}{" "}
          <span className="text-primary">Artistly</span>. All rights reserved.
        </span>
        <span className="text-sm text-muted-foreground">
          Crafted with{" "}
          <span className="text-red-500">♥</span> for artists.
        </span>
      </div>
    </footer>
  );
}
