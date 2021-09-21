import logo from './logo.svg';
import *as style from './App.module.css';
import {Message} from "./components/Message";
import {MessageList} from "./components/MessageList";
import React, {useState} from "react";


function App() {
    const [listMessage, setListMessage] = useState()

    return <div>
        <Message
            onSubmit={(value) => {
                setListMessage(value);
            }}
        />
    </div>
}


export default App;