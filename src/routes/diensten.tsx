import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Phone } from "lucide-react";
import { SectionEyebrow, SectionHeading } from "@/components/Section";
import { services } from "@/data/services";

export const Route = createFileRoute("/diensten")({
  head: () => ({
    meta: [
      { title: "Diensten — SMG Sven Mathijssen Grondwerken" },
      {
        name: "description",
        content:
          "Ontdek de diensten van SMG: grond- & afbraakwerken, renovatiesloop, opruimingswerken, verhuur machinist en kleine rioleringswerken.",
      },
      { property: "og:title", content: "Diensten — SMG Grondwerken" },
      {
        property: "og:description",
        content:
          "Grond- & afbraakwerken, renovatiesloop, opruimingswerken, verhuur machinist en rioleringswerken.",
      },
    ],
  }),
  component: DienstenPage,
});

function DienstenPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Onze expertise"
            title="Diensten op maat van uw werf"
            subtitle="Van de eerste schop tot de oplevering — wij combineren krachtig materieel met vakkundige uitvoering."
            invert
          />
        </div>
      </section>

      {/* Services list */}
      <section className="py-20">
        <div className="container-tight space-y-20">
          {services.map((s, i) => {
            const Icon = s.icon;
            const reverse = i % 2 === 1;
            return (
              <article
                key={s.slug}
                className="grid items-center gap-10 md:grid-cols-2"
              >
                <div className={reverse ? "md:order-2" : ""}>
                  <div className="overflow-hidden rounded-lg shadow-elevated">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                </div>
                <div className={reverse ? "md:order-1" : ""}>
                  <SectionEyebrow>{`Dienst ${String(i + 1).padStart(2, "0")}`}</SectionEyebrow>
                  <h2 className="mt-3 flex items-center gap-3 font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-foreground md:text-4xl">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary text-primary-foreground">
                      <Icon className="h-5 w-5" strokeWidth={2.5} />
                    </span>
                    {s.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{s.description}</p>
                  <ul className="mt-5 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 flex-none text-primary" strokeWidth={3} />
                      <span>Vakkundige uitvoering met modern materieel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 flex-none text-primary" strokeWidth={3} />
                      <span>Heldere planning en duidelijke communicatie</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 flex-none text-primary" strokeWidth={3} />
                      <span>Werf wordt proper opgeleverd</span>
                    </li>
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-amber transition-base hover:brightness-105"
                  >
                    Vraag offerte <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-charcoal py-16">
        <div className="container-tight flex flex-col items-center gap-5 text-center">
          <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-charcoal-foreground md:text-4xl">
            Iets specifiek nodig?
          </h2>
          <p className="max-w-xl text-charcoal-foreground/75">
            Heeft u een dienst niet teruggevonden? Neem contact op — we denken graag met u mee.
          </p>
          <a
            href="tel:+32000000000"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-amber transition-base hover:brightness-105"
          >
            <Phone className="h-4 w-4" /> Bel SMG
          </a>
        </div>
      </section>
    </>
  );
}
