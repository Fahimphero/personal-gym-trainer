import React from 'react';
import banner from '../../Images/gym-banner(3).png'
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <img className='img-fluid' src={banner} alt="" />
            <Services></Services>
        </div>
    );
};

export default Home;