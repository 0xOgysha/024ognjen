import Image from "next/image";
import Link from "next/link";

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
  return (
    <article className="neon-project-card reveal">
      <Link className="project-cover" href={href} aria-label={`Explore ${project.title}`}>
        <Image src={details.cover} alt={`${project.title} illustrated project cover`} fill sizes="(max-width: 540px) 90vw, (max-width: 900px) 44vw, 23vw" />
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
