import React from 'react';
import './service.css'

const Service = (props) => {
    const { picture, name, body } = props.service;

    return (

        <div className="col">
            <div className="card h-100">
                <img src={picture} className="card-img-top" alt="..."></img>
                <div className="card-body body-design">
                    <h5 className="card-title text-center">{name}</h5>
                    <p className="card-text">{body}</p>
                    <div className='button'><button>READ MORE</button></div>
                </div>
            </div>
        </div>

    );
};

export default Service;