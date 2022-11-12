import React from 'react';
import './heroImg.css';
import BG from '../../IMG/IMG/BG.webp';
import { Link } from 'react-router-dom';

const HeroImg = () => {
  return (
    <>
       <div className="hero">
            <div className="mask">
                <img className='into-image' src={BG} alt="into" />
            </div>
			<div className="container">
				<div className="title-hero">
					<h1 className="title title_hero">Dmitry Zelenov</h1>
					<h2 className="subtitle subtitle_hero">Automation Expert</h2>
					<h3 className="subheader">Siemens</h3>
          <div className='links-wrapper'>
            <Link to={"/projects"} className="shrink-border">Projects</Link>
            <Link to={"/contacts"} className="shrink-border">Contacts</Link>
          </div>
				</div>
			</div>
       </div>
    </>
  )
}

export default HeroImg