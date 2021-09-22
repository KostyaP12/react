import logo from './logo.svg';
import *as style from './App.module.css';
import {Message} from "./components/Message";
import {MessageList} from "./components/MessageList";
import React, {useState} from "react";


class App extends React.Component{
    state = {message: []}

    handleCallback = (childData) =>{
        this.setState({message: childData})
    }

    render(){
        console.log("render app")
        return(
            <div>
                <MessageList props={this.state.message}/>
                <Message parentCallback = {this.handleCallback}/>
            </div>
        )
    }
}
export default App;
