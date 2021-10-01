import React from "react";
import "./messageList.css"
import ListItemText from "@material-ui/core/ListItemText";


export const MessageList = (listMessage) => {
        if(listMessage === undefined){
    return (
        <ListItemText> {listMessage.props.map((value) => <div key={value.key}> {value.text} <br/>{ /*{value.author}*/}<hr/></div>)}</ListItemText>
    )
        }
        return <div/>
}