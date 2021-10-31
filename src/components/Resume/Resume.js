import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/my-cv-pdf.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="BSc Computer Science [King Saud University] "
              date="2017 - Present (expected graduation by february 2022)"
              content={[`GPA: 3.85 `]}
            />
            
            <h3 className="resume-title">Skills</h3>
            <Resumecontent
              title="Programming languages"
              content={[
                `Java`,
                `Python`,
                'JavaScript',
                'Dart',
              ]}
            />
            <Resumecontent
              title="Frameworks and libraries"
              content={[
                `React`,
                `Flutter`,
                `Bootstrap`,
                'Express.js',
              ]}
            />
            <Resumecontent
              title="Backend"
              content={[
                `Node.js`,
                `MySql`,
                'MongoDB',
              ]}
            />
            <Resumecontent
              title="Others"
              content={[
                `Git`,
                `HTML`,
                `CSS`,
              ]}
            />
            
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Projects</h3>
            <Resumecontent
              title="Sentiment analysis with machine learning (Graduation project)"
              content={[
                "We used Arabic tweets dataset about the health services in Saudi Arabia to predict and label future tweets with either positive or negative, we implemented 3 machine learning algorithms in Python and experimented with different methods until we reached 90% prediction accuracy",
              ]}
            />
            <Resumecontent
              title="Maze navigation with Artificial Intelligence"
              content={[
                "Given any rectangular maze image, the program will find the optimal path between two positions using 4 different AI algorithms implemented in Java",
              ]}
            />
            <h3 className="resume-title">Volunteering</h3> 
            <Resumecontent
              title="Future Technology Club"
              date="August 2019 - present"
              content={[
                "Volunteered 70+ hours in organazing and hosting tech events and publishing youtube videos among other activities for the tech community in Saudi.",
              ]}
            />
            <h3 className="resume-title">Languages</h3>
            <Resumecontent
              title=""
              content={[
                `Arabic (native)`,
                `English (fluent)`,
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
