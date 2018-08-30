import React from 'react';
import data from './../../data/abstract';
import Crumbs from './../component/Crumbs';

export default class Abstract extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="abstract">
            <div className="banner_content"/>
            <div className="container box_center title_content">
                <span className="fl sub_title">公司简介</span><Crumbs/></div>
            <div className="divide_line"/>
            <div className="container box_center">
                <div className="fl col2in1">
                    {data.text.map((p, i) => {
                        return (<p className="paragraph" key={i}>{p}</p>)
                    })}
                </div>
                <div className="fr col2in1 tx_center">
                    <img className="top_right_img" src={data.top_right_img} alt=""/>
                </div>
            </div>
            <div className="container box_center tx_center">
                <img className="top_right_img" src={data.bottom_img} alt=""/>
            </div>
        </div>)
    }
}