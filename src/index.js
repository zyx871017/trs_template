import React from 'react';
import Header from './component/Header';

class Index extends React.Component {
    render() {
        return (<div>
            <div className="top_content">
                <div className="top_text_content">
                    <i className="wb_icon"/>
                    <i className="wx_icon"/>
                    <span>产品注册</span>
                    <i className="edit"/>
                    <span>4006300229</span>
                    <i className="phone_icon"/>
                </div>
            </div>
            <Header/>
            {this.props.children}
        </div>);
    }
}

export default Index;