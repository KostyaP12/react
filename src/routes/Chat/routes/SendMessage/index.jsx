import React, {useEffect, useRef, useState} from 'react';
import './message.css';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import SendIcon from "@material-ui/icons/Send";
import {uuid} from "uuidv4";
import Box from "@material-ui/core/Box";

export const Message = ({onSendMessage}) => {

    const [text, setText] = useState('');

    const focusTextInput = useRef();

    const onChange = (e) => {
        setText(e.target.value);
    }

    const onSubmit = (e) => {
        onSendMessage({
            author: "Author",
            text: text,
            key: uuid()
        })
        e.preventDefault();
        setText("");
    }

    useEffect(() => {
        focusTextInput.current.focus();
    })
    return (
        <Grid container style={{padding: '20px'}}>
            <Grid item xs={11}>
                <form onSubmit={onSubmit}>
                    <TextField inputRef={focusTextInput} autoFocus={true} fullWidth value={text} onChange={onChange}/>
                    <Fab type="submit" color="primary"/>
                </form>
            </Grid>
        </Grid>
    );
}