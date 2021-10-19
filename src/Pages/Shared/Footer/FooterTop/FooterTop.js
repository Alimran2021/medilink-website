import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../image/medilink logo.png'

const FooterTop = () => {
    return (
        <div className="bg-gray-900 mt-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-20 container">
                <div>
                    <img className="mb-8" src={logo} alt="" />
                    <p className="text-gray-300">(+01)999.888.77 or (+01)999.888.66</p>
                    <p className="text-gray-300">medilink@gmail.com</p>
                    <p className="text-gray-300">59 Street, 1200 Techpark</p>
                    <p className="text-gray-300">8am – 6pm EST, Monday – Friday</p>

                </div>
                <div>
                    <h3 className="mb-12 text-white">About</h3>
                    <p><Link className="no-underline text-gray-300 hover:text-white">Doctors</Link></p>
                    <p ><Link className="no-underline text-gray-300 hover:text-white">Service</Link></p>
                    <p><Link className="no-underline text-gray-300 hover:text-white">Departments</Link></p>
                    <p><Link className="no-underline text-gray-300 hover:text-white">About us</Link></p>

                </div>
                <div>
                    <h3 className="mb-12 text-white">Explore</h3>
                    <p><Link className="no-underline text-gray-300 hover:text-white">Blog</Link></p>
                    <p><Link className="no-underline text-gray-300 hover:text-white">Gellary</Link></p>
                    <p><Link className="no-underline text-gray-300 hover:text-white">Appointments</Link></p>
                    <p><Link className="no-underline text-gray-300 hover:text-white">Contact us</Link></p>
                </div>
                <div>
                    <h3 className="mb-12 text-white">Connect</h3>
                    <p className="text-gray-300">We bring the years, global</p>
                    <p className="text-gray-300">experience, and stamina to guide</p>
                    <p className="text-gray-300">our clients through new.

                    </p>
                </div>
            </div>

        </div >
    );
};

export default FooterTop;