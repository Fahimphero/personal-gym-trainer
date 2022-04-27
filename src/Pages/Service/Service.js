import React from 'react';
import { useNavigate } from 'react-router-dom';
import './service.css'

const Service = (props) => {
    const { _id, picture, name, body } = props.service;
    const navigate = useNavigate();
    const handleNavigation = (_id) => {
        navigate(`/checkout/${_id}`)
    }
    return (

        <div className="col">
            <div className="card h-100">
                <img src={picture} className="card-img-top img-fluid" alt="..."></img>
                <div className="card-body body-design">
                    <h5 className="card-title text-center">{name}</h5>
                    <p className="card-text">{body}</p>
                    <div onClick={() => handleNavigation(_id)} className='button'><button>BOOK NOW</button></div>
                </div>
            </div>
        </div>

    );
};

export default Service;