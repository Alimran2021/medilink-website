import React from 'react';
import { Form, Button } from 'react-bootstrap';
const Contact = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 container my-20 gap-20">
            <div>
                <Form>
                    <h1 className="fw-bold mb-20">Leave Us Message</h1>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="email" placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control type="email" placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="email" placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Your Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <button className="btn btn-primary fw-bold">SEND</button>
                </Form>
            </div>
            <div>
                <h2 className="mb-24 fw-bold">Address</h2>
                <span className="flex gap-3 items-center mb-4">
                    <i class="fas fa-map-marker fs-4 text-primary"></i>
                    <p className="mb-0">Medilink Technological Limited</p>
                </span>
                <span className="flex gap-3 items-center mb-4">
                    <i class="fas fa-phone-square fs-4 text-primary"></i>
                    <p className="mb-0">(+01)999.888.66</p>
                </span>
                <span className="flex gap-3 items-center mb-4">
                    <i class="fas fa-phone-square fs-4 text-primary"></i>
                    <p className="mb-0">(+01)999.888.77</p>
                </span>
                <span className="flex gap-3 items-center mb-4">
                    <i class="far fa-envelope fs-4 text-primary"></i>
                    <p className="mb-0">medilink@gmail.com</p>
                </span>
            </div>
        </div>
    );
};

export default Contact;