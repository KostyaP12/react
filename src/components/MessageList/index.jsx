import React, {useEffect, useState} from "react";
import "./messageList.css"
import ListItemText from "@material-ui/core/ListItemText";


export const MessageList = (props) => {

    return (
        <ListItemText> {props.props.map((value) => <div key={value.key}> {value.text} <br/> {value.author}<hr/></div>)}</ListItemText>
    )
}