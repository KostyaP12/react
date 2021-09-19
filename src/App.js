import logo from './logo.svg';
import *as style from './App.module.css';
import {Message} from "./components/Message";
import React from "react";

const textToMessage = "Any Text"

function App() {
  return (
      <div className={style.App}>
        <Message>
          {textToMessage}
        </Message>
      </div>
  )


}

export default App;