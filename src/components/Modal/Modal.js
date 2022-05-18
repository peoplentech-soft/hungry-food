import React from 'react';
import Booking from '../Booking/Booking';

const Modal = () => {
    return (
        <div>

            <button type="button" className="btn nav-link nav-button" data-bs-toggle="modal" data-bs-target="#exampleModal">Booking</button>


            {/* Popup Modal */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">MediCanvas</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Booking />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn button-brand nav-button" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>        

    );
};

export default Modal;