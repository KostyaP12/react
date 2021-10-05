import React, {useEffect, useState} from "react";
import "./messageList.css"


export const MessageList = (props) => {
    let messageList = [];

    props.props.map((message) => messageList.push(message))

    return (
        <div className="message border rounded container">
            {messageList.map((value) => <div >{value.text} <br/> {value.author}<hr/></div>)}
        </div>
    )
}