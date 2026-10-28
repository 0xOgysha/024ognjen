"use client";

import "@/styles/CustomCursor.css";


import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor) return;

    const canHover = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;

    if (!canHover || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const moveX = gsap.quickTo(cursor, "x", {
      duration: 0.18,
      ease: "power3.out",
    });

    const moveY = gsap.quickTo(cursor, "y", {
      duration: 0.18,
      ease: "power3.out",
    });

    function handleMouseMove(event) {
      moveX(event.clientX);
      moveY(event.clientY);

      cursor.classList.add("custom-cursor-visible");
    }

    function handleMouseLeave() {
      cursor.classList.remove("custom-cursor-visible");
    }

    function handleMouseEnter() {
      cursor.classList.add("custom-cursor-visible");
    }

    function handlePointerOver(event) {
      const interactive = event.target.closest(
        "a, button, input, textarea, .project-item, .skill-item"
      );

      if (interactive) {
        cursor.classList.add("custom-cursor-hover");
      }
    }

    function handlePointerOut(event) {
      const interactive = event.target.closest(
        "a, button, input, textarea, .project-item, .skill-item"
      );

      if (interactive) {
        cursor.classList.remove("custom-cursor-hover");
      }
    }

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handlePointerOver);
    document.addEventListener("mouseout", handlePointerOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handlePointerOver);
      document.removeEventListener("mouseout", handlePointerOut);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      aria-hidden="true"
    >
      <span className="custom-cursor-horizontal"></span>
      <span className="custom-cursor-vertical"></span>
    </div>
  );
}
