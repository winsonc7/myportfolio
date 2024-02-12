import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/pfp-3.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./TypeLoop";
import TypingAnimation from "./TypeAnimation";
import TypeIntro from "./TypeIntro";
import About from "../About/About"
import Projects from "../Projects/Projects"

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
            <Particle />
            <TypingAnimation />
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="pfp"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      {/*
      <Home2 />
      <About />
      <Projects />
      */}
    </section>
  );
}

export default Home;
