import React, {useEffect, useState} from 'react';
import './Dashboard.css';
import Navigation from "./Navigation/Navigation";
import {useSelector} from "react-redux";
import Chat from "./Chat/Chat";

const Dashboard = () => {
    const userData = useSelector(state => state.currentUser);
    const token = localStorage.getItem('token');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts();
    },[]);

    const getPosts = () => {
        fetch('http://localhost:5000/getPosts', {
            crossDomain: true,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }

        })
            .then(response => response.json())
            .then(res => {
                setPosts(res.response)
            });
    };

    return (
        <>
            <Navigation userData={userData}/>
            <Chat posts={posts}/>
        </>
    );
};

export default Dashboard;
