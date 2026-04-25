import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { SectionEyebrow, SectionHeading } from "@/components/Section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — SMG Sven Mathijssen Grondwerken" },
      {
        name: "description",
        content:
          "Neem contact op met SMG voor uw grond- & afbraakwerken, renovatiesloop, opruimingswerken of rioleringswerken. Vrijblijvende offerte op maat.",
      },
      { property: "og:title", content: "Contact — SMG Grondwerken" },
      {
        property: "og:description",
        content: "Vrijblijvende offerte voor grond- en afbraakwerken.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <section className="bg-charcoal py-20 md:py-24">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Contact"
            title="Laten we uw project bespreken"
            subtitle="Bel, mail of stuur een bericht — we helpen u graag verder met een vrijblijvende offerte."
            invert
          />
        </div>
      </section>

      <section className="py-20">
        <div className="container-tight grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="rounded-lg border border-border bg-card p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-md bg-primary/15 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold uppercase tracking-wide">Telefoon</h3>
                  <a
                    href="tel:+32000000000"
                    className="mt-1 block text-sm text-muted-foreground hover:text-primary transition-base"
                  >
                    +32 (0)0 00 00 00
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-md bg-primary/15 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold uppercase tracking-wide">E-mail</h3>
                  <a
                    href="mailto:info@smg-grondwerken.be"
                    className="mt-1 block text-sm text-muted-foreground hover:text-primary transition-base"
                  >
                    info@smg-grondwerken.be
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-md bg-primary/15 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold uppercase tracking-wide">Werkgebied</h3>
                  <p className="mt-1 text-sm text-muted-foreground">België — regio en omstreken</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-md bg-primary/15 text-primary">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold uppercase tracking-wide">Bereikbaar</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Ma — Vr · 07:00 – 18:00</p>
                  <p className="text-sm text-muted-foreground">Za · op afspraak</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-lg border border-border bg-card p-8 shadow-elevated">
            <SectionEyebrow>Stuur een bericht</SectionEyebrow>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight">
              Vraag uw offerte
            </h2>

            {sent ? (
              <div className="mt-8 flex flex-col items-center gap-4 rounded-md border border-primary/40 bg-primary/10 p-8 text-center">
                <CheckCircle2 className="h-12 w-12 text-primary" />
                <h3 className="font-display text-2xl font-bold uppercase tracking-wide">
                  Bedankt!
                </h3>
                <p className="text-sm text-muted-foreground">
                  We hebben uw bericht goed ontvangen en nemen zo snel mogelijk contact met u op.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Naam" name="naam" required />
                  <Field label="Telefoon" name="telefoon" type="tel" required />
                </div>
                <Field label="E-mail" name="email" type="email" required />
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Type werk
                  </label>
                  <select
                    name="type"
                    className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>Kies een dienst…</option>
                    <option>Grond- & Afbraakwerken</option>
                    <option>Renovatiesloop / Binnenafbraak</option>
                    <option>Opruimingswerken</option>
                    <option>Verhuur Machinist</option>
                    <option>Kleine Rioleringswerken</option>
                    <option>Andere</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Beschrijving van uw project
                  </label>
                  <textarea
                    name="bericht"
                    rows={5}
                    required
                    className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Vertel kort wat u wilt laten doen, op welke locatie en wanneer."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-amber transition-base hover:brightness-105 sm:w-auto"
                >
                  Verstuur bericht <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}
