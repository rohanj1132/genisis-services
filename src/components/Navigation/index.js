import React from "react";
import NavLink from "./NavLink";
import SubMenu from "./SubMenu";

const Navbar = ({className}) => {
    return (
        <ul className='navbar-nav'>
            <NavLink to='/about/' title='About'></NavLink>
            <NavLink className='nav-item' to='/contact/' title='Contact Us'></NavLink>
            <NavLink className='nav-item dropdown' to='/events/' title='Events' showDropDown>
                <SubMenu links={['Corporate', 'Social', 'Wedding']} />
            </NavLink>
        </ul>
    );
}

export default Navbar;