import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import logo from '../../../src/Images/social/google.png'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    if (user || googleUser) {
        navigate(from, { replace: true });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)

    }

    return (
        <div className='mt-4'>
            <h2 className='text-center text-primary'><span>Login</span><hr /></h2>
            <Form onSubmit={handleSubmit} className='w-25 d-block mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                </Form.Group>
                <Button className='w-50 d-block mx-auto mt-3 signin-btn' variant="primary" type="submit">
                    Login
                </Button>
                <h6 className='mt-4'>New to My Gym?<Link style={{ textDecoration: 'none', color: 'blue' }} to='/signup'> Please Register</Link></h6>
                {error?.message && <p className='text-danger mt-2'>Error: {error?.message}</p>}
                <div className='d-flex align-items-center'>
                    <div className='w-50 bg-primary' style={{ height: '2px' }}></div>
                    <p className='mt-2 px-2'>Or</p>
                    <div className='w-50 bg-primary' style={{ height: '2px' }}></div>
                </div>
                <Button onClick={() => signInWithGoogle()} className='w-75 d-block mx-auto mt-3 signin-btn' variant="info"><img src={logo} alt="" /> Google Sign In</Button>
            </Form >

        </div >
    );
};

export default Login;