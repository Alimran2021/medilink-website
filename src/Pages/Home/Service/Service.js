import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { serviceType, photo, description, id } = service
    return (
        <div className="mb-44 ">
            {
                <Col>
                    <Card style={{ width: '356px' }}>
                        <Card.Img className="relative" variant="top" src={photo} />
                        <Card.Body className="absolute bg-white py-8 px-4 top-52 left-4 w-80 shadow-md">
                            <div className="relative bottom-9 left-60 z-10 bg-pink-600 text-white w-10 h-10 p-2 rounded-full flex justify-center items-center text-2xl"><i className="fas fa-plus"></i></div>
                            <Card.Title className="fw-bold">{serviceType}</Card.Title>
                            <Card.Text className="font-medium">
                                {description}
                            </Card.Text>
                            <Link className="text-decoration-none text-black mr-8 hover:text-pink-600" to={`/service/${id}`}>
                                <span className="hover:text-pink-600 transition-opacity"> Read More</span>
                                <span className="text-pink-600"><i className="fas fa-long-arrow-right"></i></span>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            }
        </div>
    );
};

export default Service;