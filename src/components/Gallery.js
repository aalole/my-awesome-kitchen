import React from 'react';
import {Link} from 'react-router-dom';
import gallery1 from "../images/gallery1.png";
import gallery2 from "../images/gallery2.png";
import gallery3 from "../images/gallery3.png";
import gallery4 from "../images/gallery4.png";


const Gallery = () => {
    return(
        <section id="gallery">
            <h4>custom gallery</h4>
            <div className="gallery-images">
                <div className="img img1">
                    <img src={gallery1} alt="gallery one" />
                </div>
                <div className="img img1">
                    <img src={gallery2} alt="gallery two" />
                </div>
                <div className="img img1">
                    <img src={gallery3} alt="gallery three" />
                </div>
                <div className="img img1">
                    <img src={gallery4} alt="gallery four" />
                </div>
            </div>
            <Link className="gallery-anchor" to="#">view more</Link>
        </section>
    )
}
export default Gallery;