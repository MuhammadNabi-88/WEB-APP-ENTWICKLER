
import { useEffect, useState } from "react";

function Hero() {
  const roles = [
    "Web Developer.",
    "Frontend Developer.",
    "React Developer.",
    "Problem Solver."
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let position = 0;
    let deleting = false;

    const timer = setInterval(() => {
      const word = roles[index];

      if (!deleting) {
        position++;
        setText(word.slice(0, position));

        if (position >= word.length) deleting = true;
      } else {
        position--;
        setText(word.slice(0, position));

        if (position <= 0) {
          deleting = false;
          setIndex((old) => (old + 1) % roles.length);
        }
      }
    }, 100);

    return () => clearInterval(timer);
  }, [index]);

  return (
    <header className="hero container" id="home">
      <div className="hero-main">
        <span className="eyebrow">
          SOFTWARE DEVELOPMENT ·
        </span>

        <h1>
          <span className="typing-text">{text}</span>
          <span className="cursor">|</span>
          <br />
          Problem Solver.
          <br />
          <span>From Metzingen.</span>
        </h1>

        <p className="hero-description">
          Fachinformatiker für Anwendungsentwicklung
          specializing in modern web development,
          frontend engineering and practical software solutions.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="button primary">
            Explore My Work ↗
          </a>

          <a
            href="https://github.com/MNabi99"
            target="_blank"
            rel="noreferrer"
            className="button secondary"
          >
            GitHub Profile ↗
          </a>
        </div>
      </div>

      <div className="availability">
        <span className="status-dot"></span>
        <strong>Professional Profile</strong>
        <p>
          Metzingen, Germany<br />
          Web Developer · Frontend Developer<br />
          Open to suitable IT opportunities
        </p>
      </div>
    </header>
  );
}

export default Hero;
