import React, {useState} from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import './Login.css';
import {TextField} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {setCurrentUserDate} from "../../Redux/actions";
import auth from '../../auth'

const Login = () => {
    const [loginStatus, setloginStatus] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();
    const dispach = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        handleLogin();
    };

    const handleLogin = () => {
        fetch('http://localhost:5000/login', {
            crossDomain: true,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password
            })

        })
            .then(response => response.json())
            .then(res => {
                setloginStatus(res.status);
                if (res.token) {
                    localStorage.setItem('token', res.token);
                    dispach(setCurrentUserDate(res.user[0]));
                    history.push('/dashboard');
                }
            });
    };

    return (
        <Container fixed>
            <div className="flexCenter fullHeight">
                <Paper className='paperStyles paperPadding' elevation={3}>
                    <form onSubmit={handleSubmit}>
                        <div className="flexCenterColumn">
                            <h2>Login</h2>
                            <p>{loginStatus}</p>
                            <TextField
                                className="emailInput"
                                id="outlined-email-input"
                                label="Email"
                                type="email"
                                autoComplete="current-email"
                                variant="outlined"
                                value={email}
                                onChange={event => {
                                    setEmail(event.target.value);
                                }}
                            />
                            <TextField
                                className="passInput"
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                variant="outlined"
                                value={password}
                                onChange={event => {
                                    setPassword(event.target.value);
                                }}
                            />
                            <p>Don't have an account yet? <a href='/register' onClick={() => history.push('/register')}>Click here</a>
                            </p>
                            <Button disabled={!password || !email} type="submit" variant="outlined">Login</Button>
                        </div>
                    </form>
                </Paper>
            </div>
        </Container>
    );
};

export default Login;
