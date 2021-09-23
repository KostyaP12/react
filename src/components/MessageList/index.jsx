import React, {useEffect, useState} from "react";
import "./messageList.css"


export const MessageList = (props) => {
    console.log(props)
    const [list, setList] = useState([]);
    let messageList = [];
    if (props.props.message && props.props.robotMessage) {
        messageList.push(props.props.message)
        messageList.push(props.props.robotMessage)
    }
    useEffect(() => {
        setList([...list, messageList[0], messageList[1]])
    }, [props.props.message]);

    if (list[0] == false || list[0] == undefined) {
    list.shift()
    }
    if (list[1] == false || list[1] == undefined) {
        list.shift()
    }

    return (
        <div className="message border rounded container">
            {list.map((value) => <div >{value.text} <br/> {value.author}<hr/></div>)}
        </div>
    )
}