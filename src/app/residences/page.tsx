import Link from "next/link";
import { ElevationLine } from "@/components/elevation-line";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { residences } from "@/lib/site";

export const metadata = {
  title: "Residences",
  description:
    "The public collections of Royal Bawa Builders — Nandi Hills, Kankanady, and Royal Arcade, Attavar.",
};

export default function ResidencesPage() {
  return (
    <>
      <SiteHeader />
      <ElevationLine />
      <main className="bg-ivory">
        <section className="mx-auto max-w-7xl px-5 pb-10 pt-12 md:px-10 md:pt-16">
          <p className="text-[0.65rem] tracking-[0.28em] uppercase text-laterite">
            The collections
          </p>
          <h1 className="font-heading mt-4 max-w-3xl text-5xl text-balance md:text-6xl">
            Two houses, one standard.
          </h1>
          <p className="mt-5 max-w-xl text-muted-foreground">
            We do not run a catalogue of thirty projects. Each collection is a
            complete urban house — published, RERA-led, and meant to be walked.
          </p>
        </section>
        <section className="mx-auto max-w-7xl px-5 pb-24 md:px-10">
          <div className="grid gap-10">
            {residences.map((residence) => (
              <Link
                key={residence.slug}
                href={`/residences/${residence.slug}`}
                className="group grid overflow-hidden border border-border bg-card md:grid-cols-12"
              >
                <div className="relative min-h-72 overflow-hidden md:col-span-7 md:min-h-[28rem]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={residence.hero}
                    alt={residence.name}
                    className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col justify-between p-7 md:col-span-5 md:p-10">
                  <div>
                    <p className="text-[0.65rem] tracking-[0.28em] uppercase text-laterite">
                      {residence.collection} · {residence.statusLabel}
                    </p>
                    <h2 className="font-heading mt-3 text-4xl">
                      {residence.name}
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {residence.locality}
                    </p>
                    <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                      {residence.summary}
                    </p>
                  </div>
                  <p className="mt-8 text-[0.7rem] tracking-[0.22em] uppercase">
                    Open the residence →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
