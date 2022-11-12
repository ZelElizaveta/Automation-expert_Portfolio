import React from 'react';
import './Contacts.css';
import Subheader from '../Subheader/Subheader';
import About from '../../IMG/IMG/AboutMe.jpg';
import { FaWhatsapp, FaLinkedin, FaTelegram, FaMailBulk, FaPhone } from 'react-icons/fa';


const contacts = [
    {
        social: 'WhatsApp',
        icon: <FaWhatsapp size={30} 
        style={
            {
                color: "rgb(235, 104, 103)",
            }
        }/>,
        url: 'https://wa.me/79130474639'
    },
    {
        social: 'Telegram',
        icon: <FaTelegram size={30} 
            style={
                {
                    color: "rgb(235, 104, 103)",
                }
            }
        />,
        url: 'https://t.me/ZelenDim'
    },
    {
        social: 'LinkedIn',
        icon: <FaLinkedin size={30} 
            style={
                {
                    color: "rgb(235, 104, 103)",
                }
            }
        />,
        url: 'https://www.linkedin.com/in/zelendim/'
    },
]


const Contacts = () => {
  return (
    <>
        <Subheader title={'Contacts'} img={About}/>
        <section className='contacts'>
            <div className="container">
                <div className="contacts-text">
                    <h3 className='subheader subheader_experience subheader_experience_contacts'>If you have any questions about cooperation, please contact my social networks</h3>
                </div>
                <div className="contacts-wrapper">
                    <div className="phone">
                        <div className="phone-number">
                            <FaPhone size={25} 
                                style={
                                    {
                                        color: "rgb(235, 104, 103)",
                                    }
                                }
                            /> 
                            <a href="tel:+79130474639">+7 913 047 46 39</a>
                        </div>
                        <div className="gmail">
                            <FaMailBulk size={25} 
                                style={
                                    {
                                        color: "rgb(235, 104, 103)",
                                    }
                                }
                            />
                            <a href="mailto:zelendim@gmail.com">zelendim@gmail</a>
                        </div>
                    </div>
                    <div className="social-links">

                        {contacts.map((item, index) => {
                            return(
                                <div className="link" key={index}>
                                    {item.icon}
                                    <a href={item.url} target="_blank" rel="noopener noreferrer">{item.social}</a>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contacts