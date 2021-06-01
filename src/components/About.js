import React from 'react';
import {Link} from 'react-router-dom';
import Kitchen from "../images/kitchen-about-bg.png";

const About = () => {
    return (
        <div className="kitchen-about">
        <div className="ktc-about-left"><img src={Kitchen} alt="my-kitchen" /></div>
        <div className="ktc-text">
            <div className="ktc-text-inner">
                <h3>quality craftmanship from build to delivery</h3>
                <p>Discover the beauty of a handmade kitchen</p>
                <article>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam, quis quae reiciendis
                    repellat esse fugit corrupti? Quae debitis incidunt vitae expedita, aperiam ad ut. Tempora minima
                    sunt iste fugiat.
                </article>
                <Link className='ktc-about-link' to="#">about us</Link>
            </div>
        </div>
    </div>
    )
}

export default About;