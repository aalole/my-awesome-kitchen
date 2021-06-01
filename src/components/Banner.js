import React, { useState} from 'react';
import Logo from "../images/Logo.svg";
import Facebook from "../images/Combined Shape-1.svg";
import Twitter from "../images/Combined Shape-2.svg";
import Instagram from "../images/Combined Shape.svg";
import Cart from '../images/carticon.png';
import {Link} from 'react-router-dom';

const Banner = () => {
    const [toggle, setToggle ] = useState(false);
    const openNav = () => setToggle(!toggle)
   return (
    <section id="banner">
    <div className="banner-wrap">
        <nav >
            <ul className={`header-social social-icon ${toggle ? null: 'hide'}`}>
                <li><Link to="#"><img className='sos-ico' src={Facebook} alt="facebook" /></Link></li>
                <li><Link to="#"><img className='sos-ico' src={Twitter} alt="twitter" /></Link></li>
                <li><Link to="#"><img className='sos-ico' src={Instagram} alt="instagram" /></Link></li>
            </ul>
            <ul className={`banner-nav-item nav-item1 ${toggle ? null: 'hide'}`}>
                <li><Link to="">shop</Link></li>
                <li><Link to="">plan my kitchen</Link></li>
            </ul>
            <div className="logo">
                <Link className='app-logo' to="#"><img id="logo" src={Logo} alt="app logo" /></Link>
                <div className="btn" id="togle-btn" onClick={openNav}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            </div>
            <ul className={`banner-nav-item nav-item2 ${toggle ? null: 'hide'}`}>
                <li><Link to="">about us</Link></li>
                <li><Link to="">gallery</Link></li>
            </ul>
            <div className="cart ">
                <Link className= 'my-order' to="#">my order <i className='fas fa-shopping-cart'></i> </Link>
            </div>
        </nav>

            <div className="banner-text">
                <h3>Design and order your new kitchen online today</h3>
                <p>Bespoke & made to measure handmade kitchen design</p>
                <Link to="#" className='order-now'>order now</Link>
            </div>
        </div>
    </section>
)}


export default Banner