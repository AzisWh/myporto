import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hibatul Azis Anshari Wihasto </span>
            from <span className="purple"> Semarang, Indonesia.</span>
            <br /> I am a Informatics Engineering Student at Dian Nuswantoro University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Sport Activities like football and badminton
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>"your quotes" </p>
          <footer className="blockquote-footer">aziswh</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
