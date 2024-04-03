import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div>
        <h1 className="text-center text-white animated-heading">Contact us</h1>
        <Container>
          <Form className="text-center">
            <Form.Group className="mb-3 text-white" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-white">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group
              className="mb-3 text-white"
              controlId="formBasicPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button className="text-white bg-pink" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
        <div className="icons text-center mt-3">
          <a
            href="https://www.linkedin.com/in/balu-patil-74b241255/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="icon-link icon-size"
            />
          </a>

          <a
            href="https://twitter.com/balu_patil_007"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} className="icon-twit icon-size" />
          </a>

          <a
            href="https://github.com/balu1p"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="icon-git icon-size" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
