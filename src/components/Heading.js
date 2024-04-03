import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function Heading() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return <>{isDesktop ? <DesktopHeader /> : <MobileHeader />}</>;
}

function DesktopHeader() {
  return (
    <Navbar
      expand="lg"
      className="navbar bg-body-dark border-bottom sticky-top"
    >
      <Container>
        <Navbar.Brand className="text-white p-2">Balu Patil</Navbar.Brand>
        <Navbar.Brand className="text-white p-2">
          <Link to="/" className="text-decoration-none text-white">
            Home
          </Link>
        </Navbar.Brand>
        <Navbar.Brand className="text-white p-2">
          <Link to="/skill" className="text-decoration-none text-white">
            Skill
          </Link>
        </Navbar.Brand>
        <Navbar.Brand className="text-white p-2">
          <Link to="/projects" className="text-decoration-none text-white">
            Projects
          </Link>
        </Navbar.Brand>
        <Navbar.Brand className="text-white p-2">
          <Link to="/contact" className="text-decoration-none text-white">
            Contact us
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

function MobileHeader() {
  return (
    <Navbar
      expand="lg"
      className="navbar bg-body-dark border-bottom sticky-top"
    >
      <Container>
        <Navbar.Brand className="text-white p-2">Balu Patil</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="navbar-nav ml-auto">
            <NavItem link="/" text="Home" />
            <NavItem link="/skill" text="Skill" />
            <NavItem link="/projects" text="Projects" />
            <NavItem link="/contact" text="Contact us" />
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function NavItem({ link, text }) {
  return (
    <li className="nav-item">
      <Link to={link} className="nav-link text-white p-2 text-decoration-none">
        {text}
      </Link>
    </li>
  );
}

export default Heading;
