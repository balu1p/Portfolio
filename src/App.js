import ParticleBg from "./components/ParticleBg";
import "./App.css";
import Heading from "./components/Heading";
import Home from "./components/Home";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <ParticleBg />

      <div className="App">
        <header className="App-header">
          <Router>
            <Heading />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skill" element={<Skill />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Router>
        </header>
      </div>
    </>
  );
}

export default App;
