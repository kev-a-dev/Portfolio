import React from "react";
import "./About.css";

// images
import la from "../assets/la.jpeg";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="title-info-wrapper">
          <h1 className="title">
            Hi, I'm <span>Kevin Ley</span>
          </h1>

          <h1 className="info">
            I'm a <span>Berkeley Grad, Project Manager, and Frontend Engineer</span> with 3 years of project management experience supporting technical projects. Currently I
            am located in <span>Los Angeles</span>.
          </h1>

          <div className="link-container">
            <a
              href="https://www.linkedin.com/in/kevin-ley/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              className="linkedin"
            >
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/kev-a-dev"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              className="github"
            >
              <i class="fa-brands fa-github"></i>
            </a>
            <a
              href="https://docs.google.com/document/d/1iS4ApsKwhtT1au4kFzpIzokazKexeBnJkjQIOH7GCeI/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
              title="Resume"
              className="resume"
            >
              <i class="fa-regular fa-file-pdf"></i>
            </a>
          </div>
        </div>

        <div className="img-wrapper">
          <img src={la} alt="" className="la" />
        </div>
      </div>
    </section>
  );
}
