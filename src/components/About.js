import "@/styles/About.css";
export default function About() {
  const skills = [
    "JavaScript",
    "HTML",
    "CSS",
    "Bootstrap",
    "React",
    "Next.js",
    "SQL",
    "Git",
    "GitHub",
  ];

  return (
    <section id="about" className="about-section">

      <div className="about-top">
        <div className="section-label">
          <span>024/03</span>
          <div></div>
          <p>ABOUT</p>
        </div>

        <span className="about-index">
          PERSONAL / PROFILE
        </span>
      </div>

      <div className="about-main">

        <div className="about-title">
          <span className="about-small">
            A LITTLE BIT ABOUT ME
          </span>

          <h2>
            I BUILD
            <br />
            <span>DIGITAL</span>
            <br />
            THINGS.
          </h2>
        </div>

        <div className="about-content">

          <div className="about-copy">
            <p className="about-lead">
              I&apos;m Ognjen, a developer based in
              Belgrade, Serbia.
            </p>

            <p>
              I enjoy building web applications,
              experimenting with new ideas and turning
              concepts into functional digital products.
            </p>

            <p>
              My work ranges from personal projects and
              university work to applications created
              for real-world use.
            </p>
          </div>

          <div className="about-location">
            <span>BASED IN</span>

            <strong>
              BELGRADE
              <br />
              SERBIA
            </strong>

            <small>
              44.8° N / 20.4° E
            </small>
          </div>

        </div>

      </div>

      <div className="skills-area">

        <div className="skills-heading">
          <span>TOOLS / TECHNOLOGIES</span>
          <span>024/STACK</span>
        </div>

        <div className="skills-grid">

          {skills.map((skill, index) => (
            <div className="skill-item" key={skill}>

              <span className="skill-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <strong>
                {skill}
              </strong>

              <span className="skill-plus">
                +
              </span>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}