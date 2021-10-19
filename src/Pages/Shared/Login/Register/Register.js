import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../../hooks/useFirebase/useFirebase';

const Register = () => {
    const { nameHandler, emailHandler, passwordHandler, registerHandler, fbHandler, googleSignInHandler } = useFirebase()
    return (
        <div className="mb-8">
            <h2 className="text-center my-8">Register your account?</h2>
            <div className="w-96 border p-4 mx-auto rounded">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="font-medium">Name</Form.Label>
                        <Form.Control onBlur={nameHandler} type="name" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="font-medium">Email address</Form.Label>
                        <Form.Control onBlur={emailHandler} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="font-medium">Password</Form.Label>
                        <Form.Control onBlur={passwordHandler} type="password" placeholder="Password" />
                    </Form.Group>
                    <Link className="text-decoration-none text-black" to="/login">Already you have an account?</Link>
                    <Button onClick={registerHandler} className="w-80 mt-4" variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
                <div className="flex justify-center gap-3 my-6">
                    <hr className="w-20" />
                    <span>or continue with</span>
                    <hr className="w-20" />
                </div>
                <div className="flex gap-2">
                    <button onClick={fbHandler} className="px-10 py-2 border text-2xl text-white rounded fbBgColor"><i class="fab fa-facebook"></i></button>
                    <button onClick={googleSignInHandler} className="px-10 py-2 border text-2xl text-white rounded gglBgColor"><i class="fab fa-google-plus"></i></button>
                    <button className="px-10 py-2 border text-2xl text-white rounded gitBgColor"><i class="fab fa-github"></i></button>
                </div>

            </div>
        </div>
    );
};

export default Register;