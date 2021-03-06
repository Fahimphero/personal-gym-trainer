import React, { useEffect, useState } from 'react';
import useServices from '../CustomHooks/UseServices';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useServices();
    // useEffect(() => {
    //     fetch('data.json')
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [])
    return (
        <div className='container'>
            <h2 className='text-center mt-4 fw-bold'><u>Our Services</u></h2>
            <div className="mt-4 row row-cols-1 row-cols-md-3 g-4" >

                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div >
        </div>
    );
};

export default Services;