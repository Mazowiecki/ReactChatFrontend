import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Form.css'

const Form = props => {
    const [comment, setcomment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.sendPost(comment);
        setcomment('');
    };

    return (
        <div className='formContainer'>
            <form onSubmit={handleSubmit} noValidate autoComplete="off">
                <TextField id="standard-basic"
                           value={comment}
                           onChange={event => {
                               setcomment(event.target.value);
                           }}/>
                <Button type="submit">Comment</Button>
            </form>
        </div>
    );
};

export default Form;
