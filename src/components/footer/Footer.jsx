import React from 'react';
import './footer.css';
// import logo from '../../assests/logo.svg'

const Footer = () => {
    return (
        <div className="phil_footer section_padding" id="footer">
            <div className="phil_footer-heading">
                <h1 className="gradient_text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            </div>
            {/* <div className="phil_footer-btn">
                <p>Request Entry</p>
            </div> */}
            <div className="phil_footer-links">
                <div className="phil_footer-links_logo">
                    <a href="/home">Philma<span>Zone</span> </a>
                    {/* <img src={logo} alt="" /> */}
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="phil_footer-links_div">
                    <h4>Links</h4>
                    <p>Andela</p>
                    <p>Social Community</p>
                    <p>Supports</p>
                    <p>Volunteer</p>
                    <p>Contact</p>
                </div>
                <div className="phil_footer-links_div">
                    <h4>Companies</h4>
                    <p>Andela</p>
                    <p>Google</p>
                    <p>Github</p>
                    <p>Amazon</p>
                    <p>Piratebay</p>
                </div>
                <div className="phil_footer-links_div">
                    <h4>Reach Us</h4>
                    <p>@ No. 1 Chief Cockrene close</p>
                    <p>+234 8041 7087</p>
                    <p>Supports</p>
                    <p>phil9icy@gmail.com</p>
                    <p>Contact</p>
                </div>
            </div>
            <div className="phil_footer-copyright">
                <p> @-2021 All right resreved Philip</p>
            </div>
        </div>
    )
}

export default Footer
