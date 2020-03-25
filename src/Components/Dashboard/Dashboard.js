import React from 'react';
import './Dashboard.css';
import Navigation from "./Navigation/Navigation";
import {useSelector} from "react-redux";
import Chat from "./Chat/Chat";

const Dashboard = () => {
    const userData = useSelector(state => state.currentUser);

    return (
        <>
            <Navigation userData={userData}/>
            <Chat userData={userData}/>
        </>
    );
};

export default Dashboard;
