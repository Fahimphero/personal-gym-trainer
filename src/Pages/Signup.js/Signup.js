import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('');
    const [name, setName] = useState('')



    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value)
    }
    const handleName = (event) => {
        setName(event.target.value)
    }
    if (user) {
        navigate('/');
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError("Your two passwords didn't match");
            return
        }

        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div className='mt-4'>
            <h2 className='text-center text-primary'><span>Signup</span><hr /></h2>
            <Form onSubmit={handleSubmit} className='w-50 d-block mx-auto'>
                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control onBlur={handleName} type="text" placeholder="Enter name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control onBlur={handleConfirmPassword} type="password" placeholder="Confirm Password" required />
                </Form.Group>
                <Button className='w-50 d-block mx-auto mt-3 signin-btn' variant="primary" type="submit">
                    Signup
                </Button>
                <h6 className='mt-4'>Already have an account?<Link style={{ textDecoration: 'none', color: 'blue' }} to='/login'> Please Login</Link></h6>
                {hookError?.message && <p className='text-danger mt-2'>Error: {hookError?.message}</p>}
                <p className='text-danger mt-2'>{error}</p>
            </Form>
        </div>
    );
};

export default Signup;


