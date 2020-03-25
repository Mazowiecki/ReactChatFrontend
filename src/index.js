import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from 'react-router-dom'
import Login from "./Components/Login/Login";
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import Register from "./Components/Register/Register";
import Dashboard from "./Components/Dashboard/Dashboard";
import {createStore} from 'redux';
import allReducers from './Redux/reducers';
import {Provider} from 'react-redux'

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#fff',
        },
    },
});

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render((
        <React.StrictMode>
            <ThemeProvider theme={darkTheme}>
                <Provider store={store}>
                    <BrowserRouter>
                        <Route path="/" exact component={Login}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/dashboard" component={Dashboard}/>
                    </BrowserRouter>
                </Provider>
            </ThemeProvider>
        </React.StrictMode>
    ),
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
