import React from 'react';
import './Dashboard.css';
import Navigation from "./Navigation/Navigation";
import {useDispatch, useSelector} from "react-redux";
import Chat from "./Chat/Chat";
import {setCurrentUserDate} from "../../Redux/actions";

const Dashboard = () => {
    const dispach = useDispatch();
    const userData = useSelector(state => state.currentUser);

    const handleUpdateUserInfoAfterReload = userData => {
        dispach(setCurrentUserDate(userData));
    };

    return (
        <>
            <Navigation userData={userData}/>
            <Chat updateUser={handleUpdateUserInfoAfterReload} userData={userData}/>
        </>
    );
};

export default Dashboard;
