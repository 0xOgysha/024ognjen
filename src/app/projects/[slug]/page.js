import "@/styles/ProjectPage.css";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return {
      title: "024ognjen — project",
    };
  }

  return {
    title: `024ognjen — ${project.title.toLowerCase()}`,
    description: project.description,
  };
}

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="project-page">

      {/* NAVIGATION */}

      <nav className="project-page-nav">
        <Link href="/" className="brand">
          <span className="brand-number">/024</span>
        </Link>

        <Link
          href="/#projects"
          className="back-projects"
        >
          <span>←</span>
          BACK TO PROJECTS
        </Link>
      </nav>

      {/* HERO */}

      <section className="project-page-hero">

        <div className="project-page-label">
          <span>
            024/{project.id}
          </span>

          <div></div>

          <p>
            PROJECT
          </p>
        </div>

        <div className="project-page-meta">
          <span>
            {project.categoryLabel}
          </span>

          <span>
            {project.year}
          </span>

          <span className="project-page-status">
            <i></i>
            {project.status}
          </span>
        </div>

        <h1>
          {project.title}
          <span>.</span>
        </h1>

        <div className="project-page-intro">

          <p>
            {project.description}
          </p>

          <div className="project-page-actions">

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="project-primary-action"
              >
                LIVE PROJECT
                <span>↗</span>
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-secondary-action"
              >
                GITHUB
                <span>↗</span>
              </a>
            )}

          </div>
        </div>

      </section>

      {/* LARGE PREVIEW */}

      <section className="project-showcase">

        <div className="project-showcase-content">

            {project.image ? (

                <div className="project-showcase-image">

                <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    width={1920}
                    height={1080}
                    priority
                />

                </div>

            ) : (

                <div className="project-showcase-placeholder">

                <span>
                    024/{project.id}
                </span>

                <strong>
                    {project.title}
                </strong>

                <p>
                    PROJECT PREVIEW
                </p>

                </div>

            )}

            </div>
      </section>

      {/* INFORMATION */}

      <section className="project-details">

        <div className="project-details-title">

          <span>
            01 / OVERVIEW
          </span>

          <h2>
            ABOUT THE
            <br />
            PROJECT.
          </h2>

        </div>

        <div className="project-details-content">

          <p>
            {project.description}
          </p>

          <div className="project-tech-block">

            <span className="project-detail-label">
              TECHNOLOGIES
            </span>

            <div className="project-detail-technologies">

              {project.technologies.map(
                (technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                )
              )}

            </div>

          </div>

          <div className="project-info-grid">

            <div>
              <span>TYPE</span>
              <p>{project.categoryLabel}</p>
            </div>

            <div>
              <span>YEAR</span>
              <p>{project.year}</p>
            </div>

            <div>
              <span>STATUS</span>
              <p>{project.status}</p>
            </div>

          </div>

        </div>

      </section>

      {/* NEXT */}

      <section className="project-page-bottom">

        <span>
          024/OGNJEN
        </span>

        <Link href="/#projects">
          EXPLORE OTHER PROJECTS
          <span>↗</span>
        </Link>

      </section>
    <section className="project-features">

        <div className="project-features-header">

            <span>
            02 / FEATURES
            </span>

            <h2>
            WHAT&apos;S
            <br />
            INSIDE.
            </h2>

        </div>

        <div className="project-features-list">

            {project.features?.map((feature, index) => (

            <div
                className="project-feature"
                key={feature}
            >

                <span>
                {String(index + 1).padStart(2, "0")}
                </span>

                <strong>
                {feature}
                </strong>

                <i>
                +
                </i>

            </div>

            ))}

        </div>

    </section>

            {project.screenshots?.length > 0 && (

    <section className="project-gallery">

        <div className="project-gallery-heading">

        <span>
            03 / GALLERY
        </span>

        <span>
            {String(project.screenshots.length).padStart(
            2,
            "0"
            )} IMAGES
        </span>

        </div>

        <div className="project-gallery-grid">

        {project.screenshots.map(
            (screenshot, index) => (

            <div
                className="project-gallery-image"
                key={screenshot}
            >

                <div className="gallery-number">
                /{String(index + 1).padStart(2, "0")}
                </div>

                <Image
                src={screenshot}
                alt={`${project.title} screenshot ${index + 1}`}
                width={1600}
                height={900}
                />

            </div>

            )
        )}

        </div>

    </section>

    )}
    </main>
  );
}
