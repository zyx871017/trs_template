import React from 'react';

class Index extends React.Component {
    render() {
        return (<div>
            <div className="top_content">
                <i className="phone_icon"/>
                <span>4006300229</span>
                <i className="edit"/>
                <span>产品注册</span>
                <i className="wx_icon"/>
                <i className="wb_icon"/>
            </div>
            <header>
                <i className="co_logo"/>
                <ul className="nav_menu">
                    <li className="menu_item">关于我们</li>
                    <li className="menu_item">产品</li>
                    <li className="menu_item">方案</li>
                    <li className="menu_item">投资者关系</li>
                    <li className="menu_item">新闻中心</li>
                    <li className="menu_item">服务支持</li>
                </ul>
                <input type="text" className="search_input"/>
                <i className="search_icon"/>
            </header>
        </div>);
    }
}

export default Index;