import React from 'react';
import './message.css';

export const Message = (props) => {
    return (
        <p className="ourText">
            {props.children}
        </p>)
}