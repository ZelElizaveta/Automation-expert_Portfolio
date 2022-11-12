import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';


const Cards = (props) => {

    const {title, descrp} = props;

  return (
    <div className='card'>
        <h3 className="sudheader subheader_card">{title}</h3>
        <p className="card-text">{descrp.split('',200)} ...</p>
        <Link to={`/project/${title}`} className='skills-btn skills-btn_card'>See more</Link>
    </div>
  )
}

export default Cards