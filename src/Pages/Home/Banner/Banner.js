import React from 'react';
import './banner.css'
import { Button } from 'react-bootstrap'


const Banner = () => {
    return (
        <div className="banner">
            <div className="grid grid-cols-2 justify-center items-center h-full container">
                <div className="leading-8">
                    <h1 className="fw-bold mb-4 text-5xl">Find A Doctor & <br />
                        Book Appointment</h1>
                    <p className="mb-14">Since the first days of operation of Medilink, our teaming has been focused on
                        building a high-qualities medicals service by Medilink.</p>
                    <Button className="focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500">
                        MAKE AN APPOINTMENT
                    </Button>
                </div>

            </div>
        </div>
    );
};

export default Banner;