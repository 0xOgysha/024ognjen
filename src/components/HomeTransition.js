"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HomeTransition() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const hero = document.querySelector(".hero");
      const heroContent = document.querySelector(".hero-content");
      const nav = document.querySelector(".portfolio-nav");
      const sectionIndicator = document.querySelector(".section-indicator");
      const background = document.querySelector(".interactive-background");
      const corners = document.querySelectorAll(".hero-corner");
      const scrollIndicator = document.querySelector(".scroll-indicator");

      if (!hero) return;

      // VAŽNO:
      // Početno stanje mora biti potpuno vidljivo.
      gsap.set(hero, {
        scale: 1,
        opacity: 1,
        filter: "brightness(1)",
        borderRadius: 0,
      });

      gsap.set(heroContent, {
        scale: 1,
        y: 0,
        opacity: 1,
      });

      gsap.set(nav, {
        opacity: 1,
        y: 0,
      });

      gsap.set(sectionIndicator, {
        opacity: 1,
        x: 0,
      });

      gsap.set(background, {
        opacity: 0.9,
        scale: 1,
      });

      gsap.set(corners, {
        opacity: 1,
      });

      gsap.set(scrollIndicator, {
        opacity: 1,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "+=100%",
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,

          // sprečava čudno početno stanje
          invalidateOnRefresh: true,
        },
      });

      /*
        Prvih ~15% scrolla se ništa ne dešava.

        Korisnik vidi HOME normalno, a tek onda
        počinje transition.
      */

      timeline.to({}, { duration: 0.15 });

      timeline.to(
        heroContent,
        {
          scale: 0.9,
          y: -45,
          opacity: 0,
          ease: "power2.in",
          duration: 0.85,
        },
        0.15
      );

      timeline.to(
        nav,
        {
          y: -30,
          opacity: 0,
          ease: "power2.in",
          duration: 0.45,
        },
        0.15
      );

      timeline.to(
        sectionIndicator,
        {
          x: -40,
          opacity: 0,
          ease: "power2.in",
          duration: 0.45,
        },
        0.15
      );

      timeline.to(
        corners,
        {
          opacity: 0,
          duration: 0.3,
        },
        0.15
      );

      timeline.to(
        scrollIndicator,
        {
          opacity: 0,
          duration: 0.25,
        },
        0.15
      );

      timeline.to(
        background,
        {
          scale: 1.08,
          opacity: 0,
          ease: "power2.in",
          duration: 0.75,
        },
        0.2
      );

      timeline.to(
        hero,
        {
          scale: 0.94,
          filter: "brightness(0.35)",
          borderRadius: "0 0 30px 30px",
          ease: "power2.inOut",
          duration: 0.75,
        },
        0.2
      );
    });

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
    };
  }, []);

  return null;
}