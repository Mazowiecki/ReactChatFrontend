import React from 'react';
import './Post.css'

const Post = props => {
    return (
        <div className='postCloud'>
            {props.post.body}
        </div>
    );
};

export default Post;
