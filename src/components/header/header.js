import React from 'react';
import './header.scss';
import logo from './header-logo.svg';
import { useDispatch } from "react-redux";
import { setMainPage } from '../../redux/actions/calendar-actions';

const Header = () => {
    const dispatch = useDispatch();

    const setPathToAbout =()=>{
        dispatch(setMainPage('about'))
    };
    const setPathToHome =()=>{
        dispatch(setMainPage('home'))
    };

    return (<header className="App-header">
                <img
                    src={logo}
                    alt="logo"
                    className="header-logo"
                />

                <nav className="header-nav">
                    <a href="#"
                       onClick={setPathToHome}
                    >
                        <span>Home</span>
                    </a>
                    <a href="#"
                       onClick={setPathToAbout}
                    >
                        <span>About Us</span>
                    </a>
                </nav>
            </header>
    );
};

export default Header;