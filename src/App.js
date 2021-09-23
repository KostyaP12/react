import {Message} from "./components/Message";
import {MessageList} from "./components/MessageList";
import React, {useState} from "react";


function App() {
    const [listMessages, setListMessages] = useState([])

    const handleCallback = (message) => {
        if (message.author === "Author") {
            let robotMessage = {text: message.text, author: "Robot"}
            setListMessages([...listMessages,message, robotMessage])
        }
    }

    return (
        <main>
            <MessageList props={listMessages}/>
            <div className="container">
                <Message parentCallback={handleCallback}/>
            </div>
        </main>
    )

}

export default App;
