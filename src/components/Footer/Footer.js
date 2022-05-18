import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <h3>HungryFood</h3>
                <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
                <div className="social-links">
                    <a href="#" className="twitter"><i><FontAwesomeIcon icon={faTwitter}/> </i></a>
                    <a href="#" className="facebook"><i><FontAwesomeIcon icon={faFacebook}/> </i></a>
                    <a href="#" className="instagram"><i><FontAwesomeIcon icon={faInstagram}/> </i></a>
                    <a href="#" className="linkedin"><i><FontAwesomeIcon icon={faLinkedin}/> </i></a>
                </div>
                <div className="copyright">
                    &copy; Copyright <strong><span>HungryFood</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                    Designed by <a href="https://peoplentech.net/">Peoplentech.net</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;