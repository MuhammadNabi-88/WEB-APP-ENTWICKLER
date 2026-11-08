
function Contact() {
  return (
    <footer className="contact-section container" id="contact">
      <div>
        <span>GET IN TOUCH</span>
        <h2>Let's build something meaningful.</h2>
        <p>
          Based in Metzingen, Germany.
          Open to suitable IT opportunities.
        </p>
      </div>

      <div className="contact-links">
        <a href="mailto:muhmdnabi.dev@yahoo.com">Email Me ↗</a>
        <a href="tel:015256468537">Call Me</a>
        <a href="https://github.com/"
           target="_blank" rel="noreferrer">GitHub ↗</a>
        <a href="https://mnabi99.github.io/NoCV_onlyWork/"
           target="_blank" rel="noreferrer">Portfolio ↗</a>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Muhammad Nabi.
        Built with React.
      </div>
    </footer>
  );
}

export default Contact;
