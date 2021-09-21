import React, {useState} from 'react';
import './message.css';

export class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Будьте любезны, напишите сочинение о вашем любимом DOM-элементе.',
            author: 'Kostya'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({text: event.target.value});
    }

    handleSubmit(event) {
        alert('Сочинение отправлено: ' + this.state.text);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Сочинение:
                    <textarea name = "text" value={this.state.text} onChange={this.handleChange} />
                </label>
                    <input name = "author" type="text"/>
                <input type="submit" value="Отправить" />
            </form>
        );
    }
}