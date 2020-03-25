import React, {useEffect, useState} from 'react';
import Container from '@material-ui/core/Container';
import './Chat.css'
import Post from "./Post/Post";
import Form from "./Form/Form";

const Chat = props => {
    const token = localStorage.getItem('token');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts();
    }, []);

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

    const handleSendPost = comment => {
        fetch('http://localhost:5000/createPost', {
            crossDomain: true,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
                userId: props.userData.id,
                content: comment
            })

        })
            .then(response => {
                if (response.status === 200) {
                    getPosts();
                }
            })
    };


    return (
        <Container maxWidth='xs'>
            <div className="chatFlexCenter">
                {posts.map((post, index) => (
                    <div key={post.id} className={props.userData.id === post.user ? 'chatPostOwner' : 'chatPostNoOwner'}>
                        <Post post={post}/>
                    </div>
                ))}
            </div>
            <Form sendPost={handleSendPost}/>
        </Container>
    );
};

export default Chat;
