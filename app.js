import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, Redirect} from "react-router-dom";
import 'babel-polyfill';
import './src/css/common.css';
import Index from './src/Index';
import First_page from './src/First_page';
import Abstract from './src/about_us/Abstract';
import Co_sense from './src/about_us/Co_sense';
import Co_project from './src/about_us/Co_project';
import createBrowserHistory from 'history/createHashHistory';

const history = createBrowserHistory();

const user_name = localStorage.getItem('user_name');
ReactDom.render(
    <Router history={history}>
        <div style={{width: '100%', margin: '0 auto'}}>
            <Index history={history}>
                <Route exact path="/" render={() => (<Redirect to="/first_page"/>)}/>
                <Route path="/first_page" component={First_page}/>
                <Route path="/abstract" component={Abstract}/>
                <Route path="/co_sense" component={Co_sense}/>
                <Route path="/co_project" component={Co_project}/>
            </Index>
        </div>
    </Router>,
    document.getElementById('root')
);