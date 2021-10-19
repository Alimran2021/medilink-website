import React from 'react';
import './medilink.css'

const Medilink = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 my-20 mx-8">
            <div className="col-span-2 ">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center ">
                    <img src="https://radiustheme.com/demo/wordpress/themes/medilink/wp-content/uploads/2019/02/about.png" alt="" />
                    <div className="ml-4">
                        <h2 className="mb-6 text-4xl fw-bold">Welcome To MediLink.
                            Central Hospital</h2>
                        <p className="leading-8">Welcome to our Medilink Central Hospital. Here we serve it with all our might.
                            We are treated here by modern equipment. They come to our private nursing care here.</p>
                    </div>
                </div>
            </div>
            <div className="">
                <span className="flex items-center gap-3 p-4 rounded bg-primary text-white mb-3 cursor-pointer">
                    <i class="far fa-calendar-check text-2xl"></i>
                    <p className="text-2xl mb-0">Request Appointment</p>
                </span>
                <span className="flex items-center gap-3 p-4 rounded bg-primary text-white mb-3 cursor-pointer">
                    <i class="fas fa-user-md text-2xl"></i>
                    <p className="text-2xl mb-0">Find Doctors</p>
                </span>
                <span className="flex items-center gap-3 p-4 rounded bg-primary text-white mb-3 cursor-pointer">
                    <i class="fas fa-map-marker  text-2xl"></i>
                    <p className="text-2xl mb-0">Find Locations</p>
                </span>
                <span className="flex items-center gap-3 p-4 rounded bg-primary text-white mb-3 cursor-pointer">
                    <i class="fas fa-phone-alt text-2xl"></i>
                    <p className="text-2xl mb-0">Emergency Contact</p>
                </span>
            </div>
        </div>
    );
};

export default Medilink;