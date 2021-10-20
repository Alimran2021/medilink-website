import React from 'react';
import './login.css'
import { useLocation, useHistory } from 'react-router';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth/useAuth';


const Login = () => {
    // useAuth destructuring here
    const { error, emailHandler, passwordHandler, fbHandler, googleSignInHandler } = useAuth()
    const location = useLocation()
    const history = useHistory()
    const location_url = location?.state?.from || '/home'
    // google handler here
    const googleLoginHandler = () => {
        googleSignInHandler()
            .then((() => {
                history.push(location_url)
            }))
    }
    const facebookLoginHandler = () => {
        fbHandler()
            .then((() => {
                history.push(location_url)
            }))
    }
    const eamilPassword = () => {
        emailHandler()
            .then((() => {
                history.push(location_url)
            }))
    }
    return (
        // login form start here
        <div className="mb-8">
            <h2 className="text-center my-8">Login to medilink account</h2>
            <div className="w-96 shadow-md bg-white p-4 mx-auto rounded">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="font-medium">Email address</Form.Label>
                        <Form.Control onBlur={emailHandler} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="font-medium">Password</Form.Label>
                        <Form.Control onBlur={passwordHandler} type="password" placeholder="Password" required />
                        <p>{error}</p>
                    </Form.Group>
                    <Link className="text-decoration-none" to="/register">Creat a new account?</Link>
                    <Button onClick={eamilPassword} className="w-80 mt-4" variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
                <div className="flex justify-center gap-3 my-6">
                    <hr className="w-20" />
                    <span>or continue with</span>
                    <hr className="w-20" />
                </div>
                <div className="flex gap-2">
                    <button onClick={facebookLoginHandler} className="px-10 py-2 border text-2xl text-white rounded fbBgColor"><i class="fab fa-facebook"></i></button>
                    <button onClick={googleLoginHandler} className="px-10 py-2 border text-2xl text-white rounded gglBgColor"><i class="fab fa-google-plus"></i></button>
                    <button className="px-10 py-2 border text-2xl text-white rounded gitBgColor"><i class="fab fa-github"></i></button>
                </div>

            </div>
        </div>

    );
};

export default Login;