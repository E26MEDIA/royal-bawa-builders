"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { residences } from "@/lib/site";

const times = [
  "Weekday morning",
  "Weekday evening",
  "Saturday",
  "Sunday",
  "I’ll follow your suggestion",
];

export function VisitForm() {
  const params = useSearchParams();
  const preset = params.get("residence") ?? "nandi-hills";
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("loading");
    setMessage("");
    try {
      const response = await fetch("/api/visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
      setMessage(
        "The viewing desk could not be reached. Write to us on Instagram @royalbawabuilders or visit the Nandigudda office."
      );
    }
  }

  if (status === "ok") {
    return (
      <div className="border border-border bg-card px-6 py-10 md:px-10">
        <p className="text-[0.65rem] tracking-[0.28em] uppercase text-laterite">
          Confirmed in the ledger
        </p>
        <h2 className="font-heading mt-4 text-3xl text-balance">
          We have your request.
        </h2>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
          A member of the atelier will write back to arrange a private viewing
          at the site or at Nandihills Building, Nandigudda. If it is urgent,
          message {""}
          <a
            className="text-foreground underline underline-offset-4"
            href="https://www.instagram.com/royalbawabuilders/"
            target="_blank"
            rel="noreferrer"
          >
            @royalbawabuilders
          </a>
          .
        </p>
        <Button
          type="button"
          className="mt-8 h-11 rounded-none px-6 text-[0.7rem] tracking-[0.22em] uppercase"
          onClick={() => setStatus("idle")}
        >
          Send another request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="border border-border bg-card p-6 md:p-10">
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="name" className="text-[0.65rem] tracking-[0.2em] uppercase">
            Full name
          </Label>
          <Input
            id="name"
            name="name"
            required
            autoComplete="name"
            className="h-11 rounded-none bg-ivory"
            placeholder="Your name"
          />
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label
              htmlFor="phone"
              className="text-[0.65rem] tracking-[0.2em] uppercase"
            >
              Phone
            </Label>
            <Input
              id="phone"
              name="phone"
              required
              type="tel"
              autoComplete="tel"
              className="h-11 rounded-none bg-ivory"
              placeholder="Mobile number"
            />
          </div>
          <div className="grid gap-2">
            <Label
              htmlFor="email"
              className="text-[0.65rem] tracking-[0.2em] uppercase"
            >
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="h-11 rounded-none bg-ivory"
              placeholder="Optional"
            />
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label
              htmlFor="residence"
              className="text-[0.65rem] tracking-[0.2em] uppercase"
            >
              Residence
            </Label>
            <select
              id="residence"
              name="residence"
              defaultValue={
                residences.some((r) => r.slug === preset) ? preset : "nandi-hills"
              }
              className="h-11 rounded-none border border-input bg-ivory px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              {residences.map((residence) => (
                <option key={residence.slug} value={residence.slug}>
                  {residence.name} — {residence.locality}
                </option>
              ))}
              <option value="atelier">A conversation with the atelier</option>
            </select>
          </div>
          <div className="grid gap-2">
            <Label
              htmlFor="when"
              className="text-[0.65rem] tracking-[0.2em] uppercase"
            >
              Preferred time
            </Label>
            <select
              id="when"
              name="when"
              defaultValue={times[4]}
              className="h-11 rounded-none border border-input bg-ivory px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              {times.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid gap-2">
          <Label
            htmlFor="note"
            className="text-[0.65rem] tracking-[0.2em] uppercase"
          >
            How you live
          </Label>
          <Textarea
            id="note"
            name="note"
            rows={5}
            className="min-h-28 rounded-none bg-ivory"
            placeholder="Family size, parking, a view you care about, a timeline — whatever helps us prepare the viewing."
          />
        </div>
        {status === "error" ? (
          <p className="text-sm text-destructive" role="alert">
            {message}
          </p>
        ) : null}
        <Button
          type="submit"
          disabled={status === "loading"}
          className="h-12 rounded-none bg-laterite text-[0.72rem] tracking-[0.22em] uppercase hover:bg-laterite/90"
        >
          {status === "loading" ? "Sending…" : "Request a private viewing"}
        </Button>
        <p className="text-xs leading-relaxed text-muted-foreground">
          This is not a booking. It is a request to walk the site with us. No
          payment is taken here.
        </p>
      </div>
    </form>
  );
}
