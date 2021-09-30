import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Home} from "./Home";
import {Chat} from "./Chat";
import {Profile} from "./Profile";
import {getChatPath, getProfilePath} from "../navigation";

export const Routes = (props) => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path={getChatPath()} component={Chat}/>
            <Route exact path={getProfilePath()} component={Profile}/>
        </Switch>
    );
};