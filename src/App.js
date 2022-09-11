import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import { Awards, Contact, Education, Experience, Home, Log, Media, Organizations, Projects, Skills, Toolbar } from './components/index';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
          <div>
            {/* The Toolbar and Contact feature are accessible no matter the sub URL. */}
            <Toolbar />
            <Contact />
            
            <Routes>
              {/* Different subpages */}
              <Route exact path="/home" element = {<Home />} />
              <Route exact path="/education" element = {<Education />} />
              <Route exact path="/skills" element = {<Skills />} />
              <Route exact path="/exp" element = {<Experience />} />
              <Route exact path="/projs" element = {<Projects />} />
              <Route exact path="/orgs" element = {<Organizations />} />
              <Route exact path="/awards" element = {<Awards />} />
              <Route exact path="/log" element = {<Log />} />
              <Route exact path="/" element = {<Home />} />
            </Routes>

          </div>
        </Router>
    </div> 
  );
}

export default App;
