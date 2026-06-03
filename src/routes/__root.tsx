import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "RB Auto Tracker — Rastreamento Veicular Premium" },
      { name: "description", content: "Rastreamento veicular com GPS em tempo real, monitoramento 24h e segurança premium para seu veículo." },
      { name: "theme-color", content: "#0a0c14" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "RB Auto Tracker — Rastreamento Veicular Premium" },
      { property: "og:description", content: "Rastreamento veicular com GPS em tempo real, monitoramento 24h e segurança premium." },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
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
  return <Outlet />;
}
