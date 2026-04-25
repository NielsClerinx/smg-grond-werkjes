import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import teamImage from "@/assets/about-team.jpg";
import { SectionEyebrow, SectionHeading } from "@/components/Section";

export const Route = createFileRoute("/over-ons")({
  head: () => ({
    meta: [
      { title: "Over ons — SMG Sven Mathijssen Grondwerken" },
      {
        name: "description",
        content:
          "Maak kennis met Sven Mathijssen Grondwerken (SMG) — vakmanschap, betrouwbaarheid en jarenlange ervaring in grond- en afbraakwerken.",
      },
      { property: "og:title", content: "Over SMG — Sven Mathijssen Grondwerken" },
      {
        property: "og:description",
        content: "Vakmanschap en betrouwbaarheid in grond- en afbraakwerken.",
      },
      { property: "og:image", content: teamImage },
      { name: "twitter:image", content: teamImage },
    ],
  }),
  component: OverOnsPage,
});

const stats = [
  { value: "10+", label: "Jaar ervaring" },
  { value: "250+", label: "Projecten" },
  { value: "100%", label: "Tevreden klanten" },
];

function OverOnsPage() {
  return (
    <>
      <section className="bg-charcoal py-20 md:py-28">
        <div className="container-tight grid items-center gap-12 md:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Over SMG"
              title="Vakmanschap met beide voeten in de grond"
              subtitle="Sven Mathijssen Grondwerken staat voor eerlijk werk, sterke materialen en een aanpak waar je op kan bouwen."
              invert
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-elevated">
            <img
              src={teamImage}
              alt="Het team van SMG"
              loading="lazy"
              width={1280}
              height={960}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-tight grid gap-12 md:grid-cols-3">
          <div className="md:col-span-2 space-y-5 leading-relaxed text-foreground/85">
            <SectionEyebrow>Ons verhaal</SectionEyebrow>
            <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-foreground md:text-4xl">
              Een ervaren partner voor uw grond- en afbraakwerken
            </h2>
            <p>
              SMG werd opgericht door Sven Mathijssen vanuit een eenvoudige overtuiging: een werf
              moet vakkundig, veilig en proper aangepakt worden. Geen losse eindjes, geen valse
              beloftes — gewoon stevig werk, op tijd en binnen budget.
            </p>
            <p>
              Vandaag staat SMG bekend voor zijn brede aanpak: van grootschalige grond- en
              afbraakwerken tot fijne renovatiesloop en kleine rioleringswerken. Voor particulieren,
              aannemers en bedrijven.
            </p>
            <p>
              Onze sterkte? Een ervaren machinist achter de stuurknuppel, modern materieel en
              persoonlijk contact van offerte tot oplevering.
            </p>
          </div>

          <div className="space-y-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-lg border border-border bg-card p-6 shadow-card"
              >
                <div className="font-display text-5xl font-black text-primary">{s.value}</div>
                <div className="mt-1 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="container-tight">
          <SectionHeading eyebrow="Onze waarden" title="Waar SMG voor staat" align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                t: "Eerlijkheid",
                d: "Een duidelijke offerte, geen verborgen kosten. Wat afgesproken is, wordt geleverd.",
              },
              {
                t: "Vakmanschap",
                d: "Jaren ervaring achter het stuur en op de werf. Wij weten waar we mee bezig zijn.",
              },
              {
                t: "Betrouwbaarheid",
                d: "Stipt op afspraak, communicatief en oplossingsgericht — van A tot Z.",
              },
            ].map((v) => (
              <div key={v.t} className="rounded-lg bg-card p-7 shadow-card">
                <div className="h-1 w-10 bg-primary" />
                <h3 className="mt-4 font-display text-2xl font-bold uppercase tracking-wide text-foreground">
                  {v.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-amber transition-base hover:brightness-105"
            >
              Werk samen met SMG <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
