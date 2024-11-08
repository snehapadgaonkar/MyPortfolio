import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I'm <span className="purple">Sneha Padgaonkar </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />
            I am currently a Third-year Computer Science student at Symbiosis
            Institute of Technology, Pune with a passion for web development and
            data science.
            <br />
            I love exploring new technologies, solving problems, and working on
            personal projects.
            <br />
            <br />
            Apart from coding, some other activities that u'll find me doing
            are:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Singing & Sketching
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading books
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Table Tennis
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code with purpose, build with impact."{" "}
          </p>
          <footer className="blockquote-footer">Sneha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
