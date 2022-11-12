import React from 'react';
import './Languages.css';
import { FaGlobe} from 'react-icons/fa';

const lang = [
    {
        lang: 'Speaking English',
        level: 'B2'
    },
    {
        lang: 'Technical English',
        level: 'C1'
    },
    {
        lang: 'Russian',
        level: 'C2'
    },

]

const Languages = () => {
  return (
    <article className='languages'>
        <div className="container">
            <div className="languages-content">

                {lang.map((item, index) => {
                    return (
                        <div className="languages-box" key={index}>
                            <FaGlobe
                            size={35} 
                            style={
                                {
                                    color: "rgb(235, 104, 103)",
                                }
                            }
                        />
                            <div className="languages-level" key={index}>
                                <h3>{item.level}</h3>
                                <p>{item.lang}</p>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    </article>
  )
}

export default Languages