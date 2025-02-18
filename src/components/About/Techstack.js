import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  TbBrandBootstrap,
  TbBrandLaravel,
  TbBrandTailwind,
} from 'react-icons/tb';
import { DiPhp } from 'react-icons/di';
import { DiJavascript1, DiReact, DiNodejs } from 'react-icons/di';
import { SiNextdotjs } from 'react-icons/si';
import { FaLaravel } from 'react-icons/fa';
import { SiExpo } from 'react-icons/si';

function Techstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpo />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaLaravel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandLaravel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandTailwind />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandBootstrap />
      </Col>
    </Row>
  );
}

export default Techstack;
