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
              content={[`GPA: 3.81 (Till 7th Sem)`]}
            />
            
            <h3 className="resume-title">Skills</h3>
            <Resumecontent
              title="Programming languages"
              content={[
                `Java`,
                `Python`,
                'JavaScript',
                
              ]}
            />
            <Resumecontent
              title="Frontend"
              content={[
                `React`,
                `jQuery`,
                `CSS3`,
                'HTML5',
                'Bootstrap4',
              ]}
            />
            <Resumecontent
              title="Backend"
              content={[
                `Node.js`,
                `Express.js`,
                `MySql`,
                'MongoDB',
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
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Projects</h3>
            <Resumecontent
              title="Graduation Project"
              date="Jan 2021 - Dec 2021"
              content={[
                "Our goal in this group project is to analyze and identify the meaning of the tweets and label them with either a negative or a positive label and identify the reason by using appropriate machine learning algorithms and sentiment analysis techniques that would achieve the highest possible accuracy. ",
              ]}
            />
            <h3 className="resume-title">Volunteering</h3>
            <Resumecontent
              title="Future Technology Club"
              date="August 2019 - present"
              content={[
                "Volunteered 100+ hours in organazing and hosting tech events and publishing youtube videos among other activities for the benefit of the tech community in Saudi.",
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
