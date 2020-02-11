import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { Router, Route } from 'react-router-dom';
import history from './components/history';
import Home from './components/Home';
import CreateUser from './components/CreateUser';

import reducers from './reducers'
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(ReduxThunk))
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route exact path="/" component={App}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/create" component={CreateUser}></Route>
        </Router>
    </Provider>,
    document.querySelector("#root")
)