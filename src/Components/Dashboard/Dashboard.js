import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import './Dashboard.css';
import Navigation from "./Navigation/Navigation";

const Dashboard = () => {
    return (
        <>
            <Navigation/>
            <Container fixed>
                <div className="flexCenter fullHeight">
                    <Paper className='paperStyles paperPadding' elevation={3}>
                        hfjksdhfjkhjksd
                    </Paper>
                </div>
            </Container>
        </>
    );
};

export default Dashboard;
