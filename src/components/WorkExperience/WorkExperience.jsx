import React from 'react';
import './WorkExperience.css';
import Subheader from '../Subheader/Subheader';
import About from '../../IMG/IMG/AboutMe.jpg';

const experience = [
    {
        data: '04/2020  - Present',
        position: 'Head of APCS software development department',
        experience: 'Management of the APCS programmer department of 6 people. Participation in determining the technological policy and development vector of process control systems at RUSAL enterprises. Collaboration with the IT security department. Support for previously developed software.',
        place: 'Ltd RUSAL Engineering and Technology Center • Krasnoyarsk, Krasnoyarsk region'
    },
    {
        data: '01/2017 - 04/2020',
        position: 'APCS software engineer',
        experience: 'Development of APCS software for various technological equipment, such as: foundry machines for semi-continuous casting, bulk materials transportation systems, chemical production sites. Participation in the development andadjustment of software for transport conveyor systems,metalworking installations, etc. Extensive experience with PLC SIEMENS SIMATIC series S7-300, S7-400, S7-1200, S71500. Programming of both individual installations and sections of cooperating equipment. Extensive experience with Siemens HMI - from SIMATIC Basic and Comfort operator panels to SCADA WinCC Professional with redundant servers and a large number of clients (thick and web). Some experience with WinCC Unified.',
        place: 'Ltd RUSAL Engineering and Technology Center • Krasnoyarsk, Krasnoyarsk region'
    },
    {
        data: '07/2012 - 12/2016',
        position: 'APCS software engineer',
        experience: 'Development of software for industrial controllers SIEMENS SIMATIC S7-200, S7-300, S7-400, S7-1200, S7-1500, as well as industrial operator panels SIEMENS: Basic Panels, Comfort Panels, and WinCC SCADA systems. Extensive experience with the following development environments: STEP 7, STEP 7 MicroWin, WinCC flexible, WinCC,PCS 7, TIA PORTAL. Installation, commissioning, operation, programming, participation in the design of process control systems.',
        place: 'Ltd Center of Engineering and Automation • Krasnoyarsk, Krasnoyarsk region'
    },
    
]

const WorkExperience = () => {
  return (
    <>
        <Subheader title={'Work Experience'} img={About}/>
        <section className='work-experience' id='experience'>
            <div className="container">
                <h3 className='subheader subheader_experience'>Explore my experience since 2012.</h3>
                <div className="experience-wrapper">

                    {experience.map((elem, index) => {
                        return (
                            <div className="experience-wrapper-item" key={index}>
                                <div className="experience-data">
                                    <h3>{elem.data}</h3>
                                </div>
                                <div className="experience-content">
                                    <h3>{elem.position}</h3>
                                    <span>{elem.place}</span>
                                    <p>{elem.experience}</p>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </section>
    </>
  )
}

export default WorkExperience