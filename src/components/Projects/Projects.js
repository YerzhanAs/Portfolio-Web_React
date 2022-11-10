import React from "react";
import {Container, Row, Col, Carousel} from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import project1 from "../../Assets/Projects/Project1.jpg";
import project2 from "../../Assets/Projects/Project3.png";
import project3 from "../../Assets/Projects/blog.png";
import project4 from "../../Assets/Projects/codeEditor.png";
import project5 from "../../Assets/Projects/Java2.png";
import project6 from "../../Assets/Projects/Project4.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px"}}>
          <Carousel className={"carousel"} style={{width: "50%"}}>
            <Carousel.Item>
              <div className={'project-card'}>
                <ProjectCard
                    imgPath={project1}
                    isBlog={false}
                    title="Project 1"
                    description="This Smart City project tells individuals visiting the city about hotels, transportation facilities, air ticket booking, shopping details, city news, etc. It is a web-based software developed in Java Programming language that solves most of the problems that any new visitor faces when coming to a new city like pathfinding, hotel searching, and ticket booking, among other things."
                ></ProjectCard>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="project-card">
                <ProjectCard
                    imgPath={project2}
                    isBlog={false}
                    title="Project 2"
                    description="This currency converter is a mini-Java project that provides a web-based interface for exchanging/converting money from one currency to another. It is developed using Ajax, Java servlets web features. Such applications have been used in the business industry."
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="project-card">
                <ProjectCard
                    imgPath={project3}
                    isBlog={false}
                    title="Project 3"
                    description="This guess the number game is a short Java project that allows the user to guess the number generated by the computer. There are also several ways to alter the game, like adding more rounds or displaying the score. It’s quite simple and uses the random function to generate a number."
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="project-card">
                <ProjectCard
                    imgPath={project4}
                    isBlog={false}
                    title="Project 4"
                    description="This brick breaker game is one of many fun Java projects that has you trying to break bricks at the top of the screen. The player controls a tiny ball placed on a small platform at the bottom of the screen, which can be moved around from left to right using the arrow keys. The goal is to break the bricks without missing the ball with your platform. The project makes use of Java swing and OOPS concepts, among other things."
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className={'project-card'}>
                <ProjectCard
                    imgPath={project5}
                    isBlog={false}
                    title="Project 5"
                    description="Data Visualization has become important as it displays data visually using statistical graphics and scientific visualization, to the point where data visualization software has been created. This project displays the node connectivity in networking in data visualization form. This node connectivity can be located at different locations via mouse or trackpad. "
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className={'project-card'}>
                <ProjectCard

                    imgPath={project6}
                    isBlog={false}
                    title="Project 6"
                    description="This somewhat complex Java project consists of five different classes and is a console-based application. When the system starts the user is prompted with a user id and user pin. After entering the details successfully, the ATM functionalities are unlocked. "

                />
              </div>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
