import { Link } from "@tanstack/react-router";
import { ArrowRight, type LucideIcon } from "lucide-react";

export type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  number: string;
};

export function ServiceCard({ icon: Icon, title, description, image, number }: ServiceCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-lg bg-card shadow-card transition-base hover:-translate-y-1 hover:shadow-elevated">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-transparent" />
        <div className="absolute left-4 top-4 inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-amber">
          <Icon className="h-6 w-6" strokeWidth={2.5} />
        </div>
        <div className="absolute right-4 top-4 font-display text-3xl font-black text-primary/90">
          {number}
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="font-display text-2xl font-bold uppercase leading-tight tracking-tight text-charcoal-foreground">
            {title}
          </h3>
        </div>
      </div>
      <div className="p-5">
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
        <Link
          to="/contact"
          className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary transition-base hover:gap-3"
        >
          Vraag offerte aan <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
