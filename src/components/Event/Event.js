import React from 'react';
import './Event.css';
import event_1 from '../../img/event/event-1.jpg';
import event_2 from '../../img/event/event-2.jpg';
import event_3 from '../../img/event/event-3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';

const Event = () => {
  return (
    <section id="events" className="events">
      <div className="container">

        <div className="section-title">
          <h2>Organize Your <span>Events</span> in our Restaurant</h2>
        </div>

        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row event-item">
                <div className="col-lg-6">
                  <img src={event_1} className="img-fluid" alt="" />
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 content">
                  <h3>Birthday Parties</h3>
                  <div className="price">
                    <p><span>$189</span></p>
                  </div>
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                  <ul>
                    <li><i><FontAwesomeIcon icon={faCheckDouble}/></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li><i><FontAwesomeIcon icon={faCheckDouble}/></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li><i><FontAwesomeIcon icon={faCheckDouble}/></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  </ul>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row event-item">
                <div className="col-lg-6">
                  <img src={event_2} className="img-fluid" alt="" />
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 content">
                  <h3>Private Parties</h3>
                  <div className="price">
                    <p><span>$290</span></p>
                  </div>
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                  <ul>
                    <li><i><FontAwesomeIcon icon={faCheckDouble}/></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li><i><FontAwesomeIcon icon={faCheckDouble}/></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li><i><FontAwesomeIcon icon={faCheckDouble}/></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  </ul>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row event-item">
                <div className="col-lg-6">
                  <img src={event_3} className="img-fluid" alt="" />
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 content">
                  <h3>Custom Parties</h3>
                  <div className="price">
                    <p><span>$99</span></p>
                  </div>
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                  <ul>
                    <li><i><FontAwesomeIcon icon={faCheckDouble}/></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li><i><FontAwesomeIcon icon={faCheckDouble}/></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li><i><FontAwesomeIcon icon={faCheckDouble}/></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  </ul>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>





    </section>
  );
};

export default Event;