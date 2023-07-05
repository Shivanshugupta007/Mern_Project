import React, { useEffect, useState } from 'react';
import userpic from './../images/user.png';
import { useNavigate } from 'react-router-dom';
import Show from './Show';
import axios from 'axios';

const About = () => {

    const [userData, setUserData] = useState({});

    const [post, setPost] = useState();

    const [check, setCheck] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get('/getdata');
                console.log(response.data);
                setUserData(response.data);
                setPost(response.data.posts.length);
                setCheck(true);
            } catch (err) {
                console.log(err);
                navigate("/login");
            }
        };
        
        fetchData();

    }, []);

    if (check === true) {
        return (
            <>
                <Show
                    userpic={userpic}
                    id={userData._id}
                    name={userData.name}
                    email={userData.email}
                    post={post}
                />
            </>
        )
    }
}

export default About;