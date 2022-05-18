import React from 'react';
import './Chefs.css';
import chef_1 from '../../img/chefs/chefs-1.jpg';
import chef_2 from '../../img/chefs/chefs-2.jpg';
import chef_3 from '../../img/chefs/chefs-3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Chefs = () => {
    return (
        <section id="chefs" className="chefs">
            <div className="container">

                <div className="section-title">
                    <h2>Our Proffesional <span>Chefs</span></h2>
                    <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                </div>

                <div className="row">

                    <div className="col-lg-4 col-md-6">
                        <div className="member">
                            <div className="pic"><img src={chef_1} className="img-fluid" alt=""/></div>
                            <div className="member-info">
                                <h4>Walter White</h4>
                                <span>Master Chef</span>
                                <div className="social">
                                    <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
                                    <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
                                    <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
                                    <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="member">
                        <div className="pic"><img src={chef_2} className="img-fluid" alt=""/></div>
                            <div className="member-info">
                                <h4>Sarah Jhonson</h4>
                                <span>Patissier</span>
                                <div className="social">
                                    <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
                                    <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
                                    <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
                                    <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="member">
                            <div className="pic"><img src={chef_3} className="img-fluid" alt=""/></div>
                            <div className="member-info">
                                <h4>William Anderson</h4>
                                <span>Cook</span>
                                <div className="social">
                                    <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
                                    <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
                                    <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
                                    <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Chefs;