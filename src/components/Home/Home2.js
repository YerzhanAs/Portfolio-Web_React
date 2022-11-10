import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Yerzhan.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>LET ME <span className="purple"> INTRODUCE </span> MYSELF</h1>
            <p className="home-about-body">
              <p>I am 3th year student at IITU</p>
              <p>When I am free i like to play<b className="purple"> Dota </b></p>
              <p>I am interested in <b className="purple">Web-developing</b></p>
              <p>Now I am learning Frontend technologies like <b className="purple">React, NodeJs, etc</b> </p>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt><img src={myImg} className="img-fluid" alt="avatar" /></Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>Feel free to <span className="purple">connect </span>with me</p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a href="#" target="_blank" rel="noreferrer" className="icon-colour  home-social-icons">
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a href="#" target="_blank" rel="noreferrer" className="icon-colour  home-social-icons">
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a href="#" target="_blank" rel="noreferrer" className="icon-colour  home-social-icons">
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a href="#" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
