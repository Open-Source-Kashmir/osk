import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        <h2 className="about-title">About Us</h2>
        <p className="about-text">
          Open Source Kashmir (OSK) is building a thriving open-source ecosystem
          in Kashmir by helping developers <strong>learn</strong>,{" "}
          <strong>collaborate</strong>, and <strong>contribute</strong> to global
          projects. We provide mentorship, guidance, and opportunities to grow as
          contributors in real-world projects.
        </p>


          <div className="about-card">

          <div className="about-card">
            <span className="about-icon">👩‍🏫</span>
            <h3 className="card-title">Mentorship</h3>
            <p>
              Learn directly from experienced mentors and industry leaders who
              guide your open-source journey.
            </p>
          </div>

          <div className="about-card">
            <span className="about-icon">🤝</span>
            <h3 className="card-title">Collaboration</h3>
            <p>
              Work with a vibrant community of developers on real projects,
              building both skills and networks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
