import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Col, Badge, Button } from "react-bootstrap";

function ProjectCards(props) {
  return (
    <Card className="project-card-view" style={{ backgroundColor: "#1e1e2f", color: "#ffffff" }}>
      <Card.Body>
        <Row className="align-items-center">
          <Col md={4} className="project-card-image">
            <Card.Img variant="top" src={props.imgPath} alt="card-img" className="img-fluid" />
          </Col>
          <Col md={8} className="project-card-content">
            <Card.Title style={{ fontSize: "1.5em", fontWeight: "bold" }}>{props.title}</Card.Title>
            <div className="project-tags">
              {props.tags.map((tag, index) => (
                <Badge key={index} pill bg={tag.color} className="me-2" style={{ fontSize: "0.9em" }}>
                  {tag.name}
                </Badge>
              ))}
            </div>
            <Card.Text style={{ textAlign: "justify", marginTop: "10px" }}>{props.description}</Card.Text>
            <div className="project-links" style={{ marginTop: "20px" }}>
              <Button variant="primary" href={props.ghLink} target="_blank" style={{ marginRight: "10px" }}>
                GitHub
              </Button>
              <Button variant="success" href={props.demoLink} target="_blank">
                Demo
              </Button>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
