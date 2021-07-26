import React from "react";
import { Container} from "react-bootstrap";
import myPic from "../../Assets/MyPic.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
        <img src={myPic} alt="" className="img-fluid main-img"/>
        <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello, World! 
              </h1>
              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Mohammed Alsaeed</strong>
              </h1>
              <div style={{ padding: 50, textAlign: "center" }}>
                <Type />
              </div>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;


