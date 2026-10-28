import "@/styles/Footer.css";
export default function Footer() {
  return (
    <footer className="portfolio-footer">

      <div className="footer-top">

        <div className="footer-brand">
          <span className="brand-number">
            024/
          </span>
          OGNJEN
        </div>

        <p className="footer-signature">
          made somewhere between an idea
          and too much coffee.
        </p>

        <div className="footer-socials">

          <a
            href="https://github.com/0xOgysha"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <i className="bi bi-github"></i>
          </a>

          <a
            href="https://instagram.com/ognjjen_s"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <i className="bi bi-instagram"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/ognjensanjta/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <i className="bi bi-linkedin"></i>
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        <span>
          © 2026 OGNJEN SANJTA
        </span>

        <span>
          BELGRADE / SERBIA
        </span>

        <a href="#">
          BACK TO TOP ↑
        </a>

      </div>

    </footer>
  );
}