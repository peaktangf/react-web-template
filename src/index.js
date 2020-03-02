import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import { HashRouter, Route, Switch } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

import Home from './pages/home';

ReactDOM.render(<HashRouter>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/home" component={Home} />
    </Switch>
</HashRouter>, document.body);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();