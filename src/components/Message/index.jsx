import React from 'react';
import './message.css';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import SendIcon from "@material-ui/icons/Send";
import {uuid} from "uuidv4";

export class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: ' ',
            text: ' ',
            author: 'Author'
        };
        this.message = {};
        this.searchInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    focusTextInput() {
        this.searchInput.current.focus();
    }

    handleChange = (event) => {
        this.setState({key: uuid(), text: event.target.value, author: "Author"});
        this.message = this.state
    }


    handleSubmit = (event) => {
        this.props.parentCallback(this.message);
        this.state.text = " "
        event.preventDefault();
    }

    render() {
        return (
            <Grid container style={{padding: '20px'}}>
                <Grid item xs={11}>
                    <form onSubmit={this.handleSubmit}>
                        <TextField ref={this.searchInput} autoFocus={true} id="outlined-basic-email" label="Type Something" fullWidth value={this.state.text}
                                   onChange={this.handleChange}/>
                        <Grid item xs={1} align="right">
                            <Fab type="submit" color="primary" aria-label="add" align="right" onClick={this.focusTextInput}><SendIcon/></Fab>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        );
    }
}