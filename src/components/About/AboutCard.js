import React from "react";
import Card from "react-bootstrap/Card";
import { FaHandPointRight } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am Mohammed Alsaeed, a senior computer science student at King Saud University. (Graduating by Februery 2022) 
            <br />
            <br />
            I'm passionate in learning and developing new technologies that would make people life's easier, and sharing my learning experience.
            <br />
            <br />
            I'm a proud member of the  
            <a className="purple" target="_blank" rel="noreferrer" href="https://twitter.com/ftcksu"> future technology club</a>
            , where i have volunteered 100+ in organazing 
            over 10 events and workshops about various development tools targeting the tech community in
             Saudi Arabia with over 500 beneficiaries, and filming over 5 youtube vidoes about new technologies on 
             <a className="purple" target="_blank" rel="noreferrer" href="https://www.youtube.com/user/FTCKSU"> FTC youtube channel</a>.
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <br />
          <ul>
            <li className="about-activity">
              <FaHandPointRight /> Photography
            </li>
            <li className="about-activity">
              <FaHandPointRight /> Travelling
            </li>
            <li className="about-activity">
              <FaHandPointRight /> Playing Piano
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
