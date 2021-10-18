import React from 'react';
import './topHeader.css'
import { Navbar } from 'react-bootstrap';

const TopHeader = () => {
    return (
        <div className="top-header">
            <div>
                <Navbar.Brand href="#home"><img src="https://i.ibb.co/1bDzTfC/logo.png" alt="" /></Navbar.Brand>
            </div>
            <div className="flex gap-4">
                <div className="flex justify-center items-center gap-3">
                    <i class="fas fa-map-marker-alt w-10 h-10 rounded-full bg-pink-100 text-pink-600 flex justify-center items-center"></i>
                    <span>
                        <span className="text-gray-500">950 St Johns Pl</span>
                        <h6 className="mb-0">NY, United States</h6>

                    </span>
                </div>
                <div className="flex justify-center items-center gap-3">
                    <i class="fas fa-phone-volume  w-10 h-10 rounded-full bg-pink-100 text-pink-600 flex justify-center items-center"></i>
                    <span>
                        <span className="text-gray-500">Service Available</span>
                        <h6 className="mb-0">(+01)999.888.77</h6>

                    </span>
                </div>
                <div className="flex justify-center items-center gap-3">
                    <i class="far fa-clock  w-10 h-10 rounded-full bg-pink-100 text-pink-600 flex justify-center items-center"></i>
                    <span className="leading-6">
                        <span className="text-gray-500">08:00 AM - 06:00 PM</span>
                        <h6 className="mb-0">Monday - Friday</h6>

                    </span>
                </div>
            </div>


        </div>
    );
};

export default TopHeader;