import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, ShieldCheck, Clock, Award, Wrench } from "lucide-react";
import heroImage from "@/assets/hero-excavator.jpg";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionEyebrow, SectionHeading } from "@/components/Section";
import { services } from "@/data/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SMG — Sven Mathijssen Grondwerken | Grond- & afbraakwerken" },
      {
        name: "description",
        content:
          "SMG — Sven Mathijssen Grondwerken: vakkundige grond- & afbraakwerken, renovatiesloop, opruimingswerken, verhuur machinist en kleine rioleringswerken.",
      },
      {
        property: "og:title",
        content: "SMG — Sven Mathijssen Grondwerken",
      },
      {
        property: "og:description",
        content:
          "Vakkundige grond- & afbraakwerken, renovatiesloop, opruimingswerken en kleine rioleringswerken.",
      },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: HomePage,
});

const usps = [
  { icon: ShieldCheck, title: "Veilig & verzekerd", text: "Werken volgens de strengste veiligheidsnormen." },
  { icon: Clock, title: "Stipt op afspraak", text: "Wij houden ons aan de planning en deadlines." },
  { icon: Award, title: "Vakmanschap", text: "Jarenlange ervaring in grond- en afbraakwerken." },
  { icon: Wrench, title: "Modern materieel", text: "Goed onderhouden machines voor elk werk." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImage}
          alt="Graafmachine aan het werk op een grondwerf"
          width={1920}
          height={1280}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 gradient-hero-overlay" />

        <div className="container-tight relative flex min-h-[88vh] flex-col justify-end pb-20 pt-32 md:min-h-[90vh] md:pb-28">
          <div className="max-w-3xl">
            <SectionEyebrow>Sven Mathijssen Grondwerken</SectionEyebrow>
            <h1 className="mt-5 font-display text-5xl font-black uppercase leading-[0.95] tracking-tight text-charcoal-foreground sm:text-6xl md:text-7xl lg:text-8xl">
              Stevige grond.
              <br />
              <span className="text-primary">Sterk werk.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal-foreground/85">
              Van uitgraven en afbreken tot opruimen en rioleringswerken — SMG levert
              vakwerk met krachtig materieel en een ervaren machinist.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/diensten"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-amber transition-base hover:brightness-105"
              >
                Onze diensten <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border-2 border-charcoal-foreground/30 bg-charcoal-foreground/10 px-7 py-4 text-sm font-bold uppercase tracking-wider text-charcoal-foreground backdrop-blur-sm transition-base hover:bg-charcoal-foreground/20"
              >
                <Phone className="h-4 w-4" /> Vraag offerte
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom amber bar */}
        <div className="absolute bottom-0 left-0 right-0 h-2 gradient-amber" />
      </section>

      {/* USPs */}
      <section className="bg-charcoal py-16">
        <div className="container-tight grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {usps.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-md bg-primary/15 text-primary">
                <Icon className="h-6 w-6" strokeWidth={2.25} />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold uppercase tracking-wide text-charcoal-foreground">
                  {title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-charcoal-foreground/70">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24">
        <div className="container-tight">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Wat we doen"
              title="Onze diensten"
              subtitle="Een complete aanpak voor grond- en afbraakwerken: van eerste schop tot opgeleverde werf."
            />
            <Link
              to="/diensten"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary hover:gap-3 transition-base"
            >
              Alle diensten <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard
                key={s.slug}
                icon={s.icon}
                title={s.title}
                description={s.short}
                image={s.image}
                number={String(i + 1).padStart(2, "0")}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-charcoal py-20 pattern-stripes">
        <div className="container-tight relative grid items-center gap-10 md:grid-cols-[1.5fr_1fr]">
          <div>
            <SectionEyebrow>Klaar om te starten?</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-tight tracking-tight text-charcoal-foreground md:text-5xl">
              Plan vandaag uw project.
              <br />
              <span className="text-primary">Vrijblijvende offerte.</span>
            </h2>
            <p className="mt-4 max-w-xl text-charcoal-foreground/75">
              Vertel ons over uw werf en u krijgt snel een eerlijk advies en een duidelijke prijs.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <a
              href="tel:+32000000000"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 text-base font-bold uppercase tracking-wider text-primary-foreground shadow-amber transition-base hover:brightness-105"
            >
              <Phone className="h-5 w-5" /> Bel direct
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-charcoal-foreground/25 px-8 py-4 text-base font-bold uppercase tracking-wider text-charcoal-foreground transition-base hover:bg-charcoal-foreground/10"
            >
              Stuur bericht <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
