import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='text-center bg' style={{ backgroundColor: '#006855', minWidth: '100%', minHeight: '100%', position: 'fixed', left: '0', fontFamily: 'Or Lemmen,Times,Times New Roman,serif', fontSize: '36px', fontWeight: 'bold' }}>
            <h2 className='mt-5 text-light' style={{}}>Error 404</h2>
            <h2 style={{ color: '#ff4827' }}>Lost?</h2>
            <h2 style={{ color: '#ff4827' }}>There is no place like <Link to='/'><span style={{ color: 'blue' }}>Home </span></Link></h2>
        </div>
    );
};

export default NotFound;