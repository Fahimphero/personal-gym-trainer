import React from 'react';
import { Accordion } from 'react-bootstrap';
import picture from '../../Images/question-mark.jpg';

const Blogs = () => {
    return (
        <div className='w-75 mx-auto mt-5'>
            <h2 className='text-center'>Q/A: </h2>
            <div className='row'>
                <div className='col-12 col-lg-6 d-flex justify-content-center'>
                    <img style={{ height: '600px' }} className='img-fluid' src={picture} alt="" />
                </div>
                <div className='col-12 col-lg-6'>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header> <h5>1. What is the difference between authorization and authentication?</h5></Accordion.Header>
                            <Accordion.Body >
                                <p><strong>Authentication: </strong></p> 	In the authentication process, the identity of users is checked. The authentication process is very helpful to know if the user is a human or a robot. The authentication process is done before the authorization process. Many third-party sites like Google, GitHub, etc help us to ensure whether the user is a human or robot.
                                <p className='mt-3'><strong> Authorization: </strong></p> This process is useful to give permission to a human who wants to access the authority's resources. Not every human can get permission to access the resources. In this process, only the users are validated if he or she can gain access to the resources. This process is done after the authentication process.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><h5>  2. What other services does firebase provide other than authentication?</h5></Accordion.Header>
                            <Accordion.Body>
                                <p><strong>Firebase Services: </strong></p>
                                Firebase gives us many useful services let alone authentication. One of them is the cloud messaging service. In this service, Firebase helps us to give notifications on different platforms. Google Analytics is also a very useful service given by Firebase. It helps us to track the customer's or the user's behavior and their interests. This service is great for managing a business. There are also other services like remote config which helps to remotely change the application UI and content, without publishing it again. Hosting is also a very good firebase service which helps us to host our projects on the firebase website.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>

        </div>
    );
};

export default Blogs;