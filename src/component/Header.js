import React from 'react';
import menu from './../../data/nav_menu';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu_name: 'about_us',
            drop_show: false
        }
    }

    componentDidMount() {
        this.hide_drop_menu();
    }

    componentDidUpdate() {
        this.hide_drop_menu();
    }

    render_drop_menu = () => {
        const {menu_name} = this.state;
        return menu[menu_name].map(item => (
            <li key={item.name} onClick={() => this.props.history.push(item.url)}>{item.name}</li>
        ))
    };

    hide_drop_menu = () => {
        const drop_menu = this.refs.drop_down_menu;
        drop_menu.style.top = `${120 - drop_menu.offsetHeight}px`;
    };

    show_drop_menu = key => {
        this.setState({
            menu_name: key || this.state.menu_name
        }, () => {
            const drop_menu = this.refs.drop_down_menu;
            drop_menu.style.top = '120px';
        })
    };

    render() {
        return (<header>
            <div className="header_top">
                <i className="co_logo"/>
                <ul className="nav_menu">
                    {menu.first_menu.map(item => (
                        <li
                            className="menu_item"
                            key={item.key}
                            onMouseMove={() => this.show_drop_menu(item.key)}
                            onMouseOut={this.hide_drop_menu}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
                <input type="text" className="search_input"/>
                <i className="search_icon"/>
            </div>
            <div
                ref="drop_down_menu"
                className="nav_drop"
                onMouseMove={() => this.show_drop_menu()}
                onMouseOut={this.hide_drop_menu}
            >
                <ul className="nav_drop_content">
                    {this.render_drop_menu()}
                </ul>
            </div>
        </header>)
    }
}

export default Header;