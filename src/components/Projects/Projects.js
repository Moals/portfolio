import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import maze from "../../Assets/Projects/Output.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="yellow">Work </strong>
        </h1>
        <p style={{ color: "black" }}>
          others are coming soon...
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={maze}
              isBlog={false}
              title="Maze navigation with AI"
              description="The plan is to find the optimal path between two positions in any given rectangular maze image, the output will be a displayed image with the path from the initial position to the target position, and different other numbers representing the performance of the algorithms, i used java to solve this problem with 4 different artificial intelligence algorithms."
              link="https://github.com/Moals/AiMazeNavigation"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
