"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "@/lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    // Expose instance so scrollTo utility can reach it
    (window as unknown as { __lenis: typeof lenis }).__lenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);
    const onTick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    // Intercept ALL anchor-link clicks so Lenis handles them with correct offset
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as Element).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const section = document.querySelector(href) as HTMLElement | null;
      if (!section) return;
      e.preventDefault();
      const heading = section.querySelector("h1, h2, h3, span[class*='tracking']") as HTMLElement | null;
      const target = heading ?? section;
      const navbar = document.querySelector("header") as HTMLElement | null;
      const offset = -((navbar ? navbar.offsetHeight : 64) + 28);
      lenis.scrollTo(target, { offset, duration: 1.0 });
    };
    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      gsap.ticker.remove(onTick);
      lenis.destroy();
      delete (window as unknown as { __lenis?: unknown }).__lenis;
    };
  }, []);

  return <>{children}</>;
}
