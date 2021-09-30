import {Message} from "./routes/SendMessage";
import {MessageList} from "./routes/MessageList";
import React, {useEffect, useState} from "react";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import {uuid} from "uuidv4";
import {ChatList} from "./routes/ChatsList";
import {Routes} from "./routes/Routes";
import {BrowserRouter} from "react-router-dom";
import {Header} from "./components/Header";

/*const useStyles = makeStyles({
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
});*/

function App() {
    /*const [listMessage, setListMessage] = useState([]);

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

    const classes = useStyles();*/

    return (
        <BrowserRouter>
            <Header/>
            <Routes/>
        </BrowserRouter>
    )
}

export default App;