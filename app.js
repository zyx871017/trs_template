import React from 'react';
import ReactDom from 'react-dom';
import {HashRouter as Router, Route, Redirect} from "react-router-dom";
import 'babel-polyfill';
import './src/css/common.css';
import Index from './src/index';
import Main from './src/Main';

const user_name = localStorage.getItem('user_name');
ReactDom.render(
    <Router>
        <div style={{width: '100%', margin: '0 auto'}}>
            <Route path="/" component={props => (
                <Index {...props}>
                    <Route path="/main" component={Main}/>
                </Index>)
            }/>
        </div>
    </Router>,
    document.getElementById('root')
);