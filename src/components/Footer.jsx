import React, { useState } from "react";
import "./Footer.css";

export default function Footer() {
  const [copy, setCopy] = useState("Click to copy");

  function copyText() {
    navigator.clipboard.writeText("kevlays@gmail.com");
    setCopy("Copied!");
  }

  function handleMouseEnter() {
    document.querySelector('.text-title').classList.add('show');
  }
  
  function handleMouseLeave() {
    document.querySelector('.text-title').classList.remove('show');
    setTimeout(() => {
      setCopy("Click to copy");
    }, 300);
  }

  return (
    <section id="footer">
      <div className="container">
        <div className="contact-info-container">

          <div className="contact-info-wrapper">
            <h3 className="email" 
                onClick={copyText}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
              kevlays@gmail.com
            </h3>
            <h6 className="text-title">{copy}</h6>
          </div>

          <div className="link-container">
            <a
              href="https://www.linkedin.com/in/kevin-ley/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              className="linkedin"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/kev-a-dev"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              className="github"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://docs.google.com/document/d/1hAD40ZusmobQlxcQbFsc9lrMJzHhA7f_Bs64Z4tuE0g/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
              title="Resume"
              className="resume"
            >
              <i className="fa-regular fa-file-pdf"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
