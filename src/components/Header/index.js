import React from 'react'
import Link from 'gatsby-link'
import Navbar from '../Navigation/index'
import logo from '../../../content/logo.jpg'

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showNav: false
        }
        this.onNavBarTogglerClick = this.onNavBarTogglerClick.bind(this);
    }

    onNavBarTogglerClick() {
        this.setState((prevState) => {
            return {
                showNav: !prevState.showNav
            };
        });
    }

    render() {
        return (
            <header className='navbar navbar-expand-lg box-shadow navbar-light'>
                <div className='container'>
                    <Link
                        to='/'
                        className='navbar-brand'
                    >
                        <img
                            src={logo}
                            alt='genisis services logo'
                            style={{
                                height: '140px'
                            }} />
                    </Link>
                    <button
                        className={`navbar-toggler ${this.state.showNav ? '' : 'collapsed'}`}
                        type='button'
                        onClick={this.onNavBarTogglerClick}
                        data-toggle='collapse'
                        data-target='#navbarSupportedContent'
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>

                    <div className={`collapse navbar-collapse justify-content-lg-end ${this.state.showNav ? 'show' : ''}`} id='navbarSupportedContent'>
                        <Navbar />
                    </div>
                </div>
            </header>
        );
    }
}
