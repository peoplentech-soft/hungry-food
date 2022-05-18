import { faClock, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Booking from '../Booking/Booking';
import Modal from '../Modal/Modal';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container-brand">

                <div className="section-title">
                    <h2><span>Contact</span> Us</h2>
                    <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                    <button type="button" className="btn nav-button mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Your Table</button>
                </div>
                
                
            </div>

            <div className="container-brand mt-2">

                <div className="info-wrap">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 info">
                            <i><FontAwesomeIcon icon={faLocationDot} /></i>
                            <h4>Location:</h4>
                            <p>A108 Adam Street<br/>New York, NY 535022</p>
                        </div>

                        <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                            <i><FontAwesomeIcon icon={faClock} /></i>
                            <h4>Open Hours:</h4>
                            <p>Monday-Saturday:<br/>11:00 AM - 2300 PM</p>
                        </div>

                        <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                            <i><FontAwesomeIcon icon={faEnvelope} /></i>
                            <h4>Email:</h4>
                            <p>info@example.com<br/>contact@example.com</p>
                        </div>

                        <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                            <i><FontAwesomeIcon icon={faPhone} /></i>
                            <h4>Call:</h4>
                            <p>+1 5589 55488 51<br/>+1 5589 22475 14</p>
                        </div>
                    </div>
                </div>
            </div>





            {/* Popup Modal */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">HungryFood</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Booking />
                        </div>
                        <div className="modal-footer">
                            <button type="button" class="btn btn-secondary nav-button" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;