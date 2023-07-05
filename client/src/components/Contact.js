import React, { useEffect, useState } from 'react';

const Contact = () => {

    const [userData, setUserData] = useState({ name: "", email: "", message: "" });

    const userContact = async () => {
        try {

            const res = await fetch("/getdata", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const data = await res.json();
            console.log(data);
            setUserData({ ...userData, name: data.name, email: data.email});

            if (!await res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        userContact();
    }, []);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserData({ ...userData, [name]: value });
    }

    const contactForm = async (e) => {
        e.preventDefault();

        const { name, email, message } = userData;

        const res = await fetch("/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, message
            })
        });

        const data = await res.json();

        if (!data) {
            console.log("Message Not Send");
        } else {
            alert("Message Sent");
            setUserData({ ...userData, message: "" })
        }
    }

    return (
        <>

            <div className="contact_form contactPage2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offSet-lg-1">
                            <div className="contact_form_container py-5">
                                <div className="contact_form_title">

                                    <form method="POST" id="contact_form">
                                        <div className="contact_form_name d-flex justify-content-between align-item-between">
                                            <input type="text" id="contact_form_name" className="col-lg-4 col-sm-4 form-control input_field"
                                                name="name"
                                                value={userData.name}
                                                onChange={handleInput}
                                                placeholder="Your Name" required="true" />
                                            <input type="email" id="contact_form_email" className="col-lg-4 form-control input_field"
                                                name="email"
                                                value={userData.email}
                                                onChange={handleInput}
                                                placeholder="Your Email" required="true" />
                                        </div>
                                        <div className="contact_form_text">
                                            <textarea className="form-control contact_form_message m-5" cols="100" rows="5"
                                                name="message"
                                                value={userData.message}
                                                onChange={handleInput}
                                                placeholder="Write A Feedback" ></textarea>

                                        </div>
                                        <div className="contact_form_button">
                                            <button type="submit" onClick={contactForm} className="btn btn-primary contact_button">Submit Feedback</button>
                                        </div>
                                    </form>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>


            </div>
        </>
    )
}

export default Contact;