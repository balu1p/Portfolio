import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Swiggy from "../assets/projects/Swiggy.png";
import Booking from "../assets/projects/Booking-app.png";
import Todo from "../assets/projects/Todo.png";
import Dino from "../assets/projects/Dino_game.png";
import "../App.css";

function Projects() {
  return (
    <div>
      <h1 className="text-center text-white animated-heading">Projects</h1>
      <Container>
        <Row>
          <Col>
            <a
              href="https://swiggyyclone.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Swiggy} rounded className="project-image" />
            </a>
          </Col>
          <Col>
            <a
              href="https://balu-booking-app.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Booking} rounded className="project-image" />
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <a
              href="https://todolist-kdha.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Todo} rounded className="project-image" />
            </a>
          </Col>
          <Col>
            <a
              href="https://balu-dragon-game.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Dino} rounded className="project-image" />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
