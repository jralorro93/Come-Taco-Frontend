import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App2';
import * as serviceWorker from './serviceWorker';

//Routers
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";

//Themes
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme/muiTheme'


ReactDOM.render(
    <Router>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
