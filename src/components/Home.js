import { useEffect, useState } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import FImage from "../assets/FImage.gif";
import DownloadCv from "./DownloadCv";

function Home() {
  const text = "I'm a Frontend Developer....";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let interval;
    if (displayText !== text) {
      interval = setInterval(() => {
        const nextChar = text.substring(0, displayText.length + 1);
        setDisplayText(nextChar);
      }, 200);
    } else {
      setTimeout(() => setDisplayText(""), 1000);
    }
    return () => clearInterval(interval);
  }, [text, displayText]);

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center vh-100"
    >
      <Row>
        <Col xs={12} md={6} className="text-center mb-4 mb-md-0">
          <h1 className="text-white">
            <i>{displayText}</i>
          </h1>
          <p
            className="text-white py-2 py-md-4 max-w-md"
            style={{ opacity: 0.4 }}
          >
            With a solid foundation in software development, my current focus
            revolves around the dynamic realm of web applications. I specialize
            in utilizing technologies like React, Tailwind, and JavaScript to
            create sleek, user-centric interfaces. My passion lies in seamlessly
            blending design and functionality to deliver compelling digital
            solutions...
          </p>
          <DownloadCv />
        </Col>
        <Col xs={12} md={6} className="text-center">
          <Image
            src={FImage}
            rounded
            className="img-fluid"
            style={{ maxWidth: "80%", height: "auto" }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
