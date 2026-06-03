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
      { title: "RB Auto Tracker | Rastreamento Veicular Premium em Belo Horizonte" },
      { name: "description", content: "Proteja seu veículo com a RB Auto Tracker. Rastreamento GPS de alta precisão, monitoramento 24h e controle total pelo celular em Belo Horizonte e região." },
      { name: "theme-color", content: "#0a0c14" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "RB Auto Tracker | Rastreamento Veicular Premium em Belo Horizonte" },
      { property: "og:description", content: "Proteja seu veículo com a RB Auto Tracker. Rastreamento GPS de alta precisão, monitoramento 24h e controle total pelo celular em Belo Horizonte e região." },
      { property: "og:image", content: "/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "RB Auto Tracker | Rastreamento Veicular Premium em Belo Horizonte" },
      { name: "twitter:description", content: "Proteja seu veículo com a RB Auto Tracker. Rastreamento GPS de alta precisão, monitoramento 24h e controle total pelo celular em Belo Horizonte e região." },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" }
    ],
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
