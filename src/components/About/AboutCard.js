import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am{' '}
            <span className="purple">Hibatul Azis Anshari Wihasto </span>
            from <span className="purple"> Semarang, Indonesia.</span>
            <br /> I am an Informatics Engineering Student at Dian Nuswantoro
            University.
            <br />
            <br />
            Beyond academics, my experiences outside of university include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <b>Software Engineer Intern at Azura Labs</b>{' '}
              (Sept 2024 – Nov 2024): Developed full-stack features for the
              Choolifah Open Course website using Express.js, PostgreSQL,
              React.js, Tailwind CSS, and Redux, while also contributing to the
              Patra Logistic project by backfilling data with DBeaver in a
              hybrid work setting.
            </li>
            <br />
            <li className="about-activity">
              <ImPointRight /> <b>Chief Technology Officer at INRAGA</b> (May
              2024 – Oct 2024): Led the development of the INRAGA website using
              Laravel, Bootstrap, and MySQL, implementing key features like
              field rental, event registration, admin management, and payment
              gateway integration in a hybrid work environment.
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
