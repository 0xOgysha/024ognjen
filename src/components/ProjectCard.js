"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projectPreviews } from "@/data/projectPreviews";

const presentation = {
  "pljeskovac-016": {
    cover: "/images/cover-pljeskovac.png",
    category: "RESTAURANT WEBSITE",
    summary: "Modern website for a restaurant with menu, delivery zones and online ordering information.",
  },
  "andjini-sladoledi": {
    cover: "/images/cover-sladoledi.png",
    category: "BUSINESS WEBSITE",
    summary: "Ice cream business website with live location, product showcase and an admin panel.",
  },
  "andja-i-kolaci": {
    cover: "/images/cover-kolaci.png",
    category: "BUSINESS WEBSITE",
    summary: "Bakery website with a product catalog, categories, contact form and an admin panel.",
  },
  amongmp: {
    cover: "/images/cover-amongmp.png",
    category: "PERSONAL PROJECT",
    summary: "A multiplayer project with custom gameplay systems, player roles and database integration.",
  },
};

export default function ProjectCard({ project }) {
  const details = presentation[project.slug];
  const href = `/projects/${project.slug}`;
  const frames = projectPreviews[project.slug];
  const [prepared, setPrepared] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  const [failed, setFailed] = useState(false);
  const loadedSources = useRef(new Set());
  const playing = Boolean(frames && !failed && loadedCount === frames.length && (hovered || focused));

  function preparePreview() {
    if (!frames || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
    setPrepared(true);
    return true;
  }

  function imageLoaded(src) {
    loadedSources.current.add(src);
    setLoadedCount(loadedSources.current.size);
  }

  return (
    <article
      className="neon-project-card reveal"
      data-preview-active={playing ? "true" : undefined}
      onPointerEnter={event => {
        if (event.pointerType !== "touch" && window.matchMedia("(hover: hover) and (pointer: fine)").matches && preparePreview()) setHovered(true);
      }}
      onPointerLeave={() => setHovered(false)}
      onFocusCapture={() => { if (preparePreview()) setFocused(true); }}
      onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}
    >
      <Link className="project-cover" href={href} aria-label={`Explore ${project.title}`}>
        <Image className="project-cover-art" src={details.cover} alt={`${project.title} illustrated project cover`} fill sizes="(max-width: 540px) 90vw, (max-width: 900px) 44vw, 23vw" />
        {frames && <span className="preview-hint" aria-hidden="true"><i className="bi bi-play-fill" /> Preview</span>}
        {prepared && frames && !failed && <div className="project-preview" aria-hidden="true">
          <div className="preview-browser"><span>● ● ●</span><span>PROJECT PREVIEW</span><i /></div>
          <div className="preview-viewport"><div className="preview-track">
            {frames.map(frame => <Image
              key={frame.src}
              src={frame.src}
              alt=""
              width={frame.width}
              height={frame.height}
              sizes="(max-width: 600px) 88vw, (max-width: 900px) 44vw, 23vw"
              loading="eager"
              onLoad={() => imageLoaded(frame.src)}
              onError={() => setFailed(true)}
            />)}
          </div></div>
          <span className="preview-progress" />
        </div>}
      </Link>
      <div className="neon-card-body">
        <span className="card-category">/ {details.category}</span>
        <h3><Link href={href}>{project.title}</Link></h3>
        <p>{details.summary}</p>
        <div className="neon-tags">{project.technologies.slice(0, 4).map(tech => <span key={tech}>{tech}</span>)}</div>
        <Link className="neon-circle" href={href} aria-label={`View ${project.title}`}><i className="bi bi-arrow-up-right" aria-hidden="true" /></Link>
      </div>
    </article>
  );
}
