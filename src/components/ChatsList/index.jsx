import ListItem from "@material-ui/core/ListItem";
import React from "react";
import ListItemText from "@material-ui/core/ListItemText";

export const ChatList = (props) => {

    return(
        <ListItem>
            {props.chat.map((item) => <ListItemText key={item.id} primary={item.name}></ListItemText>)}
        </ListItem>
    )
}