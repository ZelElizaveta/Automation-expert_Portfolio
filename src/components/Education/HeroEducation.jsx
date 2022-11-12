import React from 'react';
import './HeroEducation.css';
import HeroBG from '../../IMG/IMG/heroBG.jpg';


const HeroEducation = () => {
  return (
    <article className='hero-education'>
		<div className="mask mask_education">
		<img className='into-image into-image_education' src={HeroBG}alt="hero" />
		</div>
		<div className="container">
			<div className="hero-education-wrapper">
				<div className="education-text">
					<p>
						I am a dedicated APCS programming professional. <br/>10 years of experience in programming Siemens SIMATIC PLC and
						HMI for various industrial equipment. <br/>I investigated new technologies to make my projects modern and meeting the
						highest standards
					</p>
				</div>
			</div>
		</div>
    </article>
  )
}

export default HeroEducation