import React from 'react';

const Footer = () => {
    return (
        <div className='text-center mt-5' style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#1e1d1b' }}>
            <h6 className='text-light pt-4'>Copyright © 2022 || <span style={{ color: 'blue' }}>personal-gym-trainer-61c76.web.app</span> </h6>
            <h6 className='mt-1 text-light'>Khulna, Bangladesh</h6>
            <small className='mt-1 mb-5 text-light'>All Rights Reserved</small>
        </div>
    );
};

export default Footer;