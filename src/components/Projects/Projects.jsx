import React from 'react';
import Subheader from '../Subheader/Subheader';
import Cards from './Cards';
import './Projects.css';
import ProjectsData from './ProjectsData';
import About from '../../IMG/IMG/AboutMe.jpg';


const Projects = () => {
  return (
    <>
      <Subheader title={'Projects'} img={About}/>
      <section className='projects' id='projects'>
          <div className="container">
              <div className="projects-wrapper">
                  
                  {ProjectsData.map((item, index) => {
                    return <Cards key={index} {...item}/>
                  })}

              </div>
          </div>
      </section>
    </>
  )
}

export default Projects