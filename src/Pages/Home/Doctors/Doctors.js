import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';
import './doctors.css'

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div id="doctors" className="my-20 container">
            <div className="my-20 text-center">
                <p className="font-medium text-blue-600">Meet Our Team</p>
                <h1 className="font-semibold team-style text-5xl">Specialist Doctors</h1>
            </div>
            <Row xs={1} md={4} className="g-4">
                {
                    doctors.map(doctor => <Doctor doctor={doctor} />)
                }
            </Row>
        </div>
    );
};

export default Doctors;