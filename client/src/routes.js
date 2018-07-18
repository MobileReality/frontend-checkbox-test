import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from './views/index';


export default (
    <Switch>
        <Route path="/" component={Index} />
    </Switch>
);
