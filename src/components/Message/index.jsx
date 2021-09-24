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

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({key: uuid(), text: event.target.value, author: "Author"});
    }

    handleSubmit = (event) => {
        this.props.parentCallback(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <Grid container style={{padding: '20px'}}>
                <Grid item xs={11}>
                    <form onSubmit={this.handleSubmit}>
                        <TextField id="outlined-basic-email" label="Type Something" fullWidth value={this.state.text}
                                   onChange={this.handleChange}/>
                        <Grid item xs={1} align="right">
                            <Fab type="submit" color="primary" aria-label="add" align="right"><SendIcon/></Fab>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        );
    }
}