import React from "react";
import "./messageList.css"
import ListItemText from "@material-ui/core/ListItemText";


export const MessageList = (listMessage) => {

    return (
        <ListItemText> {listMessage.messages.map((value) => <div key={value.key}> {value.text} <br/> {value.author}
            <hr/>
        </div>)}</ListItemText>
    )
}


