import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex flex-1 items-center justify-center bg-background px-4 py-24">
        <div className="max-w-md text-center">
          <h1 className="font-display text-8xl font-black text-primary">404</h1>
          <h2 className="mt-4 font-display text-2xl font-bold uppercase text-foreground">
            Pagina niet gevonden
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Deze pagina bestaat niet of werd verplaatst.
          </p>
          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-primary-foreground shadow-amber transition-base hover:brightness-105"
            >
              Terug naar home
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SMG — Sven Mathijssen Grondwerken" },
      {
        name: "description",
        content:
          "Sven Mathijssen Grondwerken (SMG): grond- & afbraakwerken, renovatiesloop, opruimingswerken, verhuur machinist en kleine rioleringswerken.",
      },
      { name: "author", content: "Sven Mathijssen Grondwerken" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "SMG — Sven Mathijssen Grondwerken" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
