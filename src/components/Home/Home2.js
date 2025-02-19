import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Tilt from 'react-parallax-tilt';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: '2.6em' }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I have a deep passion for software engineering and UI/UX Design,
              and I believe I’ve gained some valuable knowledge along the way
              🤷‍♂️.
              <br />
              <br /> I am proficient in programming languages such as
              <i>
                <b className="purple"> Javascript and PHP. </b>
              </i>
              <br />
              <br />
              My areas of interest include &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> as well
                as exploring <b className="purple">Ui/Ux Design.</b>
              </i>
              <br />
              <br />I am also passionate about utilizing{' '}
              <b className="purple">Library and Framework</b>
              &nbsp; like
              <i>
                <b className="purple">
                  {' '}
                  Laravel, ReactJs, React Native, VueJs and NextJs
                </b>
              </i>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AzisWh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons">
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/hibatulazis/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons">
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/azisaw_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons">
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
