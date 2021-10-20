import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Medilink from '../Medilink/Medilink';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <Medilink />
            <Services />
            <Doctors />
        </div>
    );
};

export default Home;