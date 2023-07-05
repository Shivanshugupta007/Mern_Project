import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Vie from './Views';

const Home = () => {

    const [userName, setUserName] = useState('');

    const [show, setShow] = useState(false);

    const [views, setViews] = useState('');

    const [all, setAll] = useState([]);

    const navigate = useNavigate();

    const userData = async () => {
        try {
            const response = await axios.get('/getdata');
            const temp2 = response.data.posts;
            setAll(temp2.map(yz => yz.post));
        } catch (err) {
            console.log(err);
        };
    }

    const writePost = (e) => {
        console.log(e.target);
        const value = e.target.value;
        setViews(value);
    }

    const submitPost = async (e) => {
        e.preventDefault();

        const res = await fetch("/views", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({ views })
        });

        const data = await res.json();

        if (!data) {
            console.log("Post Not Send");
        } else {
            alert("Post Sent");
            setViews('');
        }
        userData();
    }

    const userHome = async () => {
        try {
            const response = await axios.get('/getdata');
            const temp = response.data.posts;
            setAll(temp.map(xyz => xyz.post));
            setUserName(response.data.name);
            setShow(true);
        } catch (err) {
            console.log(err);
            navigate("/Signup");
        };
    }

    useEffect(() => {
        userHome();
    }, []);

    if (show === true) {
        return (
            <>
                <div className="home-page">
                    <div className="home-div">
                        <h2 className="pt-5 def">WELCOME</h2>
                        <h3 className="myName">{userName}</h3>
                        <h5 className="Bio">{"Happy To See You Back"}</h5>
                        <form method="POST" className="formData">
                            <div className="form-group data">
                                <textarea onChange={writePost} value={views} className="form-control textHere" rows="3" id="comment" name="post" placeholder="Write A Post"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={submitPost}>Publish Post</button>
                        </form>

                    </div>

                </div>
                <>
                    {all?.map((pri, index) => {
                        return (
                            <Vie
                                key={index}
                                id={index}
                                ind={index}
                                pri={pri}
                            />
                        );
                    })}
                </>

            </>
        )
    }
}

export default Home;