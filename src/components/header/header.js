import React from 'react';
import './header.scss';
import logo from './header-logo.svg';
import {
    Link
} from "react-router-dom";

const Header = () => {
    return (<header className="App-header">
                <img
                    src={logo}
                    alt="logo"
                    className="header-logo"
                />
                <nav className="header-nav">
                    <Link to="/"><span>Home</span></Link>
                    <Link to="/about">About</Link>
                </nav>
            </header>
    );
};

export default Header;