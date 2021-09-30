import ListItem from "@material-ui/core/ListItem";
import React from "react";
import ListItemText from "@material-ui/core/ListItemText";
import {uuid} from "uuidv4";

export const ChatList = (props) => {
    let chatList = [];
    if(props.props[0]){
        chatList = [{name:props.props[0].author, id:uuid(), chat: props.props}];
    }

    return(
        <ListItem>
            {chatList.map((item) => <ListItemText key={item.id} primary={item.name}></ListItemText>)}
        </ListItem>
    )
}