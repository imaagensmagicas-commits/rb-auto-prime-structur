import {
  Outlet,
  ScrollRestoration,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "RB Auto Tracker — Rastreamento Veicular Premium" },
      { name: "description", content: "Rastreamento veicular com GPS em tempo real, monitoramento 24h e segurança premium para seu veículo." },
      { name: "theme-color", content: "#0a0c14" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Outlet />
      <ScrollRestoration />
    </>
  );
}
