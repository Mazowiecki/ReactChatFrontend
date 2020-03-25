import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import './Chat.css'

const Chat = props => {
    console.log(props);
    return (
        <Container fixed>
            <div className="flexCenter fullHeight">
                <Paper className='paperStyles paperPadding' elevation={3}>
                    hfjksdhfjkhjksd
                </Paper>
            </div>
        </Container>
    );
};

export default Chat;
