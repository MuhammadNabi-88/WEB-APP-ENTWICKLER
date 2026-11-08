
function Navbar() {
  return (
    <nav className="navbar container">
      <a href="#home" className="logo">
        Muhammad Nabi
        <span> WEB-APP-ENTWICKLER</span>
      </a>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
      </div>

      <a href="#contact" className="nav-button">
        Contact Me ↗
      </a>
    </nav>
  );
}

export default Navbar;
