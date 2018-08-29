import React from 'react';
import data from './../../data/abstract';
import Crumbs from './../component/Crumbs';

export default class Abstract extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <div className="banner_content"/>
            <div className="container box_center title_content">
                <span className="fl sub_title">公司简介</span><Crumbs/></div>
            <div className="divide_line"/>
            <div>
                <p>{data.text}</p>
                <img src={data.top_right_img} alt=""/>
            </div>
            <div>
                <img src={data.bottom_img} alt=""/>
            </div>
        </div>)
    }
}