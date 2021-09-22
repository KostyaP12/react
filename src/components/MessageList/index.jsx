import React, {useState} from "react";

export function MessageList(props) {
    const [messageList, setMessageList] = useState();
    setMessageList(...messageList, props)
    console.log(props)
}