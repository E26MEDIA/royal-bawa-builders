import Link from "next/link";
import { notFound } from "next/navigation";
import { ElevationLine } from "@/components/elevation-line";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { getResidence, residences } from "@/lib/site";

export function generateStaticParams() {
  return residences.map((residence) => ({ slug: residence.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const residence = getResidence(slug);
  if (!residence) return { title: "Residence" };
  return {
    title: residence.name,
    description: residence.summary,
  };
}

export default async function ResidencePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const residence = getResidence(slug);
  if (!residence) notFound();

  return (
    <>
      <SiteHeader inverted />
      <ElevationLine />
      <main>
        <section className="relative min-h-[80svh] overflow-hidden bg-ink text-ivory">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={residence.hero}
            alt={residence.name}
            className="absolute inset-0 size-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/40 to-ink/25" />
          <div className="relative mx-auto flex min-h-[80svh] max-w-7xl flex-col justify-end px-5 pb-14 pt-32 md:px-10">
            <p className="text-[0.65rem] tracking-[0.28em] uppercase text-laterite-soft">
              {residence.collection} · {residence.statusLabel}
            </p>
            <h1 className="font-heading mt-4 text-5xl md:text-7xl">
              {residence.name}
            </h1>
            <p className="mt-3 text-ivory/70">{residence.locality}</p>
          </div>
        </section>

        <section className="bg-ivory">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12 md:px-10 md:py-24">
            <div className="md:col-span-7">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {residence.story}
              </p>
              <Button
                asChild
                className="mt-8 h-12 rounded-none bg-laterite px-6 text-[0.7rem] tracking-[0.22em] uppercase hover:bg-laterite/90"
              >
                <Link href={`/visit?residence=${residence.slug}`}>
                  Request a private viewing
                </Link>
              </Button>
            </div>
            <dl className="grid content-start gap-6 border-t border-border pt-8 md:col-span-5 md:border-t-0 md:border-l md:pt-0 md:pl-10">
              <div>
                <dt className="text-[0.65rem] tracking-[0.22em] uppercase text-muted-foreground">
                  Possession
                </dt>
                <dd className="mt-1">{residence.possession}</dd>
              </div>
              <div>
                <dt className="text-[0.65rem] tracking-[0.22em] uppercase text-muted-foreground">
                  Site
                </dt>
                <dd className="mt-1">
                  {residence.acres}
                  {residence.units ? ` · ${residence.units}` : ""}
                </dd>
              </div>
              <div>
                <dt className="text-[0.65rem] tracking-[0.22em] uppercase text-muted-foreground">
                  RERA
                </dt>
                <dd className="mt-1 font-mono text-xs leading-relaxed break-all">
                  {residence.rera}
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="bg-card">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-10">
            <p className="text-[0.65rem] tracking-[0.28em] uppercase text-laterite">
              Rooms
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {residence.gallery.map((image) => (
                <figure key={image.src + image.caption}>
                  <div className="aspect-4/3 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={image.src}
                      alt={image.caption}
                      className="size-full object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 text-sm text-muted-foreground">
                    {image.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ivory">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 md:px-10 md:py-24">
            <div>
              <p className="text-[0.65rem] tracking-[0.28em] uppercase text-laterite">
                Plans
              </p>
              <ul className="mt-6 divide-y divide-border border-y border-border">
                {residence.plans.map((plan) => (
                  <li
                    key={plan.name}
                    className="flex items-baseline justify-between gap-4 py-4"
                  >
                    <span>
                      <span className="block">{plan.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {plan.type}
                      </span>
                    </span>
                    <span className="text-sm tracking-wide">{plan.area}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[0.65rem] tracking-[0.28em] uppercase text-laterite">
                Civil manners
              </p>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {residence.amenities.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-laterite" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-10 text-[0.65rem] tracking-[0.28em] uppercase text-laterite">
                Neighbourhood
              </p>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {residence.neighbourhood.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
