import React from 'react';
import './AboutMe.css';
import Photo from '../../IMG/IMG/DSCF0110-_1_.webp'
import About from '../../IMG/IMG/AboutMe.jpg';
import Languages from './Languages';
import Skills from './Skills';
import Education from '../Education/Education';
import Subheader from '../Subheader/Subheader';

const AboutMe = () => {
  return (
    <>
      <Subheader title={'About me'} img={About}/>
      <section className='about-me' id='AboutMe'>
          <div className="container">
              <div className="content">
                  <img src={Photo} alt="about" className="about-img" />
                  <div className="about-text">
                      <p>Hi! My name’s Dmitry. <br/> I’m 32 years old and I’m a specialist in industrial automation with more than 10 years of work experience. <br/>
                        I know all about automation equipment by Siemens. <br/> I’m constantly exploring new technologies and approaches to make my projects the best and safest. <br/>
                        I have experience in programming automation systems from stand-alone machines to factory workshops.
                      </p>
                  </div>
              </div>
          </div>
          <Languages/>
          <Skills/>
          <Education/>
      </section>
    </>
  )
}

export default AboutMe