import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import flutter from "../../Assets/Projects/apiflutter.png";
import Particle from "../Particle";
import punggur from "../../Assets/Projects/punggur.png";
import absensi from "../../Assets/Projects/absensi.png";
import inraga from "../../Assets/Projects/inraga.jpeg";
import adminui from "../../Assets/Projects/adminui.png";
import labmatics from "../../Assets/Projects/labmatics.png";
import jwtauth from "../../Assets/Projects/jwtauth.png";
import digitalist from "../../Assets/Projects/digitalist.png";
import expoapp from "../../Assets/Projects/expoapp.png";

const projectsData = [
  {
    imgPath: punggur,
    title: "Punggur Besar Profile Website",
    description: "Building Website as a contributor using NextJs and Vercel.",
    tags: [
      { name: "NextJs", color: "info" },
      { name: "Vercel", color: "success" },
    ],
    ghLink: "https://github.com/raihanfaiq/punggurbesar",
    demoLink: "https://punggurbesar-web.vercel.app/",
  },

  {
    imgPath: absensi,
    title: "Online Presence Website",
    description: "Developing a website as a requirement for my internship course. The website is designed to manage the attendance of interns based on selfie and location at Humas Pemerintah Kota Semarang.",
    tags: [
      { name: "Laravel", color: "primary" },
      { name: "MySql", color: "success" },
      { name: "Bootstrap", color: "danger" },
      { name: "Geo Location", color: "info" },
    ],
    ghLink: "https://github.com/AzisWh/Absensi-App-Laravel",
    demoLink: "#",
  },
  {
    imgPath: digitalist,
    title: "Digitalist Company Profile",
    description: "Contributed to the development of the digitalist company profile website using nextjs and prismic slice machine.",
    tags: [
      { name: "NextJs", color: "primary" },
      { name: "Tailwind", color: "success" },
      { name: "Prismic", color: "danger" },
    ],
    ghLink: "https://github.com/raihanfaiq/digitalist",
    demoLink: "https://digitalist.vercel.app/",
  },
];

const OnGoingProjects = [
  {
    imgPath: inraga,
    title: "Inraga Website",
    description: "P2MW (Program Pembinaan Mahasiswa Wirausaha) Website, have 5 main features (rent, looking for battle and trainer, event tickets and e-commerce ) with payment using xendit",
    tags: [
      { name: "Laravel", color: "primary" },
      { name: "MySql", color: "success" },
      { name: "Bootstrap", color: "danger" },
    ],
    ghLink: "#",
    demoLink: "https://inraga.id/",
  },
];

const MiniProjectsData = [
  {
    imgPath: flutter,
    title: "Fetch API Using Flutter ",
    description: "Practicing my skills in developing applications with Dart as well as implementing APIs into the applications created.",
    tags: [
      { name: "Dart", color: "info" },
      { name: "Postman", color: "success" },
    ],
    ghLink: "https://github.com/AzisWh/fetchapi-flutter",
    demoLink: "#",
  },
  {
    imgPath: expoapp,
    title: "React Native Mobile App",
    description: "Developing applications with React Native and integrating APIs using Firebase.",
    tags: [
      { name: "React Native", color: "info" },
      { name: "Firebase", color: "success" },
    ],
    ghLink: "https://github.com/AzisWh/expo-app-fimabeauty",
    demoLink: "#",
  },
  {
    imgPath: adminui,
    title: "Client Side Programming Final Project",
    description: "developing a website as a final assignment for a client-side programming course, using ReactJS, SCSS and Firebase. ",
    tags: [
      { name: "ReactJs", color: "primary" },
      { name: "FireBase", color: "success" },
      { name: "SCSS", color: "danger" },
    ],
    ghLink: "https://github.com/AzisWh/admin-ui",
    demoLink: "https://admin-ui-weld.vercel.app/",
  },
  {
    imgPath: labmatics,
    title: "Lab Matics Profile Website",
    description: "Developing a website for the Udinus Matics lab which has admin features to manage the content of each page on the website.",
    tags: [
      { name: "Laravel", color: "primary" },
      { name: "MySql", color: "success" },
      { name: "Bootstrap", color: "danger" },
    ],
    ghLink: "https://github.com/AzisWh/matics_profile",
    demoLink: "#",
  },
  {
    imgPath: jwtauth,
    title: "ExpressJs Authentication ",
    description: "Developing a website for authentication with JWT Auth using ExpressJS as the backend and React for the frontend.",
    tags: [
      { name: "ReactJs", color: "primary" },
      { name: "ExpressJs", color: "success" },
      { name: "MySql", color: "danger" },
      { name: "JWT", color: "info" },
    ],
    ghLink: "https://github.com/AzisWh/JWT-Auth-Website",
    demoLink: "#",
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>Here are a few projects I've worked on recently and Production.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectsData.map((project, index) => (
            <Col key={index} md={6} className="project-card">
              <ProjectCard imgPath={project.imgPath} title={project.title} description={project.description} tags={project.tags} ghLink={project.ghLink} demoLink={project.demoLink} />
            </Col>
          ))}
        </Row>
      </Container>
      <Container>
        <h1 className="project-heading">
          On Going <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>Here are a few projects I've worked on recently and Production.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {OnGoingProjects.map((project, index) => (
            <Col key={index} md={6} className="project-card">
              <ProjectCard imgPath={project.imgPath} title={project.title} description={project.description} tags={project.tags} ghLink={project.ghLink} demoLink={project.demoLink} />
            </Col>
          ))}
        </Row>
      </Container>
      <Container>
        <h1 className="project-heading">
          Mini <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>Here are a few mini projects that I worked on as a study obligation.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {MiniProjectsData.map((project, index) => (
            <Col key={index} md={6} className="project-card">
              <ProjectCard imgPath={project.imgPath} title={project.title} description={project.description} tags={project.tags} ghLink={project.ghLink} demoLink={project.demoLink} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
