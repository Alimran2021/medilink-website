import React from 'react';
import './doctor.css'
import { Card, Col } from 'react-bootstrap';

const Doctor = ({ doctor }) => {
    const { name, photo, depertment } = doctor
    return (
        <div>
            <Col>
                <Card className="text-center p-4 border-0 shadow-md">

                    <img className="w-52 h-52 rounded-full mx-auto" src={photo} alt="" />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <p>{depertment}</p>
                    </Card.Body>
                    <div>
                        <span><i className="text-gray-500 mr-4 fab fa-facebook-f"></i></span>
                        <span><i className="text-gray-500 mr-4 fab fa-twitter"></i></span>
                        <span><i className="text-gray-500 mr-4 fab fa-instagram"></i></span>
                        <span><i className="text-gray-500 fab fa-google-plus-g"></i></span>
                    </div>
                </Card>
            </Col>
        </div>
    );
};

export default Doctor;