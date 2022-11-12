import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Projects from "./components/Projects/Projects";
import Project from "./pages/Project";
import Contacts from "./components/Contacts/Contacts";


function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route exact path="/" element={<Header/>}></Route>
            <Route path="/about" element={<AboutMe/>}></Route>
            <Route path="/experience" element={<WorkExperience/>}></Route>
            <Route path="/projects" element={<Projects/>}></Route>
            <Route path="/contacts" element={<Contacts/>}></Route>
            <Route path="/project/:title" element={<Project/>}></Route>
          </Routes>
        </Router>
    </>
  );
}

export default App;
