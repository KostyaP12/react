import ListItem from "@material-ui/core/ListItem";
import React, {useEffect, useState} from "react";
import ListItemText from "@material-ui/core/ListItemText";
import {uuid} from "uuidv4";
import SendIcon from "@material-ui/icons/Send";
import Fab from "@material-ui/core/Fab";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import {getChatByIDPath} from "../../../../navigation";
import {Link, Route} from "react-router-dom";
import Switch from "@material-ui/core/Switch";
import {MessageList} from "./reoutes/MessageList";

export const ChatList = (props) => {
    const [chatID, setChatID] = useState(0);
    const [chatList, setChatList] = useState([{name: chatID, id: chatID, messageList: [props]}])


    function addChat() {
        setChatID(chatID + 1);
        setChatList([...chatList, {name: chatID, id: chatID, messageList: []}])
    }

    /*function handleSubmit(id){
        for(let i = 0; i < chatList.length; i++ ){
            if(chatList[i].id === id){
                props.parentCallback(chatList[i]);
            }
        }
    }*/

    return (
        <Box sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
            <List component="nav" aria-label="main mailbox folders">
            </List>
            <Divider/>
            <List component="nav" aria-label="secondary mailbox folder">
                {
                    chatList.map((item) =>
                        <ListItem button component={Link} to={getChatByIDPath(chatID)}>
                            <ListItemText primary={item.name}/>
                        </ListItem>)
                }
            </List>
            <Fab type="submit" color="primary" aria-label="add" align="right" onClick={addChat}><SendIcon/></Fab>
        </Box>
    );
}