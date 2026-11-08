
function About() {
  return (
    <section className="section container" id="about">
      <div className="section-heading">
        <span>ABOUT ME</span>
        <h2>Developer with a practical mindset.</h2>
      </div>

      <div className="about-grid">
        <p>
          I am a Fachinformatiker für Anwendungsentwicklung
          with practical experience in web development.
          I enjoy building modern interfaces and solving
          technical problems.
        </p>

        <p>
          My technical interests include React, JavaScript,
          TypeScript, PHP, Python, Java and database
          technologies. I value clean code, teamwork
          and continuous learning.
        </p>
      </div>
      <div className="hero-buttons">
          {/* <a href="#projects" className="button primary">
            Explore My Work ↗
          </a> */}

          <a
            href="https://mnabi99.github.io/NoCV_onlyWork/about.html"
            target="_blank"
            rel="noreferrer"
            className="button secondary"
          >
            GitHub Profile ↗
          </a>
        </div>
    </section>
  );
}

export default About;
