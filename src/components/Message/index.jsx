import React, {useState} from 'react';
import './message.css';
import {MessageList} from "../MessageList";
import App from "../../App";

export class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ' ',
            author: 'Author'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({text: event.target.value, author: "Author"});
    }

    handleSubmit = (event) => {
        alert('Сочинение отправлено: ' + this.state.text + this.state.author);
        this.props.parentCallback(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Сочинение:
                    <textarea name = "text" value={this.state.text} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Отправить" />
            </form>
        );
    }
}