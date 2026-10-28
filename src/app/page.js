"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import OgyAssistant from "@/components/OgyAssistant";
import ProjectCard from "@/components/ProjectCard";
import TechIcon from "@/components/TechIcon";
import NetworkArt from "@/components/NetworkArt";
import "@/styles/Redesign.css";

const navigation = [["Home", "top"], ["Projects", "projects"], ["About", "about"], ["Contact", "contact"]];
const technologies = ["Next.js", "React", "JavaScript", "HTML5", "CSS3", "Supabase", "Bootstrap", "SQL", "Git", "GitHub"];
const services = [
  ["display", "Web Development", "Modern, responsive websites with a focus on performance."],
  ["pencil-square", "UI/UX Design", "Clean and functional interfaces."],
  ["gear", "Custom Solutions", "Tailored development for your specific needs."],
];

function Arrow() { return <i className="bi bi-arrow-right" aria-hidden="true" />; }

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("top");
  const menuButton = useRef(null);

  useEffect(() => {
    const onKey = event => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: "-10% 0px -60% 0px", threshold: 0 });
    navigation.forEach(([, id]) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    const motion = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reveals = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        reveals.unobserve(entry.target);
      }
    }), { threshold: .08 });
    if (motion) document.querySelectorAll(".reveal").forEach(el => reveals.observe(el));
    return () => { observer.disconnect(); reveals.disconnect(); };
  }, []);

  return (
    <main className="neon-page">
      <a className="skip-link" href="#projects">Skip to content</a>
      <section id="top" className="neon-hero" aria-labelledby="hero-title">
        <Image className="neon-hero-art" src="/images/neon-desk.png" alt="" fill preload sizes="100vw" />
        <div className="hero-shade" />
        <div className="edge-grid" aria-hidden="true" />
        <header className="neon-header neon-wrap">
          <a href="#top" className="neon-logo" aria-label="024 Ognjen home">/024</a>
          <nav className="neon-nav" aria-label="Main navigation">
            {navigation.map(([label,id]) => <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined}>{label}</a>)}
          </nav>
          <a className="neon-button outline header-talk" href="mailto:ognjensanjta@gmail.com">Let’s talk <Arrow /></a>
          <button ref={menuButton} className="neon-menu-button" aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation" : "Open navigation"}><i className={`bi bi-${menuOpen ? "x-lg" : "list"}`} aria-hidden="true" /></button>
          <nav className="neon-mobile-nav" id="mobile-navigation" aria-label="Mobile navigation" hidden={!menuOpen}>
            {navigation.map(([label,id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}<Arrow /></a>)}
          </nav>
        </header>
        <div className="neon-hero-body neon-wrap">
          <div className="neon-hero-copy">
            <div className="neon-eyebrow"><span className="tiny-ring" /> PORTFOLIO</div>
            <h1 id="hero-title">Design.<br />Develop.<br /><span>Deliver.<b className="type-cursor" aria-hidden="true" /></span></h1>
            <p>Modern websites, real-world projects and digital solutions with a focus on performance and clean design.</p>
            <div className="neon-actions"><a className="neon-button solid" href="#projects">View Projects <Arrow /></a><a className="neon-button outline" href="#contact">Contact Me</a></div>
            <div className="hero-facts"><div><strong>{projects.length}</strong><span>Projects<br />Showcased</span></div><div><span>Real-world<br />Experience</span></div><div><span>Modern<br />Technologies</span></div></div>
          </div>
          <nav className="hero-index" aria-label="Section shortcuts">{navigation.map(([label,id],i) => <a key={id} href={`#${id}`} aria-label={`${String(i+1).padStart(2,"0")} ${label}`} aria-current={active === id ? "location" : undefined}>{String(i+1).padStart(2,"0")}</a>)}</nav>
          <div className="hero-signature"><span className="signature-icon"><i className="bi bi-box-arrow-up-right" aria-hidden="true" /></span><span>TURNING<br />IDEAS INTO<br />REAL PROJECTS</span></div>
        </div>
      </section>

      <section id="projects" className="neon-work neon-band">
        <div className="neon-wrap">
          <div className="neon-section-top"><div><div className="neon-eyebrow">// FEATURED PROJECTS</div><h2>Selected <span>Work</span></h2></div><Link className="neon-text-link" href="/projects">View All Projects <Arrow /></Link></div>
          <div className="neon-project-grid">{projects.map(project => <ProjectCard project={project} key={project.slug} />)}</div>
        </div>
      </section>

      <div className="neon-about-services neon-band">
        <div className="neon-wrap about-services-grid">
          <section id="about" className="neon-about reveal" aria-labelledby="about-title">
            <Image className="neon-about-art" src="/images/neon-about.png" alt="Illustration of a developer overlooking a city at night" fill sizes="(max-width: 760px) 100vw, 50vw" />
            <div className="about-shade" />
            <div className="neon-about-copy"><div className="neon-eyebrow">// ABOUT ME</div><h2 id="about-title">More Than<br />Just <span>Code.</span></h2><p>I’m a web developer and IT enthusiast who builds modern websites, digital experiences and custom solutions that turn ideas into real projects.</p><details className="about-more"><summary className="neon-button outline">Learn More <Arrow /></summary><p>Based in Belgrade, Serbia. I work with JavaScript, React, Next.js and data-driven web applications — from personal experiments to websites for real businesses.</p><a className="neon-text-link" href="https://github.com/0xOgysha" target="_blank" rel="noreferrer">Explore my GitHub <Arrow /></a></details></div>
          </section>
          <section id="services" className="neon-services reveal" aria-labelledby="services-title"><div className="neon-eyebrow">// WHAT I DO</div><h2 id="services-title">Services & <span>Skills</span></h2><p className="services-intro">From modern websites to custom solutions,<br className="desktop-break" /> I focus on clean design, solid functionality<br className="desktop-break" /> and real-world results.</p><div className="neon-service-grid">{services.map(([icon,title,description]) => <article className="neon-service" key={title}><i className={`bi bi-${icon}`} aria-hidden="true" /><h3>{title}</h3><p>{description}</p></article>)}</div></section>
        </div>
      </div>

      <section id="stack" className="neon-stack neon-band"><div className="neon-wrap"><div className="stack-content reveal"><div className="neon-eyebrow">// TECH STACK</div><h2>Technologies I <span>Use</span></h2><div className="neon-tech-list">{technologies.map(name => <div className="neon-tech" key={name}><TechIcon name={name} /><span>{name}</span></div>)}</div></div><NetworkArt /></div></section>

      <section id="contact" className="neon-contact neon-band"><div className="neon-wrap neon-contact-grid reveal"><div><div className="neon-eyebrow">// LET’S WORK TOGETHER</div><h2>Have a Project in Mind?</h2><p>I’m always open to new opportunities, interesting projects<br className="desktop-break" /> and collaborations. Let’s turn your idea into something great.</p><div className="neon-actions"><a className="neon-button solid" href="mailto:ognjensanjta@gmail.com">Get in Touch <Arrow /></a><Link className="neon-button outline" href="/projects">View Projects</Link></div></div><div className="contact-aside"><p>Whether you need a new website,<br className="desktop-break" /> a custom solution or just want to talk<br className="desktop-break" /> about ideas, feel free to reach out.</p><a href="mailto:ognjensanjta@gmail.com"><Arrow /> Let’s start a conversation</a></div></div></section>

      <footer className="neon-footer"><div className="neon-wrap"><div className="neon-footer-top"><div className="footer-identity"><a className="neon-logo" href="#top">/024</a><p>Design. Develop. Deliver.<br />Web developer & IT enthusiast<br />building digital experiences.</p></div><nav className="footer-nav" aria-label="Footer navigation">{navigation.map(([label,id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav><div className="neon-socials"><a href="https://github.com/0xOgysha" aria-label="GitHub" target="_blank" rel="noreferrer"><i className="bi bi-github" aria-hidden="true" /></a><a href="https://instagram.com/ognjjen_s" aria-label="Instagram" target="_blank" rel="noreferrer"><i className="bi bi-instagram" aria-hidden="true" /></a><a href="https://www.linkedin.com/in/ognjensanjta/" aria-label="LinkedIn" target="_blank" rel="noreferrer"><i className="bi bi-linkedin" aria-hidden="true" /></a><a href="#top" aria-label="Back to top"><i className="bi bi-arrow-up" aria-hidden="true" /></a></div></div><div className="neon-footer-bottom"><span>© {new Date().getFullYear()} 024ognjen. All rights reserved.</span><span>Turning ideas into real projects.</span></div></div></footer>
      <OgyAssistant />
    </main>
  );
}
