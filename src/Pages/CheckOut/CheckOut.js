import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useServices from '../CustomHooks/UseServices';

const CheckOut = () => {
    const { id } = useParams();
    // console.log(typeof id);
    const [services, setServices] = useServices();
    // useEffect(() => {
    //     fetch('/data.json')
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [])

    const singleService = services?.find(service => service._id == id)
    // console.log(singleService);


    return (
        <div className='w-25 mx-auto mt-5'>
            <h3 className='text-center'>Your Service ID is {id}</h3>
            <div className="card h-100">
                <img src={singleService?.picture} className="card-img-top img-fluid" alt="..."></img>
                <div className="card-body body-design">
                    <h5 className="card-title text-center">{singleService?.name}</h5>
                    <p className="card-text">{singleService?.body}</p>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;