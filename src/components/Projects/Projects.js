import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import flutter from '../../Assets/Projects/apiflutter.png';
import Particle from '../Particle';
import punggur from '../../Assets/Projects/punggur.png';
import absensi from '../../Assets/Projects/absensi.png';
import inraga from '../../Assets/Projects/inraga.jpeg';
import adminui from '../../Assets/Projects/adminui.png';
import labmatics from '../../Assets/Projects/labmatics.png';
import jwtauth from '../../Assets/Projects/jwtauth.png';
import digitalist from '../../Assets/Projects/digitalist.png';
import expoapp from '../../Assets/Projects/expoapp.png';
import poliklinik from '../../Assets/Projects/poliklinik.png';
import pungguux from '../../Assets/Projects/punggurux.png';
import equalhub from '../../Assets/Projects/equalhub.png';
import shibals from '../../Assets/Projects/shibals.png';
import choolifah from '../../Assets/Projects/choolifah.png';
import postman from '../../Assets/Projects/postman.png';
import megamall from '../../Assets/Projects/megamall.jpeg';
import inosustain from '../../Assets/Projects/inosustain.png';

const WebsiteProjectsData = [
  {
    imgPath: inosustain,
    title: 'Inosustain Company Profile',
    description:
      'I developed both frontend and backend featuresusing MySql as the database | I implemented MVC  Sctructures, JWT Auth, CRUD Function using Laravel 10 the Backend | I worked with React-vite, utilizing component utilities, pages styled with Tailwind CSS, and state managementwith Redux. I also integrated API and libraries.',
    tags: [
      { name: 'ReactJs', color: 'primary' },
      { name: 'Laravel', color: 'success' },
    ],
    ghLink: '',
    demoLink: '#',
  },
  {
    imgPath: choolifah,
    title: 'Choolifah Open Course - Intern Project',
    description:
      'I developed both frontend and backend featuresusing PostgreSQL as the database | I implemented controllers, repositories, services, migrations, and seeders using Express.jsfor the Backend | I worked with React.js, utilizing component utilities, pages styled with Tailwind CSS, and state managementwith Redux. I also integrated API and libraries.',
    tags: [
      { name: 'ReactJs', color: 'primary' },
      { name: 'ExpressJs', color: 'success' },
      { name: 'TailwindCss', color: 'danger' },
    ],
    ghLink: 'https://github.com/AzisWh/Choolifah-Intern-Course',
    demoLink: '#',
  },
  {
    imgPath: inraga,
    title: 'Inraga Website',
    description:
      'P2MW (Program Pembinaan Mahasiswa Wirausaha) Website, have main features (rent, looking for battle ) with payment integration using xendit.',
    tags: [
      { name: 'Laravel', color: 'primary' },
      { name: 'MySql', color: 'success' },
      { name: 'Bootstrap', color: 'danger' },
    ],
    ghLink: '#',
    demoLink: 'https://inraga.id/',
  },
  {
    imgPath: labmatics,
    title: 'Lab Matics Profile Website',
    description:
      'Developing a website for the Udinus Matics lab which has admin features to manage the content of each page on the website.',
    tags: [
      { name: 'Laravel', color: 'primary' },
      { name: 'MySql', color: 'success' },
      { name: 'Bootstrap', color: 'danger' },
    ],
    ghLink: 'https://github.com/AzisWh/matics_profile',
    demoLink: '#',
  },
  {
    imgPath: jwtauth,
    title: 'ExpressJs Authentication API',
    description:
      'Developing a website for authentication with JWT Auth using ExpressJS as the backend and React for the frontend.',
    tags: [
      { name: 'ReactJs', color: 'primary' },
      { name: 'ExpressJs', color: 'success' },
      { name: 'MySql', color: 'danger' },
      { name: 'JWT', color: 'info' },
    ],
    ghLink: 'https://github.com/AzisWh/JWT-Auth-Website',
    demoLink: '#',
  },
  {
    imgPath: postman,
    title: 'Library System API ',
    description:
      'develop library system API with auth, borrow and return features.',
    tags: [
      { name: 'Laravel', color: 'primary' },
      { name: 'MySql', color: 'success' },
    ],
    ghLink: 'https://github.com/AzisWh/API-Perpus',
  },
  {
    imgPath: digitalist,
    title: 'Digitalist Company Profile',
    description:
      'Contributed to the development of the digitalist company profile website using nextjs and prismic slice machine.',
    tags: [
      { name: 'NextJs', color: 'primary' },
      { name: 'Tailwind', color: 'success' },
      { name: 'Prismic', color: 'danger' },
    ],
    ghLink: 'https://github.com/raihanfaiq/digitalist',
    demoLink: 'https://digitalist.vercel.app/',
  },
  {
    imgPath: punggur,
    title: 'Punggur Besar Profile Website',
    description: 'Building Website as a contributor using NextJs and Vercel.',
    tags: [
      { name: 'NextJs', color: 'info' },
      { name: 'Vercel', color: 'success' },
    ],
    ghLink: 'https://github.com/raihanfaiq/punggurbesar',
    demoLink: 'https://punggurbesar-web.vercel.app/',
  },

  {
    imgPath: absensi,
    title: 'Online Presence Website',
    description:
      'Developing a website as a requirement for my internship course. The website is designed to manage the attendance of interns based on selfie and location at Humas Pemerintah Kota Semarang.',
    tags: [
      { name: 'Laravel', color: 'primary' },
      { name: 'MySql', color: 'success' },
      { name: 'Bootstrap', color: 'danger' },
      { name: 'Geo Location', color: 'info' },
    ],
    ghLink: 'https://github.com/AzisWh/Absensi-App-Laravel',
    demoLink: '#',
  },
  {
    imgPath: poliklinik,
    title: 'Polyclinic Website (career guidance final project lectures)',
    description:
      'Develop a polyclinic website, has 3 auth for doctor and patient admins with features to check patients with doctors, submit check-ups to patients and manage all data on the admin.',
    tags: [
      { name: 'Laravel', color: 'primary' },
      { name: 'MySql', color: 'success' },
      { name: 'Bootstrap', color: 'danger' },
    ],
    ghLink: 'https://github.com/AzisWh/poliklinik',
    demoLink: '#',
  },
];

const MobileAppProjects = [
  {
    imgPath: flutter,
    title: 'Integrating API On Flutter ',
    description:
      'Practicing my skills in developing applications with Dart as well as implementing APIs into the applications created.',
    tags: [
      { name: 'Dart', color: 'info' },
      { name: 'Postman', color: 'success' },
    ],
    ghLink: 'https://github.com/AzisWh/fetchapi-flutter',
    demoLink: '#',
  },
  {
    imgPath: megamall,
    title: 'Mega Mall React Native UI',
    description:
      'Practicing my skills in developing App UI using React Native (tsx).',
    tags: [
      { name: 'React Native', color: 'info' },
      { name: 'TypeScript', color: 'success' },
    ],
    ghLink: 'https://github.com/AzisWh/Expo-Go-Courses',
    demoLink: '#',
  },
  {
    imgPath: expoapp,
    title: 'React Native Mobile App',
    description:
      'Developing applications with React Native and integrating APIs using Firebase.',
    tags: [
      { name: 'React Native', color: 'info' },
      { name: 'TypeScript', color: 'success' },
      { name: 'Firebase', color: 'danger' },
    ],
    ghLink: 'https://github.com/AzisWh/expo-app-fimabeauty',
    demoLink: '#',
  },
];

const UIUXProjectsData = [
  {
    imgPath: pungguux,
    title: 'Punggur Besar Profile UI/UX Design',
    description: 'develop website design with team.',
    tags: [{ name: 'Figma', color: 'info' }],
    ghLink: '#',
    demoLink:
      'https://www.figma.com/design/w3MkSPRrNj1doLaO0ujJLN/desa-punggur-besar?node-id=0-1&t=801qPtDLhTi55sj8-1',
  },
  {
    imgPath: shibals,
    title: 'ShibaLibs Mobile App UI Prototyping',
    description: '',
    tags: [{ name: 'Figma', color: 'info' }],
    ghLink: '#',
    demoLink:
      'https://www.figma.com/design/PwZVoFX1g2wc73NHcfyTMR/ShibaLibs?node-id=0-1&t=K4aijjWobCbNf5gT-1',
  },
  {
    imgPath: equalhub,
    title: 'EqualHub UI Prototyping',
    description: '',
    tags: [{ name: 'Figma', color: 'info' }],
    ghLink: '#',
    demoLink:
      'https://www.figma.com/design/MQBx4a7xj3XpjlSSGNCJ31/EqualHub-prototype?node-id=0-1&t=GQ4GJLMwr7Oxn68L-1',
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently and Production.
        </p>
        <h1 className="project-heading">
          Website<strong className="purple">Projects</strong>
        </h1>

        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          {WebsiteProjectsData.map((project, index) => (
            <Col key={index} md={6} className="project-card">
              <ProjectCard
                imgPath={project.imgPath}
                title={project.title}
                description={project.description}
                tags={project.tags}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Container>
        <h1 className="project-heading">
          Mobile App <strong className="purple">Projects</strong>
        </h1>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          {MobileAppProjects.map((project, index) => (
            <Col key={index} md={6} className="project-card">
              <ProjectCard
                imgPath={project.imgPath}
                title={project.title}
                description={project.description}
                tags={project.tags}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Container>
        <h1 className="project-heading">
          UI UX <strong className="purple">Projects</strong>
        </h1>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          {UIUXProjectsData.map((project, index) => (
            <Col key={index} md={6} className="project-card">
              <ProjectCard
                imgPath={project.imgPath}
                title={project.title}
                description={project.description}
                tags={project.tags}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
