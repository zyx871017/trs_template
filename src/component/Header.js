import React from 'react';

class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (<header>
            <div className="header_top">
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
            </div>
            <div className="nav_drop">

            </div>
        </header>)
    }
}

export default Header;