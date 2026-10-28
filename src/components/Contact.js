import "@/styles/Contact.css";
export default function Contact() {
  return (
    <section id="contact" className="contact-section">

      <div className="contact-label">
        <span>024/04</span>
        <div></div>
        <p>CONTACT</p>
      </div>

      <div className="contact-main">

        <span className="contact-small">
          HAVE AN IDEA?
        </span>

        <h2>
          LET&apos;S
          <br />
          <span>BUILD</span>
          SOMETHING.
        </h2>

        <div className="contact-bottom">

          <p>
            Have a project, idea or just want
            to get in touch?
          </p>

          <a
            href="mailto:ognjensanjta@gmail.com"
            className="contact-button"
          >
            GET IN TOUCH

            <span>↗</span>
          </a>

        </div>

      </div>

    </section>
  );
}