import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../image/not-found.png'
const NotFound = () => {
    return (
        <div className="my-20">
            <img style={{ width: '80%', height: '500px', margin: 'auto', }} src={img} alt="" />
            <Link to="/home">
                <button style={{ margin: 'auto' }} className="btn btn-warning mt-4">Back to Home</button>
            </Link>

        </div>
    );
};

export default NotFound;