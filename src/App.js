import logo from './logo.svg';
import *as style from './App.module.css';
import {Message} from "./components/Message";
import {MessageList} from "./components/MessageList";
import React, {useState} from "react";


class App extends React.Component{
    state = {data: []}

    handleCallback = (childData) =>{
        this.setState({data: childData})
    }

    render(){
        return(
            <div>
                <Message parentCallback = {this.handleCallback}/>

            </div>
        data.map((message) =></p>
        )
    }
}
export default App;