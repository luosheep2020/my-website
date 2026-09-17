"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { routes } from "@/config/site";
import NotFound from "@/app/not-found";

export function RouteGuard({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const enabled = pathname && (
    routes[pathname as keyof typeof routes] ||
    (["/blog", "/work"] as const).some((route) => routes[route] && pathname.startsWith(`${route}/`))
  );
  return enabled ? <>{children}</> : <NotFound />;
}
