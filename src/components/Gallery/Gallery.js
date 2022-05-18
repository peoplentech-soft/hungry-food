import React from 'react';
import './Gallery.css';
import gallery_1 from '../../img/gallery/gallery-1.jpg';
import gallery_2 from '../../img/gallery/gallery-2.jpg';
import gallery_3 from '../../img/gallery/gallery-3.jpg';
import gallery_4 from '../../img/gallery/gallery-4.jpg';
import gallery_5 from '../../img/gallery/gallery-5.jpg';
import gallery_6 from '../../img/gallery/gallery-6.jpg';
import gallery_7 from '../../img/gallery/gallery-7.jpg';
import gallery_8 from '../../img/gallery/gallery-8.jpg';

const Gallery = () => {
    return (
        <section id="gallery" className="gallery">
            <div className="container-fluid">

                <div className="section-title">
                    <h2>Some photos from <span>Our Restaurant</span></h2>
                    <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                </div>

                <div className="row g-0">

                    <div className="col-lg-3 col-md-4">
                        <div className="gallery-item">
                            <a href="assets/img/gallery/gallery-1.jpg" className="gallery-lightbox">
                                <img src={gallery_1} alt="" className="img-fluid"/>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4">
                        <div className="gallery-item">
                            <a href="assets/img/gallery/gallery-2.jpg" className="gallery-lightbox">
                                <img src={gallery_2} alt="" className="img-fluid"/>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4">
                        <div className="gallery-item">
                            <a href="assets/img/gallery/gallery-3.jpg" className="gallery-lightbox">
                                <img src={gallery_3} alt="" className="img-fluid"/>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4">
                        <div className="gallery-item">
                            <a href="assets/img/gallery/gallery-4.jpg" className="gallery-lightbox">
                                <img src={gallery_4} alt="" className="img-fluid"/>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4">
                        <div className="gallery-item">
                            <a href="assets/img/gallery/gallery-5.jpg" className="gallery-lightbox">
                                <img src={gallery_5} alt="" className="img-fluid"/>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4">
                        <div className="gallery-item">
                            <a href="assets/img/gallery/gallery-6.jpg" className="gallery-lightbox">
                                <img src={gallery_6} alt="" className="img-fluid"/>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4">
                        <div className="gallery-item">
                            <a href="assets/img/gallery/gallery-7.jpg" className="gallery-lightbox">
                                <img src={gallery_7} alt="" className="img-fluid"/>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4">
                        <div className="gallery-item">
                            <a href="assets/img/gallery/gallery-8.jpg" className="gallery-lightbox">
                                <img src={gallery_8} alt="" className="img-fluid"/>
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Gallery;