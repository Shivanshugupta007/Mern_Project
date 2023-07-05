import React, { useState } from 'react';
import signpic from './../images/ppp.svg';
import { NavLink, useNavigate } from 'react-router-dom';

const Signup = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({

        name: "", email: "", password: "", cpassword: ""
    });

    let name, value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }

    const PostData = async (e) => {

        e.preventDefault();

        const { name, email, password, cpassword } = user;

        console.log(name);

        console.log(email);

        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, password, cpassword
            })
        });

        const data = await res.json();

        console.log(data.error);

        if (data.error) {
            if (data.status === 422 || !data || data.error === "Enter All Required Fields") {
                window.alert("Please Fill All Field");

            }
            else if (data.error === "Password Not Match") {
                window.alert("Confirm Password Not Match");
            }
            else {
                window.alert("Email Already Registered");
            }
        }
        else {
            window.alert("Registered");
            navigate("../login", { replace: true });
        }
    }
    return (

        <>
            <section className="signup outLog">
                <div className="container mt-5">
                    <div className="signup-content row" >
                        <div className="signin-image col-sm-3 col-md-6">
                            <h2 className="form-title">SIGN UP</h2>
                            <form method="POST" className="registration-form" id="registration-form">

                                <div className="form-group">
                                    <label htmlFor="name">
                                        <i class="zmdi zmdi-account"></i>
                                    </label>
                                    <input type="text" className="form-control inpo" name="name" id="name" autoComplete="off"
                                        value={user.name}
                                        onChange={handleInputs}
                                        placeholder='Enter Name'>
                                    </input>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i class="zmdi zmdi-email"></i>
                                    </label>
                                    <input type="email" className="form-control inpo" name="email" id="email" autoComplete="off"
                                        value={user.email}
                                        onChange={handleInputs}
                                        placeholder='Enter Email'>
                                    </input>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">
                                        <i class="zmdi zmdi-lock"></i>
                                    </label>
                                    <input type="password" className="form-control inpo" name="password" id="password" autoComplete="off"
                                        value={user.password}
                                        onChange={handleInputs}
                                        placeholder='Enter Password'>
                                    </input>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="cpassword">
                                        <i class="zmdi zmdi-lock"></i>
                                    </label>
                                    <input type="password" className="form-control inpo" name="cpassword" id="cpassword" autoComplete="off"
                                        value={user.cpassword}
                                        onChange={handleInputs}
                                        placeholder='Confirm Password'>
                                    </input>
                                </div>

                                <div className="form-group form-button">
                                    <input className=" btn btn-primary form-submit" type="submit" name="signup" id="signup"
                                        value="Register"
                                        onClick={PostData}
                                    />
                                </div>

                            </form>
                        </div>


                        <div className="signin-form col-sm-3 col-md-6">
                            <figure>
                                <img src={signpic} alt="Register Pic" className="signup-pic" />
                            </figure>
                            <NavLink to="/login" className=" signup-image-link">I Am Already Register</NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Signup;