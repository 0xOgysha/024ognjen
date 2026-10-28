"use client";

import "@/styles/Hero.css";
import { useState } from "react";


import InteractiveBackground from "@/components/InteractiveBackground";
import Projects from "@/components/Projects";
import HomeTransition from "@/components/HomeTransition";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import OgyAssistant from "@/components/OgyAssistant";
import ScrollAnimations from "@/components/ScrollAnimations";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const goToProjects = (event) => {
  event.preventDefault();

  const projects = document.querySelector("#projects");

  if (projects) {
    projects.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
  return (
    <main className="portfolio">
      <HomeTransition />
      <ScrollAnimations />
      <section className="hero">
        <InteractiveBackground />

        <div className="hero-overlay"></div>

        <nav className="portfolio-nav">
          <a href="#" className="brand">
            <span className="brand-number">024/</span>
            <span>OGNJEN</span>
          </a>

          <div className="nav-links">
            <a href="#projects" onClick={goToProjects}>
              Projects
            </a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation"
          >
            MENU
          </button>

          <a
            href="https://github.com/0xOgysha"
            target="_blank"
            rel="noreferrer"
            className="github-nav"
          >
            GitHub
            <span>↗</span>
          </a>
        </nav>

        <div className={`mobile-menu ${mobileMenuOpen ? "mobile-menu-open" : ""}`}>
          <div className="mobile-menu-top">
            <span><b>024/</b>OGNJEN</span>
            <button type="button" onClick={() => setMobileMenuOpen(false)} aria-label="Close navigation">CLOSE ×</button>
          </div>

          <div className="mobile-menu-links">
            <a href="#" onClick={() => setMobileMenuOpen(false)}><span>01</span>HOME</a>
            <a href="#projects" onClick={(event) => { setMobileMenuOpen(false); goToProjects(event); }}><span>02</span>PROJECTS</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}><span>03</span>ABOUT</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}><span>04</span>CONTACT</a>
          </div>

          <div className="mobile-menu-socials">
            <a href="https://github.com/0xOgysha" target="_blank" rel="noreferrer">GITHUB ↗</a>
            <a href="https://instagram.com/ognjjen_s" target="_blank" rel="noreferrer">INSTAGRAM ↗</a>
            <a href="https://www.linkedin.com/in/ognjensanjta/" target="_blank" rel="noreferrer">LINKEDIN ↗</a>
          </div>
        </div>

        <div className="section-indicator">
          <span className="indicator-main">024/01</span>
          <span className="indicator-line"></span>
          <span className="indicator-name">HOME</span>
        </div>

        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="status-dot"></span>
            PERSONAL PORTFOLIO
          </div>

          <h1>
            OGNJEN
            <span className="hero-dot">.</span>
          </h1>

          <div className="hero-bottom">
            <p>
              I build digital experiences,
              <br />
              applications & things for the web.
            </p>

            <div className="hero-actions">
              <a
                href="#projects"
                onClick={goToProjects}
                className="main-button"
              >
                EXPLORE MY WORK
                <span>↓</span>
              </a>

              <a
                href="https://github.com/0xOgysha"
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                GITHUB
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-corner hero-corner-left">
          <span>WEB DEVELOPMENT</span>
          <span>© 2026</span>
        </div>

        <div className="scroll-indicator">
          <span>SCROLL TO EXPLORE</span>

          <div className="scroll-line">
            <div className="scroll-line-inner"></div>
          </div>
        </div>

        <div className="hero-corner hero-corner-right">
          <span>BELGRADE / SERBIA</span>
        </div>
      </section>

      <Projects />
      <About />
      <Contact />
      <Footer />
      <OgyAssistant />
    </main>
  );
}