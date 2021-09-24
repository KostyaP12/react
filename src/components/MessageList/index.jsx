import React, {useEffect, useState} from "react";
import "./messageList.css"
import ListItemText from "@material-ui/core/ListItemText";


export const MessageList = (props) => {
    let messageList = [];

    props.props.map((message) => messageList.push(message))
    console.log(messageList)

    return (
        <ListItemText> {messageList.map((value) => <div key={value.key}> {value.text} <br/> {value.author}<hr/></div>)}</ListItemText>
    )
}