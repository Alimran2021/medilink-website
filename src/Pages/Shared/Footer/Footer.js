import React from 'react';
import FooterTop from './FooterTop/FooterTop';

const Footer = () => {
    return (
        <div>
            <FooterTop />
            <div className="bg-gray-800 py-6">
                <div className="flex justify-between items-center container">
                    <p className="text-white mb-0 grid grid-cols-1">&copy;Copyright MediLink All Right Reserved. Designed and Developed by Al Imran.</p>
                    <div className="">
                        <span className="text-white mr-6">Privacy Policy
                        </span>
                        <span className="text-white">Cookie Policy</span>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Footer;