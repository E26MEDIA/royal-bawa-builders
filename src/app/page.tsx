import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ElevationLine } from "@/components/elevation-line";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { materials, processSteps, residences, site } from "@/lib/site";

export default function HomePage() {
  const rising = residences.find((r) => r.status === "rising")!;
  const ready = residences.find((r) => r.status === "ready")!;

  return (
    <>
      <SiteHeader inverted />
      <ElevationLine />
      <main>
        <section className="relative min-h-[100svh] overflow-hidden bg-ink text-ivory">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-facade.jpg"
            alt="A composed residential elevation at dusk"
            className="absolute inset-0 size-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-linear-to-b from-ink/55 via-ink/35 to-ink" />
          <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 md:px-10 md:pb-20">
            <p className="text-[0.68rem] tracking-[0.38em] uppercase text-laterite-soft">
              {site.atelier} · {site.city}
            </p>
            <h1 className="font-heading mt-5 max-w-4xl text-[2.7rem] leading-[1.05] text-balance sm:text-6xl md:text-7xl">
              We do not sell square feet.
              <span className="block text-ivory/70">
                We compose a coastal house.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/75 md:text-lg">
              {site.tagline}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                asChild
                className="h-12 rounded-none bg-laterite px-7 text-[0.72rem] tracking-[0.22em] uppercase hover:bg-laterite/90"
              >
                <Link href={`/residences/${rising.slug}`}>
                  View {rising.name}
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-none border-ivory/35 bg-transparent px-7 text-[0.72rem] tracking-[0.22em] uppercase text-ivory hover:bg-ivory hover:text-ink"
              >
                <Link href="/visit">Private viewing</Link>
              </Button>
            </div>
            <p className="mt-10 text-[0.65rem] tracking-[0.28em] uppercase text-ivory/50">
              Scroll the elevation
            </p>
          </div>
        </section>

        <section className="bg-ivory">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28">
            <p className="text-[0.65rem] tracking-[0.28em] uppercase text-laterite md:col-span-3">
              Manifesto
            </p>
            <div className="md:col-span-8">
              <h2 className="font-heading text-4xl leading-tight text-balance md:text-5xl">
                Quiet royalty, not gilt.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Royal Bawa Builders is a Mangalore atelier. Our work lives in
                Attavar and Kankanady — compact urban houses with RERA numbers
                you can read, plans you can inhabit, and details that survive
                the southwest monsoon. Luxury, here, is a dry floor in July and
                a room that still feels considered at dusk.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-card">
          <div className="mx-auto grid max-w-7xl md:grid-cols-2">
            <article className="relative min-h-[28rem] overflow-hidden md:min-h-[36rem]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={rising.hero}
                alt={rising.name}
                className="absolute inset-0 size-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-ivory md:p-10">
                <p className="text-[0.65rem] tracking-[0.28em] uppercase text-laterite-soft">
                  {rising.collection} · {rising.statusLabel}
                </p>
                <h3 className="font-heading mt-3 text-4xl">{rising.name}</h3>
                <p className="mt-2 text-sm text-ivory/70">{rising.locality}</p>
                <Link
                  href={`/residences/${rising.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-[0.7rem] tracking-[0.22em] uppercase"
                >
                  Enter the collection <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </article>
            <article className="relative min-h-[28rem] overflow-hidden md:min-h-[36rem]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ready.hero}
                alt={ready.name}
                className="absolute inset-0 size-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-ivory md:p-10">
                <p className="text-[0.65rem] tracking-[0.28em] uppercase text-laterite-soft">
                  {ready.collection} · {ready.statusLabel}
                </p>
                <h3 className="font-heading mt-3 text-4xl">{ready.name}</h3>
                <p className="mt-2 text-sm text-ivory/70">{ready.locality}</p>
                <Link
                  href={`/residences/${ready.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-[0.7rem] tracking-[0.22em] uppercase"
                >
                  Read the house <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </article>
          </div>
        </section>

        <section className="bg-ivory">
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-[0.65rem] tracking-[0.28em] uppercase text-laterite">
                  The monsoon index
                </p>
                <h2 className="font-heading mt-4 max-w-xl text-4xl text-balance md:text-5xl">
                  Built for a city that rains.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                Mangalore is not a brochure climate. Our drawings start with
                water: how it arrives, how it leaves, and how a family still
                lives well while it falls.
              </p>
            </div>
            <dl className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["140+", "Monsoon days the junctions are designed for"],
                ["2", "Public collections — Attavar and Kankanady"],
                ["RERA", "Every residence published with its ledger"],
                ["Nandigudda", "Site office you can actually walk into"],
              ].map(([stat, label]) => (
                <div key={label} className="bg-card px-6 py-8">
                  <dt className="font-heading text-4xl text-laterite">{stat}</dt>
                  <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="bg-ink text-ivory">
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
            <p className="text-[0.65rem] tracking-[0.28em] uppercase text-laterite-soft">
              Material library
            </p>
            <h2 className="font-heading mt-4 max-w-2xl text-4xl text-balance md:text-5xl">
              A palette taken from this coast.
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {materials.map((material) => (
                <figure key={material.name} className="group">
                  <div className="aspect-4/5 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={material.image}
                      alt={material.name}
                      className="size-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="mt-4">
                    <p className="text-[0.65rem] tracking-[0.22em] uppercase text-ivory/45">
                      {material.origin}
                    </p>
                    <h3 className="font-heading mt-1 text-2xl">{material.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ivory/65">
                      {material.copy}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ivory">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28">
            <div className="md:col-span-4">
              <p className="text-[0.65rem] tracking-[0.28em] uppercase text-laterite">
                How a house is composed
              </p>
              <h2 className="font-heading mt-4 text-4xl text-balance">
                Five movements, no theatre.
              </h2>
              <Button
                asChild
                variant="outline"
                className="mt-8 h-11 rounded-none px-5 text-[0.7rem] tracking-[0.2em] uppercase"
              >
                <Link href="/atelier">Read the atelier</Link>
              </Button>
            </div>
            <ol className="md:col-span-8">
              {processSteps.map((step) => (
                <li
                  key={step.index}
                  className="grid gap-4 border-t border-border py-6 md:grid-cols-[4.5rem_1fr] md:gap-8"
                >
                  <span className="font-heading text-2xl text-laterite">
                    {step.index}
                  </span>
                  <div>
                    <h3 className="text-lg">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.copy}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="relative overflow-hidden bg-sea text-ivory">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/mangalore-coast.jpg"
            alt="The coastal light of this city"
            className="absolute inset-0 size-full object-cover opacity-30"
          />
          <div className="relative mx-auto max-w-3xl px-5 py-24 text-center md:py-32">
            <p className="text-[0.65rem] tracking-[0.28em] uppercase text-laterite-soft">
              Private viewing
            </p>
            <h2 className="font-heading mt-5 text-4xl text-balance md:text-5xl">
              Walk the site before you decide.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-ivory/75">
              We receive families at Nandi Hills, at Royal Arcade when a resale
              is in play, and at the Nandigudda office. Instagram remains our
              public door: {site.instagramHandle}.
            </p>
            <Button
              asChild
              className="mt-10 h-12 rounded-none bg-ivory px-8 text-[0.72rem] tracking-[0.22em] uppercase text-ink hover:bg-ivory/90"
            >
              <Link href="/visit">Request a viewing</Link>
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
