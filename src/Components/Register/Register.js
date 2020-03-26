import React, {useState} from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import './Register.css';
import {TextField} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';

const Register = () => {
    const [registerStatus, setRegisterStatus] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        handleRegister();
    };

    const handleRegister = () => {
        fetch('http://localhost:5000/register', {
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
                setRegisterStatus(res.status);
                if(res === true) {
                    history.push('/');
                }
            });
    };

    return (
        <Container fixed>
            <div className="flexCenter fullHeight">
                <Paper className='paperStyles paperPadding' elevation={3}>
                    <form onSubmit={handleSubmit}>
                        <div className="flexCenterColumn">
                            <h2>Register</h2>
                            <p>{registerStatus}</p>
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
                            <p>Already have an account yet? <a href='/' onClick={() => history.push('/')}>Click here</a></p>
                            <Button disabled={!password || !email} type="submit" variant="outlined">Register</Button>
                        </div>
                    </form>
                </Paper>
            </div>
        </Container>
    );
};

export default Register;
