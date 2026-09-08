import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Royal Bawa Builders — The Coastal Atelier",
    template: "%s · Royal Bawa Builders",
  },
  description:
    "A private atelier for coastal residences in Mangalore. Nandi Hills, Kankanady and Royal Arcade, Attavar — composed for light, monsoon, and measured life.",
  icons: { icon: "/favicon.svg" },
  metadataBase: new URL("https://royalbawabuilders.local"),
  openGraph: {
    title: "Royal Bawa Builders — The Coastal Atelier",
    description:
      "Residences composed for Mangalore’s light, monsoon, and measured life.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ivory font-sans text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-100 focus:bg-ivory focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <div id="main" className="flex min-h-full flex-1 flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
