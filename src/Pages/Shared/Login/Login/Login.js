import React from 'react';
import './login.css'
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="mb-8">
            <h2 className="text-center my-8">Login to medilink account</h2>
            <div className="w-96 border p-4 mx-auto rounded">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="font-medium">Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="font-medium">Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <p>Forgot your password?</p>
                    <Link to="/register">creat a new account?</Link>
                    <Button className="w-80" variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
                <div className="flex justify-center gap-3 my-6">
                    <hr className="w-20" />
                    <span>or continue with</span>
                    <hr className="w-20" />
                </div>
                <div className="flex gap-2">
                    <button className="px-10 py-2 border text-2xl text-white rounded fbBgColor"><i class="fab fa-facebook"></i></button>
                    <button className="px-10 py-2 border text-2xl text-white rounded gglBgColor"><i class="fab fa-google-plus"></i></button>
                    <button className="px-10 py-2 border text-2xl text-white rounded gitBgColor"><i class="fab fa-github"></i></button>
                </div>

            </div>
        </div>

    );
};

export default Login;