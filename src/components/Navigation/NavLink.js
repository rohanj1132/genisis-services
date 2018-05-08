import React from "react";
import Link from "gatsby-link";

export default class NavLink extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            showSubMenu: false
        };
        this.toggleSubMenu = this.toggleSubMenu.bind(this);
    }

    toggleSubMenu () {
        this.setState({
            showSubMenu: !this.state.showSubMenu
        });
    }

    render () {
        return (
            <li 
                className={`nav-item ${this.props.showDropDown ? 'dropdown' : ''}`}
                onMouseEnter={this.toggleSubMenu}
                onMouseLeave={this.toggleSubMenu}>
                <Link to={this.props.to}
                    className={`nav-link ${this.props.showDropDown ? 'dropdown-toggle' : ''}`}
                    style={{
                        paddingLeft: '1.5rem',
                        paddingRight: '1.5rem',
                    }}
                    activeStyle={{
                        color: '#c3151b'
                    }}>
                    {this.props.title}
                </Link>
                {this.state.showSubMenu && this.props.children}
            </li>
        );
    }
}
