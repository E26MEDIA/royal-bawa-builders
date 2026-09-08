# Royal Bawa Builders — The Coastal Atelier

A premium website for [Royal Bawa Builders](https://www.instagram.com/royalbawabuilders/), a Mangalore residential atelier.

The site is not a property portal. It is framed as a **private coastal atelier**: residences as collections, a monsoon-first material language (laterite, teak, brass, lime), RERA numbers shown as civic fact, and a viewing desk instead of a lead form.

## Collections on the site

- **Nandi Hills** — Kankanady. 40 residences, 3 BHK at 1,350 sq. ft., possession December 2028. RERA `PRM/KA/RERA/1257/334/PR/081025/008145`.
- **Royal Arcade** — Attavar. 2 & 3 BHK, possession February 2024. RERA `PRM/KA/RERA/1257/334/PR/180924/007036`.

Office: Nandihills Building, Nandigudda, Mangalore 575001.

Photography is atmospheric stand-in imagery for art direction. Replace with the atelier’s own site photographs before a public launch.

## Run locally

```bash
npm install
npm run dev -- --port 4317 --hostname 127.0.0.1
```

Open [http://127.0.0.1:4317](http://127.0.0.1:4317).

```bash
npm run build
npm start
```

The private-viewing form posts to `/api/visit` and confirms on screen. It does not send email until you connect a mailbox or CRM.

## Stack

Next.js, TypeScript, Tailwind CSS, and shadcn/ui.
