import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Mumbai from "./images/mumbai.jpg"
import Chennai from "./images/chennai.jpg"
import Delhi from "./images/delhi.jpg"
import Jaipur from "./images/jaipur.jpg"
import Hyderabad from "./images/hyderabad.jpg"
import Benguluru from "./images/benguluru.jpg"
import Kolkata from "./images/kolkata.jpg"
import Agra from "./images/agra.jpg"
import Goa from "./images/goa.jpg"
import "./places.css"
import { useState } from "react";
import { Button,Modal} from "react-bootstrap";
import Bookingform from "./bookingform";

function Places() {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }
    return (
        <div className="place">
        <h1 style={{ color: '#413839', fontSize: 50, textAlign: "center" }}>Destinations</h1>
        <br />
        <div className="container">
            <div className="row">
                {/* Repeat this block for each destination */}
                <div className="col-md-4 mb-4">
                    <div className="card ">
                        <img src={Mumbai} class="card-img-top" alt="Mumbai" />
                        <div class="card-body">
                            <h5 class="card-title">Mumbai</h5>
                            <Button onClick={handleShowModal}>Book</Button>
                        </div>
                    </div>
                </div>


                    <div className="col-md-4" style={{ height: 900, width: 400 }}>
                        <div class="card h-70">
                            <img src={Chennai} class="card-img-top" alt="pic" />
                            <div class="card-body">
                                <h5 class="card-title">Chennai</h5>
                                <p class="card-text"></p>
                                <Button onClick={handleShowModal}>Book</Button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div class="card h-70">
                            <img src={Delhi} class="card-img-top" alt="pic" />
                            <div class="card-body">
                                <h5 class="card-title">Delhi</h5>
                                <p class="card-text"></p>
                                <Button onClick={handleShowModal}>Book</Button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4" style={{ height: 900, width: 430 }}>
                        <div class="card h-70">
                            <img src={Jaipur} class="card-img-top" alt="pic" />
                            <div class="card-body">
                                <h5 class="card-title">Jaipur</h5>
                                <p class="card-text"></p>
                                <Button onClick={handleShowModal}>Book</Button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4" style={{ height: 900, width: 425 }}>
                        <div class="card h-80">
                            <img src={Hyderabad} class="card-img-top" alt="pic" />
                            <div class="card-body">
                                <h5 class="card-title">Hyderabad</h5>
                                <p class="card-text"></p>
                                <Button onClick={handleShowModal}>Book</Button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4" style={{ height: 800, width: 380 }}>
                        <div class="card h-80">
                            <img src={Benguluru} class="card-img-top" alt="pic" />
                            <div class="card-body">
                                <h5 class="card-title">Benguluru</h5>
                                <p class="card-text"></p>
                                <Button onClick={handleShowModal}>Book</Button>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-4" style={{ height: 900, width: 430 }}>
                        <div class="card">
                            <img src={Kolkata} class="card-img-top" alt="pic" />
                            <div class="card-body">
                                <h5 class="card-title">Kolkata</h5>
                                <p class="card-text"></p>
                                <Button onClick={handleShowModal}>Book</Button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4" style={{ height: 500, width: 400 }}>
                        <div class="card">
                            <img src={Agra} class="card-img-top" alt="pic" />
                            <div class="card-body">
                                <h5 class="card-title">Agra</h5>
                                <p class="card-text"></p>
                                <Button onClick={handleShowModal}>Book</Button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4" style={{ height: 900, width: 405 }}>
                        <div class="card">
                            <img src={Goa} class="card-img-top" alt="pic" />
                            <div class="card-body">
                                <h5 class="card-title">Goa</h5>
                                <p class="card-text"></p>
                                <Button onClick={handleShowModal}>Book</Button>
                            </div>
                        </div>
                    </div>

                    <Modal show={showModal} onHide={handleCloseModal} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Booking Form</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Bookingform/>                            
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseModal}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </div>

            </div>
        </div>
    )
}
export default Places
