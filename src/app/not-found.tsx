import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col items-center justify-center bg-ivory px-5 py-32 text-center">
        <p className="text-[0.65rem] tracking-[0.28em] uppercase text-laterite">
          Off the drawing
        </p>
        <h1 className="font-heading mt-4 text-5xl">This page is not a room.</h1>
        <p className="mt-4 max-w-md text-muted-foreground">
          The elevation you asked for is not in this house. Return to the
          collections, or request a viewing.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild className="h-11 rounded-none px-5 text-[0.7rem] tracking-[0.2em] uppercase">
            <Link href="/">Home</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-11 rounded-none px-5 text-[0.7rem] tracking-[0.2em] uppercase"
          >
            <Link href="/residences">Residences</Link>
          </Button>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
