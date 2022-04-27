import React from 'react';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import banner7 from '../../Images/gym-banner(7).png'
import banner1 from '../../Images/gym-banner(1).jpg'
import banner8 from '../../Images/gym-banner(8).png'
import Services from '../Services/Services';
import Form from '../Form/Form';
import './Home.css'

const Home = () => {
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate('/about')
    }
    // const navigate = useNavigate()
    // const handleContact = () => {
    //     navigate('/about')
    // }
    return (
        <div className=''>
            {/* <img height='600px' className='img-fluid' src={banner} alt="" /> */}
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className='w-75 mx-auto header-text'>
                            <h1>Stay Healthy With</h1>
                            <h1>Your Gym Trainer</h1>
                            <p>If you are looking for a personal trainer you have come to the right place.
                                I don't just show you how to do an exercise; I educate you in the areas of strength training, cardiovascular endurance, and proper nutrition.</p>
                            <div onClick={handleNavigation} className='button'><button className='read-more-btn'>Read More</button></div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner"
                        src={banner8}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div className='w-75 mx-auto header-text'>
                            <h1>Stay Healthy With</h1>
                            <h1>Your Gym Trainer</h1>
                            <p>If you are looking for a personal trainer you have come to the right place.
                                I don't just show you how to do an exercise; I educate you in the areas of strength training, cardiovascular endurance, and proper nutrition.</p>
                            <div onClick={handleNavigation} className='button'><button className='read-more-btn'>Read More</button></div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner"
                        src={banner7}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div className='w-75 mx-auto header-text'>
                            <h1>Stay Healthy With</h1>
                            <h1>Your Gym Trainer</h1>
                            <p>If you are looking for a personal trainer you have come to the right place.
                                I don't just show you how to do an exercise; I educate you in the areas of strength training, cardiovascular endurance, and proper nutrition.</p>
                            <div onClick={handleNavigation} className='button'><button className='read-more-btn'>Read More</button></div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Services></Services>
            <Form></Form>
        </div>
    );
};

export default Home;