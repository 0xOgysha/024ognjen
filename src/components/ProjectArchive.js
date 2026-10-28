"use client";
import { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import OgyAssistant from "@/components/OgyAssistant";
import "@/styles/Redesign.css";

export default function ProjectArchive() {
  const [filter, setFilter] = useState("all");
  return <main className="neon-page archive-page"><header className="neon-header neon-wrap"><Link className="neon-logo" href="/">/024</Link><Link className="neon-text-link" href="/#projects">← Back to home</Link></header><section className="neon-wrap archive-section" id="projects"><div className="neon-eyebrow">// PROJECT ARCHIVE</div><h1>All <span>Projects</span></h1><p>Real-world work and personal explorations. A closer look at the things I build.</p><div className="archive-filters" role="group" aria-label="Filter projects">{[["all","All projects"],["real-world","Real-world"],["personal","Personal"]].map(([value,label]) => <button key={value} aria-pressed={filter===value} onClick={()=>setFilter(value)}>{label}<span>{value==="all" ? projects.length : projects.filter(p=>p.category===value).length}</span></button>)}</div><div className="neon-project-grid">{projects.filter(p=>filter==="all"||p.category===filter).map(project=><ProjectCard key={project.slug} project={project} />)}</div></section><OgyAssistant /></main>;
}
