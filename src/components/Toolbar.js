import {Navbar, Container } from 'react-bootstrap';
import gitLogo from '../github_logo.png';

export default function Toolbar() {
  return (
    <div class="header sticky-top">
    <Navbar className="Navigation">
    <Container>
    <Navbar.Brand 
        href="https://github.com/lily-chiang"
        target="_blank">
      <img src={gitLogo} className="App-logo" alt="logo"/>
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-start">
        <a class="nav-link" href="home">Home</a>
        <a class="nav-link" href="education">Education</a>
        <a class="nav-link" href="skills">Skills</a>
        <a class="nav-link" href="exp">Experience</a>
        <a class="nav-link" href="projs">Projects</a>
        <a class="nav-link" href="orgs">Organizations</a>
        <a class="nav-link" href="awards">Awards</a>
        <div class="dropdown">  
          <a
            class="btn btn-default dropdown-toggle" 
            data-bs-toggle="dropdown" 
            role="button"
            >
            Web Dev
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="log">Log</a>
            </div>
          </div>
          <a class="nav-link" href="#contact" data-bs-toggle="modal" data-target="#contact">Contact Me</a>
          </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
  );
}