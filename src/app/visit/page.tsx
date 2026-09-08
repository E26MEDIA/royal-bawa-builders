import { Suspense } from "react";
import { ElevationLine } from "@/components/elevation-line";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { VisitForm } from "@/components/visit-form";
import { site } from "@/lib/site";

export const metadata = {
  title: "Private viewing",
  description:
    "Request a private viewing of a Royal Bawa residence in Mangalore — Nandi Hills or Royal Arcade.",
};

export default function VisitPage() {
  return (
    <>
      <SiteHeader />
      <ElevationLine />
      <main className="bg-ivory">
        <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-24 pt-12 md:grid-cols-12 md:px-10 md:pt-16">
          <div className="md:col-span-5">
            <p className="text-[0.65rem] tracking-[0.28em] uppercase text-laterite">
              The viewing desk
            </p>
            <h1 className="font-heading mt-4 text-5xl text-balance">
              Come and see the work.
            </h1>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              A viewing is a walk — of the site, of a sample residence, of the
              drawings. We will not rush you into a token. If you already know
              us from Instagram, this is the same conversation, with better
              light.
            </p>
            <dl className="mt-10 space-y-6 text-sm">
              <div>
                <dt className="text-[0.65rem] tracking-[0.22em] uppercase text-muted-foreground">
                  Office
                </dt>
                <dd className="mt-1 max-w-xs">{site.address}</dd>
              </div>
              <div>
                <dt className="text-[0.65rem] tracking-[0.22em] uppercase text-muted-foreground">
                  Public door
                </dt>
                <dd className="mt-1">
                  <a
                    href={site.instagram}
                    className="text-laterite hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {site.instagramHandle}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <div className="md:col-span-7">
            <Suspense
              fallback={
                <div className="border border-border bg-card p-10 text-sm text-muted-foreground">
                  Preparing the viewing desk…
                </div>
              }
            >
              <VisitForm />
            </Suspense>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
