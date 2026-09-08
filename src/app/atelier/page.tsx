import Link from "next/link";
import { ElevationLine } from "@/components/elevation-line";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { processSteps, site } from "@/lib/site";

export const metadata = {
  title: "Atelier",
  description:
    "How Royal Bawa Builders composes coastal residences in Mangalore — brief, drawing, monsoon, craft, handover.",
};

export default function AtelierPage() {
  return (
    <>
      <SiteHeader inverted />
      <ElevationLine />
      <main>
        <section className="relative min-h-[70svh] overflow-hidden bg-ink text-ivory">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/atelier-desk.jpg"
            alt="Drawings on a worktable"
            className="absolute inset-0 size-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-ink/50" />
          <div className="relative mx-auto flex min-h-[70svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 md:px-10">
            <p className="text-[0.65rem] tracking-[0.28em] uppercase text-laterite-soft">
              {site.atelier}
            </p>
            <h1 className="font-heading mt-4 max-w-3xl text-5xl text-balance md:text-6xl">
              A building house, not a billboard.
            </h1>
          </div>
        </section>

        <section className="bg-ivory">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-12 md:px-10">
            <p className="text-[0.65rem] tracking-[0.28em] uppercase text-laterite md:col-span-3">
              Belief
            </p>
            <div className="max-w-2xl md:col-span-8">
              <p className="text-xl leading-relaxed text-balance">
                Everyone in this city dreams of a home. We take that seriously
                enough to refuse spectacle. Quality, useful detailing, and value
                that can be walked — that is the atelier. Trust is earned at
                handover, not at launch.
              </p>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Royal Bawa Builders works from Nandihills Building in
                Nandigudda. Our public collections are Royal Arcade in Attavar
                and Nandi Hills in Kankanady. We publish RERA identifiers
                because a coastal house should have a civic spine, not only a
                pretty elevation.
              </p>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2">
          <div className="relative min-h-80">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/process-site.jpg"
              alt="A building under construction"
              className="absolute inset-0 size-full object-cover"
            />
          </div>
          <div className="relative min-h-80">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/process-craft.jpg"
              alt="Craft at the bench"
              className="absolute inset-0 size-full object-cover"
            />
          </div>
        </section>

        <section className="bg-card">
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-10">
            <p className="text-[0.65rem] tracking-[0.28em] uppercase text-laterite">
              Method
            </p>
            <ol className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {processSteps.map((step) => (
                <li key={step.index} className="border-t border-border pt-6">
                  <span className="font-heading text-3xl text-laterite">
                    {step.index}
                  </span>
                  <h2 className="mt-3 text-xl">{step.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {step.copy}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-ivory">
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-10">
            <div className="grid gap-10 border border-border bg-card p-8 md:grid-cols-2 md:p-12">
              <div>
                <h2 className="font-heading text-3xl">Visit the office</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {site.address}
                </p>
                <a
                  href={site.instagram}
                  className="mt-4 inline-block text-sm text-laterite hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {site.instagramHandle}
                </a>
              </div>
              <div className="flex flex-col justify-end">
                <p className="text-sm text-muted-foreground">
                  Prefer to walk a residence first? Request a private viewing
                  and we will meet you on site.
                </p>
                <Button
                  asChild
                  className="mt-6 h-12 w-fit rounded-none bg-laterite px-6 text-[0.7rem] tracking-[0.22em] uppercase hover:bg-laterite/90"
                >
                  <Link href="/visit">Private viewing</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
