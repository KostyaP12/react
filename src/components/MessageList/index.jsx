import React, {useEffect, useState} from "react";


export const MessageList = (props) => {
    const [list, setList] = useState([if(this.props.props == undefined): []]);
    console.log(props.props)
    useEffect(() => {
        setList([...list, props.props])
    }, [props.props]);
    console.log(list);

    return (
        list.map((item) => <p>{item}</p>),
            <p>Hello! </p>
    )
    console.log(list)
}