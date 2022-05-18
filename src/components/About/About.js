import { faCheckDouble, faMarsDouble } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container-brand">

                <div className="row">

                    <div className="col-lg-5 align-items-stretch video-box image-box">
                    </div>

                    <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch">

                        <div className="content">
                            <h3><strong>About Us</strong></h3>
                            <p>
                            Our restaurant has been serving wonderful Thai and Indian food to thousands of food lovers around the country for more than a generation and our aim was and always has been to satisfy customer's tastebuds.
                            </p>
                            <p className="fst-italic">
                            Our serene garden and interiors for a calm and relaxing meal is unparalleled to any other restaurants in Dhaka. Come and dine with us and enjoy a good time with your family and friends.
                            </p>
                            <ul>
                                <li><FontAwesomeIcon icon={faCheckDouble} /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                <li><FontAwesomeIcon icon={faCheckDouble} /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                <li><FontAwesomeIcon icon={faCheckDouble} /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            </ul>
                                
                            <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default About;