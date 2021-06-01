import React from 'react';
import { Link } from 'react-router-dom';
import ArrowRight from "../images/Combined Shape-4.svg";
import ArrowLeft from "../images/Combined Shape-3.svg";
const Carousel = () => {
    return (
        <section className="carousel">
        <div className="carousel-inner">
            <div className="left"><img src={ArrowLeft} alt="left arrow" /></div>
            <div className="carousel-text">
                <h4>what our customer say</h4>
                <p>Over 35 years of experience designing handmade kitchen</p>
                <article>
                    <blockquote>
                        since my first contact, i have received a very high level of customer service and advice with my
                        kitchen plan.
                        Ben responded very quickly to all my emails and the delivery of the kitchen was as palnned
                        <span className='testimonial-name'>Jane, Dundee</span>
                    </blockquote>
                    <Link id="faqs-btn" to='#'>FREQUENTLY ASKED QUESTIONS</Link>
                </article>
            </div>
            <div className="left"><img src={ArrowRight} alt="right arrow" /></div>

        </div>
    </section>
    )
}

export default Carousel