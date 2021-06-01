import React from 'react';
import Logo from "../images/Logo.svg";
import Facebook from "../images/Combined Shape-1.svg";
import Twitter from "../images/Combined Shape-2.svg";
import Instagram from "../images/Combined Shape.svg";
import {Link} from 'react-router-dom';


const Footer = () => {
    return (
	<footer id="footer">
        <div className="hr">
            <img src={Logo} alt='app logo'/>
        </div>
        <div className="footer-items ft-links">
                <div className="ft-item-1 f-item">
                <h5>About</h5>
                <ul>
                    <li><Link to='#'>Shop</Link></li>
                    <li><Link to='#'>plan my kitchen</Link></li>
                    <li><Link to='#'>about us</Link></li>
                    <li><Link to='#'>Gallery</Link></li>								
                </ul>
            </div>
            {/* <!-- footer row 2 --> */}
            <div className="ft-item-2 f-item">
                <h5>Services</h5>
                <ul>
                    <li><Link to='#'>faqs</Link></li>
                    <li><Link to='#'>contact</Link></li>
                    <li><Link to='#'>how to buy</Link></li>
                    <li><Link to='#'>download</Link></li>
                </ul>
            </div>
            {/* <!-- footer row 3 --> */}
            <div className="ft-item-3 f-item">
                <h5>info</h5>
                <ul>
                    <li><Link to="#">delivery</Link></li>
                    <li><Link to="#">terms</Link></li>
                    <li><Link to="#">privacy</Link></li>
                </ul>
            </div>
            {/* <!-- footer row 4 --> */}
            <div className="ft-item-4 f-item">
                <h5>follow</h5>
                <ul className="ft-social social-icon">
                    <li><Link to=''><img className='ft-soc-img' src={Facebook} alt='facebook logo'/></Link></li>
                    <li><Link to=''><img className='ft-soc-img' src={Twitter} alt='twitter logo'/></Link></li>
                    <li><Link to=''><img className='ft-soc-img' src={Instagram} alt='instagram'/></Link></li>
                </ul>
            </div>
        </div>
        <div className="copyright">
            <small>copyright online MTC home kitchen-2018. All right reserved</small><br />
            <small>responsive web design, development and hosting by mtc</small> 
        </div>
    </footer>
	)
}

export default Footer;