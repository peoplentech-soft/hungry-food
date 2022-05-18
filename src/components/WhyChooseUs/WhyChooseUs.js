import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    return (
        <section id="why-us" className="why-us why-choose-us">
            <div className="container-brand">

                <div className="section-title">
                    <h2>Why choose <span>Our Restaurant</span></h2>
                    <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                </div>

                <div className="row">

                    <div className="col-lg-4">
                        <div className="box">
                            <span>01</span>
                            <h4>Professional Chefs</h4>
                            <p>Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
                        </div>
                    </div>

                    <div className="col-lg-4 mt-4 mt-lg-0">
                        <div className="box">
                            <span>02</span>
                            <h4>Friendly Enviorment</h4>
                            <p>Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest</p>
                        </div>
                    </div>

                    <div className="col-lg-4 mt-4 mt-lg-0">
                        <div className="box">
                            <span>03</span>
                            <h4>Great Support</h4>                            <p>Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;