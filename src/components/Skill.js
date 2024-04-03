import React from "react";
import "../App.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import reacts from "../assets/react.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import mongo from "../assets/mongo.png";
import telewind from "../assets/telewind.png";
import bootstrap from "../assets/bootstrap.png";
import "../App.css";

function Skill() {
  return (
    <div>
      <h1 className="text-center text-white animated-heading">Skill</h1>
      <Container>
        <Row>
          <Col xs={4} md={4}>
            <div className="image-container">
              <Image src={html} rounded className="skill-image" />
            </div>
          </Col>
          <Col xs={4} md={4}>
            <div className="image-container">
              <Image src={css} rounded className="skill-image" />
            </div>
          </Col>
          <Col xs={4} md={4}>
            <div className="image-container">
              <Image src={js} rounded className="skill-image" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={4} md={4}>
            <div className="image-container">
              <Image src={reacts} rounded className="skill-image" />
            </div>
          </Col>
          <Col xs={4} md={4}>
            <div className="image-container">
              <Image src={node} rounded className="skill-image" />
            </div>
          </Col>
          <Col xs={4} md={4}>
            <div className="image-container">
              <Image src={express} rounded className="skill-image" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={4} md={4}>
            <div className="image-container">
              <Image src={mongo} rounded className="skill-image" />
            </div>
          </Col>
          <Col xs={4} md={4}>
            <div className="image-container">
              <Image src={telewind} rounded className="skill-image" />
            </div>
          </Col>
          <Col xs={4} md={4}>
            <div className="image-container">
              <Image src={bootstrap} rounded className="skill-image" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Skill;
