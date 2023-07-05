import React, { useState, useContext } from 'react';
import loginpic from './../images/login.svg';
import { NavLink, useNavigate } from 'react-router-dom'
import { userContext } from './../App.js';
import axios from 'axios';

const Login = () => {

    const { state, dispatch } = useContext(userContext);

    const Navigate = useNavigate();

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const loginUser = async (e) => {

        e.preventDefault();

        const credentials = {
            email: email,
            password: password
        };

        axios.post('/signin', credentials)
            .then(response => {

                console.log('Login successful');
                console.log(response.data);
                dispatch({ type: "USER", payload: true });
                Navigate("/");
            })
            .catch(error => {

                window.alert("Invalid Data");
                console.error(error);
            });
    };

    return (

        <>
            <>
                <section className="signin outLog">
                    <div className="container mt-5 log">
                        <div className="signin-content row" >

                            <div className="signin-image col-sm-3 col-md-6">
                                <figure>
                                    <img src={loginpic} alt="Login Pic" className="signin-pic" />
                                </figure>
                                <NavLink to="/signup" className="signin-image-link">New User Register</NavLink>
                            </div>

                            <div className="signin-form col-sm-3 col-md-6">
                                <h2 className="form-title">LOGIN</h2>
                                <form method="POST" className="registration-form" id="registration-form">


                                    <div className="form-group">
                                        <label htmlFor="email">
                                            <i class="zmdi zmdi-email"></i>
                                        </label>
                                        <input type="email" className="form-control inpo" name="email" id="email" autoComplete="off"

                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder='Enter Email'
                                        >
                                        </input>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="password">
                                            <i class="zmdi zmdi-lock"></i>
                                        </label>
                                        <input type="password" className="form-control inpo" name="password" id="password" autoComplete="off"

                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder='Enter Password'
                                        >
                                        </input>
                                    </div>

                                    <div className="form-group form-button">
                                        <input className="btn btn-primary form-submit" type="submit" name="signin" id="signin" value="Login"
                                            onClick={loginUser}
                                        />
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        </>
    )
}

export default Login;
