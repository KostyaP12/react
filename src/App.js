import {Message} from "./components/Message";
import {MessageList} from "./components/MessageList";
import React from "react";


class App extends React.Component {
    state = {}

    handleCallback = (message) => {
        this.setState({message})
        this.chatRobot(message)
    }
    chatRobot = (message) => {
        if (message.author === "Author") {
            let robotMessage = {text: message.text, author: "Robot"}
            this.setState({robotMessage})
        }
    }

    render() {
        return (
            <main>
                <MessageList props={this.state}/>
                <div className="container">
                    <Message parentCallback={this.handleCallback}/>
                </div>
            </main>
        )
    }
}

export default App;
