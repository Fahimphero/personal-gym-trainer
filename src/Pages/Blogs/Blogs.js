import React from 'react';

const Blogs = () => {
    return (
        <div className='w-50 mx-auto mt-5'>
            <h2>Q/A</h2>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            What is the difference between authorization and authentication?
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>Authentication</strong> 	In authentication process, the identity of users are checked. Authentication process is very helpful to know if the user is a human or a robot. Authentication process is done before authorization process. Many third party sites like google github etc helps us to ensure whether the user is a human or robot.
                            <strong> Authorization</strong>This process is useful to give permission to a human who wants to access the authorities resources. Not every human can get the permission to access the resources. In this process only the users are validated if he or she can gain access to the resources. This process is done after authentication process.
                            <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            What other services does firebase provide other than authentication?
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>Firebase Services: </strong>
                            Firebase gives us many useful services let alone authentication.
                            One of them is the cloud messaging service. In this servce Firebase helps us to give notifications in different platforms. Google analytics is also a very useful service given by Firebase. It helps us to track the customers or the users behaviour and their interests.This service is great for managing business.There are also other services like remote config whicg helps to remotely change the application UI and content, without publishing it again. Hosting is also a very good firebase service which helps us to host our projects in firebase website.
                            <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;