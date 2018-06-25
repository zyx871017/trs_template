import React from 'react';
import ReactDom from 'react-dom';
import {HashRouter as Router, Route, Redirect} from "react-router-dom";
import 'babel-polyfill';
import Index from './src/index';

const user_name = localStorage.getItem('user_name');
ReactDom.render(
    <Router>
        <div style={{width: '1200px', margin: '0 auto'}}>
            <Route path="/" component={Index}/>
        </div>
    </Router>,
    document.getElementById('root')
);