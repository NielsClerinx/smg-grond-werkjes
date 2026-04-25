import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal mt-24">
      <div className="container-tight grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-3xl font-extrabold uppercase tracking-wider text-primary">
            SMG
          </div>
          <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-charcoal-foreground/70">
            Sven Mathijssen Grondwerken
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-charcoal-foreground/75">
            Specialist in grond- & afbraakwerken, renovatiesloop, opruimingswerken,
            verhuur machinist en kleine rioleringswerken. Vakmanschap en betrouwbaarheid
            staan centraal.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-primary">
            Navigatie
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-charcoal-foreground/80">
            <li><Link to="/" className="hover:text-primary transition-base">Home</Link></li>
            <li><Link to="/diensten" className="hover:text-primary transition-base">Diensten</Link></li>
            <li><Link to="/over-ons" className="hover:text-primary transition-base">Over ons</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-base">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-primary">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-charcoal-foreground/80">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-primary" />
              <a href="tel:+32000000000" className="hover:text-primary transition-base">
                +32 (0)0 00 00 00
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-primary" />
              <a href="mailto:info@smg-grondwerken.be" className="hover:text-primary transition-base">
                info@smg-grondwerken.be
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-primary" />
              <span>België</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-charcoal-foreground/10">
        <div className="container-tight flex flex-col items-center justify-between gap-2 py-5 text-xs text-charcoal-foreground/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Sven Mathijssen Grondwerken. Alle rechten voorbehouden.</p>
          <p className="uppercase tracking-widest">Vakmanschap sinds dag één</p>
        </div>
      </div>
    </footer>
  );
}
