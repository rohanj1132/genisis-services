import React from "react";
import Link from "gatsby-link";

const SubMenu = ({className, links}) => {
    return (
        <ul className='dropdown-menu show'>
            {links.map((link, index) => {
                return (
                    <li key={index}>
                        <Link
                            className='dropdown-item'
                            activeStyle={{
                                color: '#c3151b',
                                backgroundColor: '#fff',
                            }}>
                            {link}
                        </Link>
                    </li>);
            })}
        </ul>
    );
}

export default SubMenu;