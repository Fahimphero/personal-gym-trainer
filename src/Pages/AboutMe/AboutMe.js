import React from 'react';
import ProfilePic from '../../Images/Fahim-my-bg.png'
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div className='bg' style={{ backgroundColor: '#006855', minWidth: '100%', minHeight: '100%', position: 'fixed', left: '0' }}>
            <div className='mt-5 '>
                <div className='d-flex align-items-center justify-content-center'>
                    <img className='w-25' src={ProfilePic} alt="" />
                    <div className='ms-5 text-light w-50'>
                        <h3 style={{ color: '#f9745d' }}>Irfanul Islam Fahim</h3>
                        <p>One day I will become a web developer like Jhankar Mahbub.
                            My aim in life is to be a web developer. Nobody can stop me now.
                            After four months of hard work I am now more determined than ever. NO PAIN NO GAIN!!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;