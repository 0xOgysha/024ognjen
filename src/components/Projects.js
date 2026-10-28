"use client";

import "@/styles/Projects.css";


import { useState } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import Link from "next/link";


const filters = [
  { value: "all", label: "All projects" },
  { value: "real-world", label: "Real-world" },
  { value: "university", label: "University" },
  { value: "personal", label: "Personal" },
  { value: "experiments", label: "Experiments" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <section id="projects" className="projects-section">
      <div className="projects-top">
        <div className="projects-section-number">
          <span>024/02</span>
          <div></div>
          <p>PROJECTS</p>
        </div>

        <p className="projects-intro">
          Selected projects, experiments and things
          I&apos;ve built along the way.
        </p>
      </div>

      <div className="projects-layout">
        <aside className="projects-sidebar">
          <p className="filter-label">FILTER BY</p>

          <div className="filter-list">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() =>
                  setActiveFilter(filter.value)
                }
                className={
                  activeFilter === filter.value
                    ? "filter-button active"
                    : "filter-button"
                }
              >
                <span>{filter.label}</span>

                {filter.value === "all" && (
                  <small>
                    {String(projects.length).padStart(
                      2,
                      "0"
                    )}
                  </small>
                )}
              </button>
            ))}
          </div>

          <div className="sidebar-bottom">
            <span>024/OGNJEN</span>
            <p>PROJECT ARCHIVE</p>
          </div>
        </aside>

        <div className="projects-content">
          <div className="projects-heading">
            <h2>
              SELECTED
              <br />
              <span>WORK.</span>
            </h2>

            <span className="project-count">
              {String(filteredProjects.length).padStart(
                2,
                "0"
              )}{" "}
              PROJECTS
            </span>
          </div>

          <div className="project-list">
            {filteredProjects.map((project) => (
              <article
                className="project-item"
                key={project.id}
              >
                <div className="project-number">
                  /{project.id}
                </div>

                <div className="project-preview">
                    {project.image ? (
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={900}
                        height={600}
                    />
                    ) : (
                    <div className="project-placeholder">
                      <span>
                        024/{project.id}
                      </span>

                      <p>PROJECT PREVIEW</p>
                    </div>
                  )}
                </div>

                <div className="project-information">
                  <div className="project-meta">
                    <span>
                      {project.categoryLabel}
                    </span>
                    <span>{project.year}</span>
                  </div>

                  <h3>{project.title}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-technologies">
                    {project.technologies.map(
                      (technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      )
                    )}
                  </div>

                  <div className="project-bottom">
                    <span
                      className={
                        project.status === "COMPLETED"
                          ? "project-status completed"
                          : "project-status"
                      }
                    >
                      <i></i>
                      {project.status}
                    </span>

                    <Link
                    href={`/projects/${project.slug}`}
                    className="view-project"
                    >
                    VIEW PROJECT
                    <span>↗</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}