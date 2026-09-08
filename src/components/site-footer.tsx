import Link from "next/link";
import { Logo } from "@/components/logo";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ink text-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12 md:px-10 md:py-20">
        <div className="md:col-span-5">
          <Logo className="text-ivory" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/70">
            A private atelier for coastal residences in Mangalore. We build with
            useful detailing, RERA transparency, and a respect for rain.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-[0.65rem] tracking-[0.28em] uppercase text-ivory/45">
            Atelier
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-laterite-soft">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="text-[0.65rem] tracking-[0.28em] uppercase text-ivory/45">
            Site office
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/80">
            {site.address}
          </p>
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-sm tracking-wide text-laterite-soft hover:underline"
          >
            {site.instagramHandle}
          </a>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-[0.7rem] tracking-[0.16em] uppercase text-ivory/45 md:flex-row md:justify-between md:px-10">
          <span>© {new Date().getFullYear()} Royal Bawa Builders</span>
          <span>Mangalore · Karnataka · India</span>
        </div>
      </div>
    </footer>
  );
}
