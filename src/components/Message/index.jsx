import React from 'react';
import './message.css';

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
        this.props.parentCallback(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <form  className="row" onSubmit={this.handleSubmit}>
                <label>
                    Сообщение:
                    <textarea className="form-control col-8 col-sm-9 col-md-8" placeholder="Type your message here..." name="text" value={this.state.text}
                              onChange={this.handleChange}/>
                </label>
                <input className="btn btn-secondary col-4 col-sm-3 col-md-4 m-1" type="submit" value="Отправить"/>
            </form>
        );
    }
}