import './Navbar.css';
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../IMG/Logo/Logo';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const listItem = [
        {
            id: '',
            title: 'Home'
        },
        {
            id: 'about',
            title: 'About me'
        },
        {
            id: 'experience',
            title: 'Work experience'
        },
        {
            id: 'projects',
            title: 'Projects'
        },
        {
            id: 'contacts',
            title: 'Contacts'
        },
    ]

    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }

    // функция инвертирует занчени click при нажании

    const [size, setSize] = useState(false);
    const changeSize = () => {
        if(window.scrollY >= 100) {
            setSize(true)
        } else {
            setSize(false)
        }
    };

    window.addEventListener('scroll', changeSize);

    // при скролле больше 100px меняется размер NavBar


  return (
        <nav className={size ? 'header header-bg' : 'header'}>
                <Logo/>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    
                    {listItem.map((item, index) => {
                        return (
                            <Link key={index} to={`/${item.id}`} onClick={handleClick}>{item.title}</Link>
                        )
                    })}

                </ul>
                <div className="hamburger" onClick={handleClick}>
                    {click ? <FaTimes size={25} style={{color: "#fff"}}/> :
                        <FaBars size={25} style={{color: "#fff"}}/>
                    }  
                </div>
        </nav>
  )
}

export default Navbar;