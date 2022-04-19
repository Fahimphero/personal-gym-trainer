import React from 'react';
import { useNavigate } from 'react-router-dom';
import banner from '../../Images/gym-banner(3).png'
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    // const navigate = useNavigate()
    // const handleContact = () => {
    //     navigate('/about')
    // }
    return (
        <div className=''>
            <img className='img-fluid' src={banner} alt="" />
            {/* <div className='header-text w-25'>
                <p style={{ fontSize: '30px' }} className='text-light'>Reach Your Potential With Your Trainer</p>
                <button onClick={handleContact}>Contact Me</button>
            </div> */}

            <Services></Services>
        </div>
    );
};

export default Home;