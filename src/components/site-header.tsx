"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function SiteHeader({ inverted = false }: { inverted?: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const onHero = inverted || pathname === "/";

  return (
    <header
      className={cn(
        "z-50",
        onHero
          ? "absolute inset-x-0 top-0 text-ivory"
          : "sticky top-0 border-b border-border/70 bg-ivory/90 text-foreground backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-5 md:px-10 md:py-7">
        <Link href="/" className="shrink-0" aria-label={`${site.name} home`}>
          <Logo
            className={onHero ? "text-ivory" : "text-foreground"}
            markClassName="size-8 md:size-9"
          />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-[0.7rem] tracking-[0.28em] uppercase transition-opacity hover:opacity-70",
                pathname.startsWith(item.href) ? "opacity-100" : "opacity-80"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            asChild
            variant={onHero ? "outline" : "default"}
            className={cn(
              "h-10 rounded-none px-5 text-[0.68rem] tracking-[0.22em] uppercase",
              onHero &&
                "border-ivory/40 bg-transparent text-ivory hover:bg-ivory hover:text-ink"
            )}
          >
            <Link href="/visit">Request a viewing</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "md:hidden",
                onHero ? "text-ivory hover:bg-white/10 hover:text-ivory" : ""
              )}
              aria-label="Open menu"
            >
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[min(100%,20rem)] rounded-none border-l-border bg-ivory"
          >
            <SheetHeader>
              <SheetTitle className="font-heading text-left text-lg tracking-wide">
                Menu
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4 pb-8">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 text-sm tracking-[0.2em] uppercase"
              >
                Home
              </Link>
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-border py-4 text-sm tracking-[0.2em] uppercase"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
