import React from 'react';
import { useParams } from 'react-router-dom';
import './Project.css';
import ProjectsData from '../components/Projects/ProjectsData';
import { useState, useEffect } from 'react';
import Slider from "react-slick";
import About from '../IMG/IMG/AboutMe.jpg';
import Subheader from '../components/Subheader/Subheader';



const Project = () => {

  const {title} = useParams();
  const [project, setProject] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    vertical: false,
  };

  const newProject = (title) => {
    setProject(ProjectsData.filter(item => {return item.title === title}))
  }

  useEffect(() => {newProject(title)}, [])

  return (
    <>
        <Subheader title={title} img={About}/>
        <section className='project'>
          <div className="container">
            <div className="project-descr">

                {project.map((item, index) => <p key={index}>{item.descrp}</p>)}
              
              <div className="slider">
                <Slider {...settings}>

                  {project.map(item => {
                    return(item.imgs.map((item, index) => {
                      return (
                        <div className="slider-item" key={index}>
                          <img src={item} alt="img" />
                        </div>
                      )
                    }))
                  })}

                </Slider>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Project