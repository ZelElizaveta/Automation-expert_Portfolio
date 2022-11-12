import React from 'react';
import Navbar from '../Header/Navbar';
import './Subheader.css';

const Subheader = (props) => {
  const {title, img} = props;
  return (
    <article className='subheader-hero'>
      <Navbar/>
      <h1 className='title title_about'>{title}</h1>
      <img src={img} alt="img" />
    </article>
  )

}

export default Subheader