import React from 'react';
import './Educaton.css';
import { FaUserGraduate} from 'react-icons/fa';
import HeroEducation from './HeroEducation'


const education = [
  {
    period: 'Sep 2007 - Jul 2012',
    university: 'Specialist degree. Siberian Federal University, Russia (SibFU) •Krasnoyarsk, Krasnoyarsk region',
    name: 'Robots and robotic systems'
  },
  {
    period: 'August 2013',
    university: 'SITRAIN Training for Industry. SIEMENS LLC Department of Automation Technology and Drives, Moscow',
    name: 'ST-PCS7SYS, Basic course on PCS 7'
  },
  {
    period: 'October 2021',
    university: 'SITRAIN Training for Industry. SIEMENS LLC Department of Automation Technology and Drives, Moscow',
    name: 'TIA-SIVARC#REMOTE'
  },

]

const Education = () => {
  return (
    <section className='education'>
        <div className="container">
            <h2 className='subtitle subtitle_education'>Education</h2>
            <div className="education-wrapper">
              
              {education.map((elem, index) => {
                return (
					<div className='education-wrapper-element' key={index}>
						<div className="education-circle">
							<FaUserGraduate
							size={20} 
							style={
								{
									color: "#fff",
								}
							}
							/>
						</div>
						<div className="education-content">
							<h3 className="title-education">{elem.name}</h3>
							<span className="period-education">{elem.period}</span>
							<p className="text-education">{elem.university}</p>
						</div>
					</div>
                )
              })}

            </div>
        </div>
        <HeroEducation/>
    </section>
  )
}

export default Education