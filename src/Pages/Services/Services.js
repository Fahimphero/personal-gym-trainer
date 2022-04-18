import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='container'>
            <div className="mt-4 row row-cols-1 row-cols-md-3 g-4" >

                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div >
        </div>
    );
};

export default Services;