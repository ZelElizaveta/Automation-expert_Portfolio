import React from 'react';
import './Skills.css';

const skills = [
    {
        skill: 'Siemens TIA Portal'
    },
    {
        skill: 'Step 7'
    },
    {
        skill: 'WinCC'
    },
    {
        skill: 'Simatic S7-1500'
    },
    {
        skill: 'Simatic S7-1200'
    },
    {
        skill: 'Simatic S7-300'
    },
    {
        skill: 'PCS 7'
    },
    {
        skill: 'WinCC Unified'
    },
]

const Skills = () => {
  return (
    <article className='skills'>
        <div className="container">
            <h2 className='subtitle subtitle_education'>Skills</h2>
            <div className="skills-wrapper">
                
                {skills.map((elem, index) => {
                    return <button key={index} className='skills-btn'>{elem.skill}</button>
                })}

            </div>
        </div>
    </article>
  )
}

export default Skills