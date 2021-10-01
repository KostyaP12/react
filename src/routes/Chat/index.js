import React, {useEffect, useState} from "react";
import {uuid} from "uuidv4";
import {makeStyles} from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import {Grid} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import {ChatList} from "./routes/ChatsList";
import {MessageList} from "./routes/ChatsList/reoutes/MessageList";
import {Message} from "./routes/SendMessage";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    chatSection: {
        width: '100%',
        height: '80vh'
    },
    headBG: {
        backgroundColor: '#e0e0e0'
    },
    borderRight500: {
        borderRight: '1px solid #e0e0e0'
    },
    messageArea: {
        height: '70vh',
        overflowY: 'auto'
    }
});

export function Chat() {
    const [listMessage, setListMessage] = useState([]);

    const handleSubmit = (message) => {
        setListMessage([...listMessage, message])
    };

    useEffect(() => {
        let lastMessage = listMessage[listMessage.length - 1];
        if (lastMessage !== undefined) {
            if (lastMessage.author !== "Robot") {
                let robotMessage = {key: uuid(), text: lastMessage.text, author: "Robot"}
                setListMessage([...listMessage, robotMessage])
            }
        }
    }, [listMessage]);

    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="h5" className="header-message">Chat</Typography>
            </Grid>
            <Grid container component={Paper} className={classes.chatSection}>
                <Grid item xs={3} className={classes.borderRight500}>
                    <List>
                        <ListItem button key="Author">
                            <ListItemIcon>
                            </ListItemIcon>
                            <ListItemText primary="Author"></ListItemText>
                        </ListItem>
                    </List>
                    <Divider/>
                    <Grid item xs={12} style={{padding: '10px'}}>
                        <TextField id="outlined-basic-email" label="Search" variant="outlined" fullWidth/>
                    </Grid>
                    <Divider/>
                    <List>
                        <ChatList props={listMessage}/>
                    </List>
                </Grid>
                <Grid item xs={9}>
                    <List className={classes.messageArea}>
                        <ListItem>
                            <Grid container>
                                <Grid item xs={12}>
                                    <MessageList props={listMessage}/>
                                </Grid>
                            </Grid>
                        </ListItem>
                    </List>
                    <Divider/>
                    <Grid container style={{padding: '20px'}}>
                        <Message parentCallback={handleSubmit}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}