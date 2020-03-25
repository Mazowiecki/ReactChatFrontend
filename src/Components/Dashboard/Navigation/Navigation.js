import React from 'react';
import './Navigation.css';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';

const Navigation = props => {
    const history = useHistory();

    const handleLogOut = () => {
        localStorage.removeItem('token');
        history.push('/');
    };

    return (
        <nav>
            <p>Hello {props.userData.email}</p>
            <Button onClick={handleLogOut} type="button" variant="outlined">Logout</Button>
        </nav>
    );
};

export default Navigation;
